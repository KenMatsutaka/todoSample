<template>
  <div>
    <todo-form @add="addTodo($event)"></todo-form>
    <todo-list :todos="todos" @delete="deleteTodo($event)"></todo-list>
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
export default {
  components: {
    "todo-form": TodoForm,
    "todo-list": TodoList
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>
