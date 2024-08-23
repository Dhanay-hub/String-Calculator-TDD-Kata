const add = (members)  => {
    if(members.length === 0)
        return 0;
    let defaultDelimiters = /,|\n/;
    if (members.startsWith("//")) {
        const fragments = members.split("\n", 2); 
        // Replace member string string with new string w/o delimeter 
        members = fragments[1];
        // Replace default delimeter with the one given
        defaultDelimiters = new RegExp(fragments[0].slice(2)); 
    }
    const numArray = members.split(defaultDelimiters);
    if(numArray.some( x => x < 0 ))
        throw new Error("Array contains a negative number which is not allowed");
    return numArray.reduce((result, e) => result + +e, 0);
}

console.log(add("//:\n1:2:3"))

module.exports = add;