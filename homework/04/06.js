// 實作 filterArray(arr, predicate)，回傳符合條件的陣列。

function filterArray(arr, predicate)
{
    const result = []
    for (const element of arr)
    {
        if(predicate(element))
        {
            result.push(element)
        }
    }
    return result
    
}

console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0)); 