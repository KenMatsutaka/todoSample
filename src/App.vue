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
  created() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
};
</script>
