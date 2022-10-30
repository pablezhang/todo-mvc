<template>
  <footer class="footer">
    <span class="todo-count"> <strong>1</strong> 剩余 </span>
    <ul class="filters">
      <li>
        <a
          @click="store.updateType('all')"
          :class="{ selected: store.type === 'all' }"
          href="#/"
        >
          全部
        </a>
      </li>
      <li>
        <a
          @click="store.updateType('active')"
          :class="{ selected: store.type === 'active' }"
          href="#/active"
        >
          未完成
        </a>
      </li>
      <li>
        <a
          @click="store.updateType('completed')"
          :class="{ selected: store.type === 'completed' }"
          href="#/completed"
        >
          已完成
        </a>
      </li>
    </ul>
    <button class="clear-completed">清除已完成</button>
  </footer>
</template>
<script setup>
import { useTodoStore } from '../store/todo';

const store = useTodoStore();
</script>
<style lang=""></style>
