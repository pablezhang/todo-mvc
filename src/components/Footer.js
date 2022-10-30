import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>1</strong> 剩余
      </span>
      <ul className="filters">
        <li>
          <a className="all selected" href="#/">
            全部
          </a>
        </li>
        <li>
          <a className="active" href="#/active">
            未完成
          </a>
        </li>
        <li>
          <a className="completed" href="#/completed">
            已完成
          </a>
        </li>
      </ul>
      <button className="clear-completed">清除已完成</button>
    </footer>
  );
}
