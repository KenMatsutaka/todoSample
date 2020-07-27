<template>
  <div>
    <h3>My Todo</h3>
    <input type="text" v-model="newTodo" placeholder="Input here…" />
    <button @click="addTodo()">ADD</button>
    <h5>Todo List</h5>
    <ul>
      <li v-for="(todo, i) in todos" v-bind:key="i">
        {{ todo }}
        <button @click="deleteTodo(i)">DEL</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo === "") {
        return;
      }
      this.todos.push(this.newTodo);
      this.newTodo = "";
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>
