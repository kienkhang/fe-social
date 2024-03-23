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

export const post: ResourceParams = {
  post_id: {
    method: "GET",
    url: "/posts/{post_id}",
  },
  comment: {
    method: "POST",
    url: "/comments/{post_id}",
  },
};
