// データを持ってくるための関数を書いておきたい
const axios = require("axios");

export class get_data {
  base_url = "https://agile-tundra-65071.herokuapp.com/";
  //token = "b99bf467f68093508fc15a07da85b634";
  user = "hackathon-vol5-1";
  constructor(username) {
    this.user = username;
  }

  async get_data() {
    var url = this.base_url + "api/" + this.user;
    var data;
    await axios
      .get(url)
      .then(function (res) {
        //console.log(res.data);
        data = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
    return data;
  }

  async preprocess_data() {
    var logs = await this.get_data();
    var log_list = [];
    for (const index in logs) {
      //console.log(logs[index]);
      var tmp = {
        id: this.user,
        work: logs[index],
      };
      log_list.push(tmp);
    }
    console.log(log_list);
    return log_list;
  }
}
//sample
//a = new get_data("hackathon-vol5-1");
//a.preprocess_data();
