let csvStr = "School,Women,Men,Gap\nMIT,94,152,58\nStanford,96,151,55\nHarvard,112,165,53\nU.Penn,92,141,49\nPrinceton,90,137,47\nChicago,78,118,40\nGeorgetown,94,131,37\nTufts,76,112,36\nYale,79,114,35\nColumbia,86,119,33\nDuke,93,124,31\nDartmouth,84,114,30\nNYU,67,94,27\nNotre Dame,73,100,27\nCornell,80,107,27\nMichigan,62,84,22\nBrown,72,92,20\nBerkeley,71,88,17\nEmory,68,82,14\nUCLA,64,78,14\nSoCal,72,81,9";

// const rows = csvStr.split('\n');
// // console.log(rows);
// const tableData = rows.map(row => {
//     return row.split(',');
// })
// console.log(tableData);

// let innerHtml = '<table>';
// tableData.forEach(row => {
//     innerHtml += '<tr>';
//     row.forEach(column => {
//       innerHtml += '<td>';
//       innerHtml += column;
//       innerHtml += '</td>';
//     })
//     innerHtml += '</tr>'
// })
// innerHtml += '</table>';

// console.log(innerHtml);
// const tableHeader = tableData[0];
// const colums = tableHeader.map(item => {
//     return {
//         title: item,
//         dataIndex: item,
//         key: item,
//     }
// });
// // console.log(colums);

// function Row(cells){
//   tableHeader.forEach((head, index) => {
//       this[head] = cells[index];
//   })
// }

// let data = [];
// for(let i=1; i<tableData.length; i++) {
//   data.push(new Row(tableData[i]));
// }

// console.log(data);
// console.log(data);

function csvToTable(csvStr){
    let antTableData = {
      colums: [],
      data: [],
    };
    if(typeof csvStr !== 'string' || csvStr === '')return tableData;
    const rows = csvStr.split('\n');
    const tableData = rows.map(row => {
        return row.split(',');
    })
    let tableHeader = tableData[0];
    antTableData.colums = tableHeader.map(item => {
        return {
            title: item,
            dataIndex: item,
            key: item,
        }
    });
    for(let i=1; i<tableData.length; i++) {
        antTableData.data.push(new Row(tableData[i], i));
    }

    function Row(cells, index){
        tableHeader.forEach((head, index) => {
            this[head] = cells[index];
        })
        this.key = index;
    }
    tableHeader = null;
    return antTableData;
}

console.log(csvToTable(csvStr));

export function csvToTable(csvStr) {
    const rows = csvStr.split('\n');
    // console.log(rows);
    const tableData = rows.map(row => {
      return row.split(',');
    });
    // console.log(tableData);
  
    let innerHtml = '<table>';
    tableData.forEach(row => {
      innerHtml += '<tr>';
      row.forEach(column => {
        innerHtml += '<td>';
        innerHtml += column;
        innerHtml += '</td>';
      });
      innerHtml += '</tr>';
    });
    innerHtml += '</table>';
  
    return innerHtml;
  }
