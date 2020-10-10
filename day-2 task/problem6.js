var arr= [
    [
        ['firstName', 'Vasanth'],
        ['lastName', 'Raja'],
        ['age', 24],
        ['role', 'JSWizard']
    ], [
        ['firstName', 'Sri'], 
        ['lastName', 'Devi'], 
        ['age', 28], 
        ['role', 'Coder']
        ]
    ];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 var k = 0;
 for(let i in arr){
     var obj = {};
     for(let j in arr[i]){
        obj[arr[i][j][0]] = arr[i][j][1]
     }
     tranformEmployeeList[k] = obj;
     k++;
 }
 return tranformEmployeeList;
}
console.log(transformEmployeeData(arr))