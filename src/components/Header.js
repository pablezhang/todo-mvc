import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="需要做什么" autoFocus />
    </header>
  );
}
