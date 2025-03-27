// 建立一個陣列 numbers = [3, 7, 1, 9, 4]。
// 將陣列中的數字由小到大排序，並輸出結果。
// 可以直接用 sort 函數


//Bubble Sort演算法
var numbers = [3, 7, 1, 9, 4]
for(var i=0 ; i < numbers.length; i++)
{
    for(var j=0; j< numbers.length -1 -i; j++)
    {
        if(numbers[j]>numbers[j+1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = temp;
        }
    }
}

console.log(numbers)
    

//sort函式法

var numbers = [2, 11, 7, 18, 9]
numbers.sort((a,b) =>a-b)
console.log(numbers)
