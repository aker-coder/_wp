// 實作 uniqueSorted(arr)，移除陣列重複的元素並從小到大排序。

function uniqueSorted(arr)
{
    const uniqueArray = [...new Set(arr)]
    
    uniqueArray.sort((a,b)=>a-b)
    return uniqueArray
}

const inputarry = prompt("please enter a array:").split(',').map(Number)
const result = uniqueSorted(inputarry)
console.log(result)