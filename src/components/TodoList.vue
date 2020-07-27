<template>
  <div>
    <h5>Todo List</h5>
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="index">
        {{ todo }}
        <button @click="deleteTodo(index)">DEL</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  methods: {
    deleteTodo(index) {
      this.$emit("delete", index);
    }
  }
};
</script>
