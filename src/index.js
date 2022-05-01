import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import user from './data/user.json';
import statistics from './data/statistics.json';
import friends from './data/friends.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={{ user, statistics, friends }} />
  </React.StrictMode>
);
