const axios = require("axios");

const getMenu = async () => {
  try {
    const response = await axios.get("'http://54.180.126.55:8080/api/menus");
    console.log(response.data);
  } catch (error) {
    console.log("ERROR");
  }
};

getMenu();
