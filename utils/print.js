const { printTable, Table } = require('console-table-printer');

// obj = {columns: [
//     { name: 'Name', alignment: 'left'},
//     { name: 'Time', alignment: 'left'},
//     { name: 'CPU', alignment: 'left'},
//   ],
// }

const table = new Table(); // <-- (obj)

module.exports = (arr) => {
    let sortedArr = arr.sort((a, b) => a.time - b.time);

    table.addRow({Name:sortedArr[0].name, Time:sortedArr[0].time + " ms", RAM:sortedArr[0].ram + "MB", CPU:sortedArr[0].cpu + " %"}, {color:'green', alignment: 'left'})
    
    for (let i = 1; i < sortedArr.length; i++) {
        table.addRow({Name:sortedArr[i].name, Time:sortedArr[i].time + " ms", RAM:sortedArr[i].ram + "MB", CPU:sortedArr[i].cpu + " %"}, {color:'yellow'})
    }
    
    return table.printTable();
}