import { data } from "./data.js";

const getAll = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
};

export default { getAll };
