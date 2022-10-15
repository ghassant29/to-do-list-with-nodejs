exports.getDate=function(){
let today=new Date();
    
    let currentDay=today.getDay();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
return today.toLocaleDateString("en-US",options);;}

 exports.getDay=function (){
    let today=new Date();
        
        let currentDay=today.getDay();
        let options = { weekday: 'long', day: 'numeric' };
        
    return today.toLocaleDateString("en-US",options);;}