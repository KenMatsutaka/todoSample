import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    component: TodoList
  },
  {
    path: "/todos/add",
    component: TodoForm
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;