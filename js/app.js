var age=[20,17,16,34];
var is_subscribed=[false,false,true,true];
for(index=0;index<age.length;index++)
{
    console.log("user age is:", age[index]);
    if(age[index]<18 && !is_subscribed[index]) {
        
        console.log(" the user is younger than 18 and not subscribed");
    }
    else if(age[index]>=18 && !is_subscribed[index]) {
        console.log("the user is 18 and older and not subscribed");
    }
    else if(age[index]<18 && is_subscribed[index]) {
        console.log("the user is younger than 18 and is subscribed");
    }
    else if(age[index]>=18 && is_subscribed[index])
    {
        console.log("the user is 18 and older and is subscribed");
    }
    else {
        console.log("no one is subscribed");
    }
}
    

