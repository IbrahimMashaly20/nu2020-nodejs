/*function fact(n){

    var fact = 1 ; 
    for (i=n; i >=1; i--){
        fact*=i;
    }
    return fact ; 
}*/
function Area(x,y ){

    return x * y ; 
}
function testcallback (callbackfunction){

    return callbackfunction(4,5); // CALL Back 


}
let x = testcallback(Area);
console.log (x);