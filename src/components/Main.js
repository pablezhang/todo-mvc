import React from 'react';

export default function Main() {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">全选</label>
      <ul className="todo-list">
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>吃饭</label>
            <button className="destroy"></button>
          </div>
        </li>
        <li className="">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>睡觉</label>
            <button className="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
  );
}
