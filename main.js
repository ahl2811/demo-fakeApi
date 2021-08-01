import userApi from "./api/userApi.js";

const main = async () => {
  try {
    console.log("main");
    const users = await userApi.getAll();
    console.log(users);
  } catch (error) {
    console.log("Xay ra loi", error);
  }
};

main();
