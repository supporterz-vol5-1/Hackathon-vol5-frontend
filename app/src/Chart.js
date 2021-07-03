import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

//バックから投げられたデータ　とりあえずここに置いておく
const dataArrayObj = [
    {
        id: 'userid', 
        work: {
            python: 10000, 
            ruby: 4000, 
        }, 
    }, 
    {
        id: 'userid',  
        work: {
            python: 0, 
            typescript: 8000, 
        }, 
    }, 
    {
        id: 'userid', 
        work: {
            ruby: 20000, 
        },
    }, 
    {
        id: 'userid', 
        work: {
            python: 5000, 
            javascript: 3000, 
        }, 
    }, 
    {
        id: 'userid', 
        work: {
            python: 10000, 
            ruby: 4000, 
        }, 
    }, 
    {
        id: 'userid', 
        work: {
            go: 8000, 
        }, 
    }, 
    {
        id: 'userid', 
        work: {
            python: 4000, 
            typescript: 5000, 
        }, 
    }, 
]

const dataArrayStr = JSON.stringify(dataArrayObj);

//JSON文字列を受けとって変換するという体でもう一度オブジェクトに変換
const jsonData = JSON.parse(dataArrayStr);

class Chart extends Component {
    render () {
        //使われている言語を配列の形で取得する
        let langs = [];

        for(let i = 0; i < 7; i++){
            langs = langs.concat(Object.keys(jsonData[i].work));
        }

        langs = [...new Set(langs)];

        //ファイルを開いていた時間を一週間単位で配列timesに取得して折れ線グラフのコンポーネントに渡す　これを全言語に対してやればよさそう
        let times = [];
        let time;
        let dataset;
        let datasets = [];

        for(let j = 0; j < langs.length; j++){
            for(let i = 0; i < jsonData.length; i++){
                time = jsonData[i].work[langs[j]];
                times = times.concat(time);
            }
            dataset = {
                data: times, 
                label: langs[j], 
            }

            datasets = datasets.concat(dataset);
        }

      const data = {
        labels: ['April', 'May', 'June', 'July', 'August', 'September'],
        datasets: datasets, 
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