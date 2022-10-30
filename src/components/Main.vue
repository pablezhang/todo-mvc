<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">全选</label>
    <ul class="todo-list">
      <li :class="{ completed: item.isDone }" v-for="item in store.showList">
        <div class="view">
          <input class="toggle" type="checkbox" v-model="item.isDone" />
          <label>{{ item.task }}</label>
          <button class="destroy" @click="store.delById(item.id)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>
<script setup>
import { useTodoStore } from '../store/todo';
const store = useTodoStore();
</script>
<style lang=""></style>
