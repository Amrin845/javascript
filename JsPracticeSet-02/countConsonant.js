let str=["Hello", "I", "Live","in", "India"];
let ctr=0;
let i;

if(str[i]>=65 && str[i]<=90 && str[i]>=97 && str[i]<=123)
    {
    for( i=0; i<str.length; i++){
        if(str[i]!='A' || str[i]!='a' && str[i]!='E' || str[i]!='e' && str[i]!='I' || 
            str[i]!='i' || str[i]!='O' && str[i]!='o' || str[i]!='U' && str[i]!='u');
            
            {
             ctr++;
            }
            console.log(`Number of Consonants are ${ctr}`);
    }
}
    
    

