function matchLastItem (param){
    let res1 = param.slice(0,-1).join('')
    let res2 = param.slice(-1).join('')
    return res1 == res2
}

console.log(matchLastItem(['rsq', '6hi', 'g', 'rsq6hig']));