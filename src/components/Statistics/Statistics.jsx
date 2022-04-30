import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import getRandomHexColor from './RandonHexColor';

const Statistics = ({ title, data }) => {
  const renderData = () =>
    data.map(({ id, label, percentage }) => (
      <li
        className={s.item}
        key={id}
        style={{ backgroundColor: getRandomHexColor() }}
      >
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
      </li>
    ));

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>{data && renderData()}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
