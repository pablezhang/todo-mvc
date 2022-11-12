import { observer } from 'mobx-react';
import React from 'react';
import store from '../store/todo';
export default observer(function Main() {
  return (
    <section className="main">
      <input
        checked={store.isAll}
        onChange={(e) => store.checkAll(e.target.checked)}
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">全选</label>
      <ul className="todo-list">
        {store.showList.map((item) => {
          return (
            <li key={item.id} className={item.isDone ? 'completed' : ''}>
              <div className="view">
                <input
                  onChange={() => store.updateById(item.id)}
                  checked={item.isDone}
                  className="toggle"
                  type="checkbox"
                />
                <label>{item.task}</label>
                <button
                  className="destroy"
                  onClick={() => store.delById(item.id)}
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
});
