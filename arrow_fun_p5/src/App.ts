let fun:Function

fun = ()=>{
    console.log('hello test');
    
}

fun()

const add = (a:number , b:number , c:number | string = 10):void => {

console.log(a+b);
console.log(c);

// return a + b erro no return in void type functios



}

add(5,10,'20')

const muisc = (a:number , b:number):number => {
    return a + b
}

let result = muisc(10,55)