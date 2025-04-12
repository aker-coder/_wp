// 實作 sumArray(arr)，計算數字陣列的總和。


function sumArray(arr)
{
    const sum = arr.reduce((sum,num)=> sum + num,0)
    return sum
}

const result = prompt("please enter a array").split(',').map(Number)
console.log(sumArray(result))