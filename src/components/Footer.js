import { observer } from 'mobx-react';
import React from 'react';
import store from '../store/todo';

export default observer(function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>1</strong> 剩余
      </span>
      <ul className="filters">
        <li>
          <a
            className={store.type === 'all' ? 'selected' : ''}
            onClick={() => store.updateType('all')}
            href="#/"
          >
            全部
          </a>
        </li>
        <li>
          <a
            className={store.type === 'active' ? 'selected' : ''}
            onClick={() => store.updateType('active')}
            href="#/active"
          >
            未完成
          </a>
        </li>
        <li>
          <a
            className={store.type === 'completed' ? 'selected' : ''}
            onClick={() => store.updateType('completed')}
            href="#/completed"
          >
            已完成
          </a>
        </li>
      </ul>
      <button className="clear-completed">清除已完成</button>
    </footer>
  );
});
