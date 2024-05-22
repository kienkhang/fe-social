import http from "./http";

export function getEvents() {
  return http
    .callApi({
      path: "events.get_all",
      data: {},
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export function getEventById(id: string | number) {
  return http
    .callApi({
      path: "events.get_id",
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

export function createEvent(form: any) {
  return http
    .callApi({
      path: "events.create_event",
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

export function updateEvent(id: number | string, form: any) {
  return http
    .callApi({
      path: "events.update_event",
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

export function deleteEvent(id: number | string) {
  return http
    .callApi({
      path: "events.delete_event",
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
