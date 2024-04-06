import http from "./http";

export function getTodos() {
  return http
    .callApi({
      path: "todos.get_all",
      data: {},
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export function getIncompleteTodos() {
  return http
    .callApi({
      path: "todos.get_all",
      data: {},
    })
    .then((res) => {
      const incompleteTodos = res.data.filter((todo) => !todo.isCompleted);
      return incompleteTodos;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export function getCompleteTodos() {
  return http
    .callApi({
      path: "todos.get_all",
      data: {},
    })
    .then((res) => {
      const completeTodos = res.data.filter((todo) => todo.isCompleted);
      return completeTodos;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export function getTodoById(id: string | number) {
  return http
    .callApi({
      path: "todos.get_id",
      data: {
        id,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export function createTodo(form: any) {
  return http
    .callApi({
      path: "todos.create_todo",
      data: {
        body: {
          ...form,
        },
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export function deleteTodo(id: string | number) {
  return http
    .callApi({
      path: "todos.delete_todo",
      data: {
        id,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export function updateTodo(id: string | number, form: any) {
  return http
    .callApi({
      path: "todos.update_todo",
      data: {
        id,
        body: {
          ...form,
        },
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}
