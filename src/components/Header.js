import { useFormInput } from '../hooks/useFormInput';
import { observer } from 'mobx-react';
import store from '../store/todo';
import React from 'react';

export default observer(function Header() {
  const { onReset, ...control } = useFormInput();

  const handleKeyDown = (e) => {
    // 省略处理非空逻辑
    if (e.key === 'Enter') {
      store.add(control.value);
      onReset();
    }
  };
  return (
    <header className="header">
      
      <input
        {...control}
        onKeyDown={handleKeyDown}
        className="new-todo"
        placeholder="需要做什么"
        autoFocus
      />
    </header>
  );
});
