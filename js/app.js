var age=17;
var is_subscribed=false;

if(age<18 && !is_subscribed) {
   console.log(" the user is younger than 18 and not subscribed");
}
else if(age>=18 && !is_subscribed) {
    console.log("the user is 18 and older and not subscribed");
}
else if(age<18 && is_subscribed) {
    console.log("the user is younger than 18 and is subscribed");

}
else if(age>=18 && is_subscribed)
{
    console.log("the user is 18 and older and is subscribed");
}
else {
    console.log("no one is subscribed");
}