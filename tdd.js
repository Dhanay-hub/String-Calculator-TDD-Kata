const add = (members)  => {
    if(members.length === 0)
        return 0;
    const  numArray = members.split(",");
    if(numArray.some( x => x < 0 ))
        throw new Error("Array contains a negative number");
    return numArray.reduce((result, e) => result + +e, 0);
}

console.log(add("   "))
// console.log(add("1,2,3,-4"))