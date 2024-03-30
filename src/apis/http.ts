import { todos } from "./resource";
import axios from "axios";
import env from "../env";
import _omit from "lodash-es/omit";
import _forIn from "lodash-es/forIn";

export type CallApiParams = {
  path: string;
  data?: object;
  headers?: object;
  config?: object;
};

export type CallGraphqlParams = {
  query: string;
  variables?: object;
  baseUrl?: string;
  headers?: object;
};

const client = axios.create({
  baseURL: env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const http = {
  client,
  callApi,
  callGraphql,
};

// =========== REGION MAIN RESOURCE =========
const resource = {
  todos,
};
// =========== END REGION MAIN RESOURCE =========

function callApi(p: CallApiParams) {
  const [module, moduleName] = p.path.split(".");

  const fullResource = resource[module as keyof typeof resource][moduleName];

  let url = `${fullResource.baseURL ? fullResource.baseURL : ""}${
    fullResource.url
  }`;
  // example.com/api/{x}/wano?{y}&{z} -> expected -> replace {x}, {y}, {z} to detail

  // HANDLE GENERATE headers
  const headers = p.headers
    ? Object.assign(
        {},
        client.defaults.headers,
        fullResource.headers,
        p.headers
      )
    : fullResource.headers || {};
  // HANDLE

  // HANDLE args && body
  const data = p.data;
  const argument = _omit(data, ["body"]);

  _forIn(argument, (val, key) => {
    if (val) {
      url = url.replace("{" + key + "}", val);
    } else {
      const regexp = new RegExp("[?&]" + `${key}={${key}}`, "g");
      url = url.replace(regexp, "");
    }
  });

  url = url.replace(/[?&]$/g, "");

  const config = {
    method: fullResource.method,
    headers: headers as any,
    data: (p.data as any).body || {},
    url,
  };

  return client.request(config).catch((e) => {
    throw e;
  });
}

function callGraphql(p: CallGraphqlParams) {
  const config = {
    method: "POST",
    headers: p.headers as any,
    data: {
      query: p.query,
      variables: p.variables,
    },
    url: p.baseUrl || env.GRAPHQL_BASE_URL,
  };

  return client.request(config).catch((e) => {
    throw e;
  });
}
export default http;
