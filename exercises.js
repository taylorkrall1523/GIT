// implements chapter 5 functions

function flatten(arr){
    var newarr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newarr.push(arr[i][j])
        }
    }
    return newarr;
}


function loop(value, test, update, body){
    for (let n = value; test(n); n = update(n)){
        body(n);
    }
}
function everyLoop(array, test){
    for (let i = 0; i < array.length; i++) {
        if(!test(array[i])){
            return false
        }
    }
    return true
}
function everySome(array, test){
    var some = false
    var somee = false
    for (let i = 0; i < array.length; i++) {
        if(!test(array[i])){
            somee=false
        }
        else{
            some = true
        }
    }
    if( some || somee){
        return true
    }
    else{
        return false
    }
}


