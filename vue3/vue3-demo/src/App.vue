<template>
  <!-- <list /> -->
  <todoList />
</template>

<script>
// import list from './components/list';
import todoList from'./components/todoList';
export default {
  name: 'App',
  components: {
    todoList
    // list
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
