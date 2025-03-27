// 建立一個陣列 nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]。
// 過濾出所有的偶數，並輸出新的陣列。

//1.
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var result = []

for(let i=0; i<nums.length; i++)
{
    if(nums[i]%2 == 0)
    {
        result.push(nums[i]);
    }
}
console.log(result)


//2.

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// 過濾出偶數
let evenNumbers = nums.filter(num => num % 2 === 0);

// 輸出新的陣列
console.log(evenNumbers);

// filter函數：
//  filter是一個陣列方法，會根據指定的條件過濾陣列，並返回符合條件的元素組成的新陣列。
//  在此例中，條件是num % 2 === 0 ，表示數字能被 2 整除（即偶數）。
//  使用 num => num % 2 === 0 作為過濾條件，更簡潔且直觀。

