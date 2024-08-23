const add = (members)  => {
    if(members.length === 0)
        return 0;
    const defaultDelimiters = /,|\n/;
    const  numArray = members.split(defaultDelimiters);
    if(numArray.some( x => x < 0 ))
        throw new Error("Array contains a negative number");
    return numArray.reduce((result, e) => result + +e, 0);
}

console.log(add("1,2\n3"))
console.log(add("1\n2\n4"))