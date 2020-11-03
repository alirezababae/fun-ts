var varibelss = ["nan", "foo", "apple", "bnana"];
// varibelss.push('tod',22) // error no push interger
// true
varibelss.push("BNANA", "test");
console.log(varibelss);
//
var mixed = ["bamas", 22, false, 'no'];
mixed.push("bans", 333, true);
console.log(mixed);
//objects
var join = {
    name: "abc",
    age: 22,
    status: true
};
join.name = "cba";
join.age = 22;
join.status = false;
// join.age = "20" // error no chnge data type 
// if all type data name 
join = {
    name: "test",
    age: 99,
    status: true
};
console.log(join);
