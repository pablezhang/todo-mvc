import { action, observable } from 'mobx';

class TodoStore {
  @observable
  list = [
    { id: 1, task: '学习vue1', isDone: true },
    { id: 2, task: '学习vue2', isDone: true },
  ];

  @observable
  type = 'all';

  @action
  updateById = (id) => {
    this.list = this.list.map((item) => ({
      ...item,
      isDone: item.id === id ? !item.isDone : item.isDone,
    }));
  };

  @action
  add(task) {
    this.list.push({ id: Date.now(), isDone: false, task });
  }

  @action
  delById(id) {
    this.list = this.list.filter((item) => item.id !== id);
  }

  @action
  updateType(type) {
    this.type = type;
  }

  // 等同于vue中的计算属性
  get showList() {
    return this.list.filter((item) => {
      if (this.type === 'active') return !item.isDone;
      if (this.type === 'completed') return item.isDone;
      return true;
    });
  }

  get isAll() {
    return this.list.length ? this.list.every((item) => item.isDone) : false;
  }

  @action
  checkAll(checked) {
    this.list.forEach((item) => {
      item.isDone = checked;
    });
  }
}

// 可以让TodoStore保持单例模式
export default new TodoStore();
