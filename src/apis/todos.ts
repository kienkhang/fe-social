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
export function deleteTodo(id: string) {
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
