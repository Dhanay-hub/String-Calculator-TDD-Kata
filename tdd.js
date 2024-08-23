const add = (members)  => {

    return members.split(",").reduce((result, e) => result + +e, 0);
}

console.log(add("1,2,3"))