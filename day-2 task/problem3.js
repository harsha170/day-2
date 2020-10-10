var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
var result = new Array();
var i = 0;
function convertListToObject(obj) {
    for (let key in obj) {
        result[i] = [key, obj[key]];
       i++;
    }
 console.log(result)
}
convertListToObject(obj)
