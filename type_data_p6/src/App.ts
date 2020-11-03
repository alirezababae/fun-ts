type any1 = string | number | boolean
type obj = {
    name:string , uid:any1
}

const logDeleteeis = (a:any1,item:string):void => {
    console.log(`${item} is has ${a}`);
    
}
 