<template>
  <header className="header">
    <h1>todos</h1>
    <input
      v-model="store.task"
      @keydown.enter="store.add"
      className="new-todo"
      placeholder="需要做什么"
      autoFocus
    />
  </header>
</template>
<script setup>
import { useTodoStore } from '../store/todo';
const store = useTodoStore();
</script>
<style lang=""></style>
