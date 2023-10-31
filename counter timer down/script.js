const daysEL=document.getElementById("days");
const hoursEL=document.getElementById("hours");
const minsEL=document.getElementById("mins");
const secondsEL=document.getElementById("seconds");

const newYears="1 Jan 2024";
const countdown=()=>{
    const newYearsDate =new Date(newYears);
    const currentDate=new Date();
    const totalseconds=Math.floor(newYearsDate-currentDate)/1000;
    const days=Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600)%24;
    const mins=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;
    console.log(days,hours,mins,seconds);
    
    daysEL.innerHTML=days;
    hoursEL.innerHTML=hours;
    minsEL.innerHTML=mins;
    secondsEL.innerHTML=seconds;

};
countdown();
setInterval(countdown,1000);