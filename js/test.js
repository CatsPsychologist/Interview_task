function sum(ls, k){
    let m = [];
    let combinations = [];
    let indices = [];
    function run(level){
        for(let i = 0; i < ls.length; i++){
            if(!indices[i]){
                indices[i] = true;
                combinations[level] = ls[i];
                if(level < k - 1){
                    run(level + 1, i + 1);
                } else {
                    m.push(([]).concat(combinations));
                }
                indices[i] = false;
            }
        }
    }
    run(0);
    return m;
}
let array = [51, 56, 58, 59, 61];
// console.log(...sum(array,3))

let result = sum(array,3);
console.log(result)
// console.log(1)

let updArr = result.map(value => {
    console.log(value)
})
// reduce((previousValue, currentValue) => {
//     return previousValue + currentValue
// })
