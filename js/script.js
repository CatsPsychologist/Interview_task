const chooseOptimalDistance = (t, k = 1, ls) => {

    if(ls.length < 3){
        console.log(null)
        return null
    }
    if(k < 1){
        return null
    }

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
    let updValue;

    let mySet = new Set();

    result.forEach((value, index, array1) => {

        let updValue = value.reduce((previousValue, currentValue) =>  previousValue + currentValue,0)
        mySet.add(updValue)

    })

    let checkArr = Array.from(mySet)

    let closest = checkArr.reduce(function(prev, curr) {
        return (Math.abs(curr - t) < Math.abs(prev - t) ? curr : prev);
    });

    return closest

}



console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]));
console.log(chooseOptimalDistance(163, 3, [50]));


