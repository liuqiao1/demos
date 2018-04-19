// var str="<table><tr><td>1</td><td>liuqiao</td><td>girl</td></tr><tr><td>2</td><td>gongbei</td><td>boy</td></tr></table>";
var str='<table border="1" class="dataframe hideme"><thead><tr style="text-align: right;"> <th></th> <th>userid</th> <th>pt</th></tr> </thead><tbody> <tr> <th>0</th> <td>1</td> <td>2017-08-24</td> </tr> <tr> <th>1</th> <td>2</td> <td>2017-08-24</td> </tr><tr> <th>2</th> <td>3</td> <td>2017-08-24</td> </tr> <tr> <th>3</th> <td>4</td> <td>2017-08-24</td> </tr><tr> <th>4</th> <td>5</td> <td>2017-08-24</td> </tr></tbody> </table>';
// var re = /\<td\>[0-9a-zA-Z\_]+\<\/td\>/;
// var re2 = /\<tr\>[0-9a-zA-Z\_\<\>\/]+\<\/tr\>/;

// var re3 = /(\<tr\>[0-9a-zA-Z\_\<\>\/]+\<\/tr\>)/g;
// var re4 = /(\<td\>[0-9a-zA-Z\_]+\<\/td\>)/;

// var re5 = /<tr>([\s\S]*?)<\/tr>/g;
// var re6 = /<tr>([\s\S]+?)<\/tr>/g;

var re7 = /<tr[\s\S]*?>[\s\S]+?<\/tr>/g;
var re8 = /<t(d|h)>[\s\S]*?<\/t(d|h)>/g;

const rows = str.match(re7);

let tableData = rows.map(row => {
    // console.log(row.match(re8));
    return row.match(re8);
})
console.log(tableData);
tableData = tableData.map(row => {
    return row.map(column => {
        return column.slice(column.indexOf('>')+1, column.lastIndexOf('<'));
    })
})

console.log(tableData);


// console.log(re6.exec(str));
// console.log(re6.exec(str));
// console.log(re6.exec(str));

// console.log(re7.exec(str), re7.lastIndex);
// console.log(re7.exec(str), re7.lastIndex);
// console.log(re7.exec(str), re7.lastIndex);

// let result = re7.exec(str);
// let data = [];
// while(result) {
//   data.push(result[0]);
//   result = re7.exec(str);
// }

// data.map(row => {
//     let result = re8.exec(row);
//     let data = [];
//     while(result) {
//       data.push(result[0]);
//       result = re8.exec(row);
//     }
//     console.log(data);  
// })

// console.log(data);


// let result = re3.exec(str);
// console.log(re3.lastIndex);

// re3.exec(str);
// console.log(re3.lastIndex);

// console.log(str.match(re2));

// result = re3.exec(str);
// console.log(result);
// result.map(element => {
//     console.log(element);
//     // var row = re4.exec(element);
//     // console.log(row);
//     // row.map(item => {
//     //     console.log(item);
//     // })
// });

// console.log(Array.isArray(result));


{/* <div> <style scoped> 
    .dataframe tbody tr th:only-of-type { vertical-align: middle; } 
    .dataframe tbody tr th { vertical-align: top; } 
    .dataframe thead th { text-align: right; } </style> 
    <table border="1" class="dataframe hideme"> 
      <thead> 
          <tr style="text-align: right;"> 
            <th></th> 
            <th>userid</th> 
            <th>pt</th>
          </tr> 
      </thead>
      <tbody> 
          <tr> <th>0</th> <td>1</td> <td>2017-08-24</td> </tr> <tr> <th>1</th> <td>2</td> <td>2017-08-24</td> </tr>
          <tr> <th>2</th> <td>3</td> <td>2017-08-24</td> </tr> <tr> <th>3</th> <td>4</td> <td>2017-08-24</td> </tr>
          <tr> <th>4</th> <td>5</td> <td>2017-08-24</td> </tr>
     </tbody> 
    </table> 
</div> */}