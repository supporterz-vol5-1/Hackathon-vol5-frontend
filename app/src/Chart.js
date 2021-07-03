import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import moment from 'moment';
import { get_data } from "./fetch_data";


//バックから投げられたデータ　とりあえずここに置いておく
const dataArrayObj = [
  {
    id: "userid",
    work: {
      python: 10000,
      ruby: 4000,
    },
  },
  {
    id: "userid",
    work: {
      python: 0,
      typescript: 8000,
    },
  },
  {
    id: "userid",
    work: {
      ruby: 20000,
    },
  },
  {
    id: "userid",
    work: {
      python: 5000,
      javascript: 3000,
    },
  },
  {
    id: "userid",
    work: {
      python: 10000,
      ruby: 4000,
    },
  },
  {
    id: "userid",
    work: {
      go: 8000,
    },
  },
  {
    id: "userid",
    work: {
      python: 4000,
      typescript: 5000,
    },
  },
];

const dataArrayStr = JSON.stringify(dataArrayObj);

//JSON文字列を受けとって変換するという体でもう一度オブジェクトに変換
const jsonData = JSON.parse(dataArrayStr);
//const jsonData = get_data.preprocess_data();
console.log(jsonData);

class Chart extends Component {
  render() {
    //使われている言語を配列の形で取得する
    let langs = [];

    for (let i = 0; i < 7; i++) {
      langs = langs.concat(Object.keys(jsonData[i].work));
    }

    langs = [...new Set(langs)];
    console.log(langs);
    const str = langs[0];
    console.log(jsonData[0].work[str]);

    //ファイルを開いていた時間を一週間単位で配列timesに取得して折れ線グラフのコンポーネントに渡す　これを全言語に対してやればよさそう
    let times = [];
    let time;
    let dataset;
    let datasets = [];
    let language;

    for (let j = 0; j < langs.length; j++) {
      language = langs[j];
      times = [];
      for (let i = 0; i < jsonData.length; i++) {
        time = jsonData[i].work[language] ? jsonData[i].work[language] : 0;
        times = times.concat(time);
        console.log(time);
      }
      dataset = {
        data: times,
        label: language,
      };

      datasets = datasets.concat(dataset);
    }

    //データを受け取った時の日時を取得
    let m = moment().add("days", -7);
    console.log(m.format("MM/DD"));

    let days = [];

    for(let i = 0; i < jsonData.length; i++){
      days = days.concat(m.add("days", 1).format("MM/DD"));
    }

    const data = {
      labels: days,
      datasets: datasets,
      fill: false, 
    };
    const options = {
      // 省略
    };
    return (
      <div>
        <Line data={data} options={options} />
      </div>
    );
  }
}

export default Chart;
