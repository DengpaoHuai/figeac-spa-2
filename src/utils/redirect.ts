import router from "../router/router";

const redirect = (path: string) => {
  window.history.pushState({}, path, window.location.origin + path);
  router();
};

export default redirect;
