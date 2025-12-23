import { API } from './endpoints';

const $api = (service, params) => {
  let url = API[service];
  if (!url) {
    throw new Error(`API endpoint not found: ${service}`);
  }
  if (params) {
    const queryParams = {};
    let hasQuery = false;
    for (const [key, value] of Object.entries(params)) {
      let replaced = false;
      url = url.replaceAll(`{${key}}`, () => {
        replaced = true;
        return value;
      });
      if (!replaced) {
        hasQuery = true;
        queryParams[key] = value;
      }
    }
    if (hasQuery) {
      const query = new URLSearchParams(queryParams).toString();
      url += `?${query}`;
    }
  }
  return url;
};

export { $api };