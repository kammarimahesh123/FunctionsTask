
function longest(){
    let str=["Mahesh","veeresh","kammariTulasi","vaishnav"]
    let max=0;
    let longest;
    for (let i=0;i<=str.length;i++)
    {
        if(str[i].length> max)
        {
            max=str[i].length;
            longest=str[i];
        }
    
    }
    console.log(longest)
}
longest();
