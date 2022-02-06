// sum(1,2,3,4) => 10

function sum (...numbers) {
    let calcArr = new Array;
    numbers.forEach(element => {
        if(Array.isArray(element))
            calcArr = calcArr.concat( [...element]);
            else 
            calcArr.unshift(element);
    });
    return calcArr.reduce((a,b) => a+b);
}

console.log(sum(2,6,45,[1,2,3,4],7));