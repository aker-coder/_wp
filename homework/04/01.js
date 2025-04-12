// 實作 countLetters(str)，輸入一個字串，回傳一個 Map，其鍵為字母，值為該字母出現的次數。

function countLetters(str)
{
    const Upperlettercounts = new Map()
    const Lowerlettercounts = new Map()

    for(const char of str)
        {
            if(char.match(/[a-z]/))
            {
                Lowerlettercounts.set(char,(Lowerlettercounts.get(char) || 0) +1)
            }
            else if(char.match(/[A-Z]/))
            {
                Upperlettercounts.set(char,(Upperlettercounts.get(char) || 0) +1)
            }
        }
    return {Upperlettercounts,Lowerlettercounts}    
}
const Userinput = prompt("please enter a string:")
const result = countLetters(Userinput)
console.log(result.Lowerlettercounts,result.Upperlettercounts)