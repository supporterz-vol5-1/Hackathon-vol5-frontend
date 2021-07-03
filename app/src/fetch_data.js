// データを持ってくるための関数を書いておきたい
const axios = require("axios");

class get_data {
  base_url = "https://agile-tundra-65071.herokuapp.com/";
  //token = "b99bf467f68093508fc15a07da85b634";
  user = "mori";
  db_data;

  get_data() {
    var url = this.base_url + "api/" + this.user;
    var data;
    axios
      .get(url)
      .then(function (res) {
        console.log(res.data);
        data = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
    this.db_data = data;
  }

  preprocess_data() {}
}

a = new get_data();
a.get_data();
