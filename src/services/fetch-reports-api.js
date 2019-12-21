const endpoint = ' http://5dfb6cf80301690014b8fb0a.mockapi.io/api/v1/reports';

const fetchReports= () => {
  return fetch(endpoint).then(response => response.json());
};

export { fetchReports };



