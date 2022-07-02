const groupAnagram = (strs) => {

    let map = new Map()
    let finalArr = []
    if(strs[i] === "") return [""]
    for(let i=0; i<strs.length; i++){
        let sum = 0
        if(strs[i] === ""){
            finalArr.push(strs[i])
            continue;
        }
        strs[i].split("").forEach(element => {
           sum += element.charCodeAt(0)
        });
        if(map.get(sum)){
            let arr = map.get(sum) + " " 
            console.log(arr)
            arr = arr + strs[i] 
            map.set(sum, arr)
        } else {
        
            map.set(sum,strs[i])
        }
    }
    map.forEach((val, key) =>{
        val.replace(" ", "")
      
        finalArr.push(val.split(' '))
    })
    return finalArr
}
strs = [""]
console.log(groupAnagram(strs))