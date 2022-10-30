import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';

export const useTodoStore = defineStore('todo', () => {
  /** 收集用户输入的内容 */
  const task = ref('');

  const type = ref('all');

  const list = ref(JSON.parse(localStorage.getItem('todo-list') || '[]'));

  const delById = (id) => {
    list.value = list.value.filter((item) => item.id !== id);
  };

  const add = () => {
    list.value.push({ task: task.value, id: Date.now(), isDone: false });
    task.value = '';
  };

  const updateType = (_type) => {
    type.value = _type;
  };

  watch(
    list,
    () => {
      localStorage.setItem('todo-list', JSON.stringify(list.value));
    },
    { deep: true }
  );

  const showList = computed(() => {
    return list.value.filter((item) => {
      if (type.value === 'all') return true;
      if (type.value === 'active') return !item.isDone;
      return item.isDone;
    });
  });

  return { showList, delById, add, task, updateType, type };
});
