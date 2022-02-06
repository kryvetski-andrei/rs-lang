export const urlParser = {
  parseRequestURL: () => {
    const url = location.hash.slice(1).toLowerCase() || '/';

    const splitedUrl = url.split('/');

    const request = {
      resource: splitedUrl[1],
      id: splitedUrl[2],
      verb: splitedUrl[3],
    };

    return request;
  },
};

export default urlParser;
