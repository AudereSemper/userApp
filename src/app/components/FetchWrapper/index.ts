// eslint-disable-next-line import/prefer-default-export
export function fetchWrapper(endpoint) {
  const headers = { 'Content-Type': 'application/json' };

  const config: any = {
    method: 'GET',
    headers: {
      ...headers,
    },
  };
  return window
    .fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      }
      return Promise.reject(data);
    });
}
