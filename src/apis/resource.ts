export type ResourceParam = {
  method: string;
  url: string;
  data?: Object;
  headers?: Object;
  baseURL?: string;
};

export type ResourceParams = {
  [x: string]: ResourceParam;
};

export const todos: ResourceParams = {
  get_all: {
    method: "GET",
    url: "/todos",
  },
  get_id: {
    method: "GET",
    url: "/todos/{id}",
  },
  create_todo: {
    method: "POST",
    url: "/todos",
  },
  delete_todo: {
    method: "DELETE",
    url: "/todos/{id}",
  },
  update_todo: {
    method: "PATCH",
    url: "/todos/{id}",
  },
};
