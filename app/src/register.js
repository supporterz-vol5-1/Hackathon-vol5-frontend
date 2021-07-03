const axios = require("axios");
const base_url = "https://agile-tundra-65071.herokuapp.com/";
//usernameは文字列を入れてください
function register(username) {
  var url = base_url + "api/register/" + username;
  let token;
  console.log(url);
  axios
    .get(url)
    .then((res) => {
      console.log(res);
      token = res.token;
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return token;
}

//register("kei");

export default register;
