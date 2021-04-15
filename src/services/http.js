const http = {
  get: async (url) => {
    const options = { method: 'GET' };
    try {
      const resp = await fetch(url, options);
      const jsonResponse = await resp.json();
      return jsonResponse;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export default http;
