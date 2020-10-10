var arr = ['GUVI', 'I', 'am', 'a geek'];
function transformFirstAndLast(arr) {
    var obj = {}
   
    obj[arr[0]]= arr[arr.length-1]
    console.log(obj)
}
 transformFirstAndLast(arr)