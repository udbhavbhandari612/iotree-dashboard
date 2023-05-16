const getAllPinsData = () => {
  return fetch("https://blynk.cloud/external/api/get?token=ZU9Oh1lwTNjRrLL0MHN5FjoH1hvlTym8&v1&v2&v3&v4&v5&v6&v7", {
    method: "GET"
  }).then((res) => res.json());
};

export { getAllPinsData };
