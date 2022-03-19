import http from "../utils/constants";

const getAll = () => {
  return http.get("product_items");
};

const get = ({ id }) => {
  return http.get(`product_items/${id}`);
};

const create = ({ data }) => {
  return http.post("product_items", data);
};

const update = ({ id, data }) => {
  return http.put(`product_items/${id}`, data);
};

const remove = ({ id }) => {
  return http.delete(`product_items/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};
