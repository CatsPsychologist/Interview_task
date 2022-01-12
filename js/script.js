const chooseOptimalDistance = (t, k, ls) => {

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

        let result = sum(ls,k)
        let a = [...result]
        console.log(...result)



    let sumArr = t =>{
        return result.reduce((previousValue, currentValue) => previousValue + currentValue)

    }
    // return null;
}
console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]));
// console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]));
 //173
// chooseOptimalDistance(163, 3, [50]); // null

//
// function sum(ls, k){
//     let m = [];
//     let combinations = [];
//     let indices = [];
//     function run(level){
//         for(let i = 0; i < ls.length; i++){
//             if(!indices[i]){
//                 indices[i] = true;
//                 combinations[level] = ls[i];
//                 if(level < k - 1){
//                     run(level + 1, i + 1);
//                 } else {
//                     m.push(([]).concat(combinations));
//                 }
//                 indices[i] = false;
//             }
//         }
//     }
//     run(0);
//     return m;
// }
// let array = [51, 56, 58, 59, 61];
// console.log(...sum(array,3))