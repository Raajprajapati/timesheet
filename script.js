let hourStart = document.getElementsByClassName('hour-start');
let hourEnd = document.getElementsByClassName('hour-end');
let hourBreak = document.getElementsByClassName('hour-break');
let minStart = document.getElementsByClassName('min-start');
let minEnd = document.getElementsByClassName('min-end');
let minBreak = document.getElementsByClassName('min-break');
let startMeridian = document.getElementsByClassName('start-meri');
let endMeridian = document.getElementsByClassName('end-meri');
let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

document.getElementById('calculate').addEventListener("click",(e)=>{
    let starting = 0;
    let ending = 0;
    let breakHours = 0;
    let total=0;
    for (let i=0;i<7;i++){
        if ((hourStart[i] && hourStart[i].value) && (hourEnd[i] && hourEnd[i].value)){
            starting =(startMeridian[i].value ==="am" ? Number(hourStart[i].value) : Number(hourStart[i].value) + 12) + minStart[i].value/60;
            ending = (endMeridian[i].value ==="am" ? Number(hourEnd[i].value): Number(hourEnd[i].value)+12) + minEnd[i].value/60;
            breakHours = Number(hourBreak[i].value) + Number(minBreak[i].value)/60;
            tTime = ending - starting-breakHours;
            if (tTime < 0){
                alert(`Please enter correct timings for ${days[i]}`);
            }
            else{
                document.getElementById(`total${i}`).innerText = tTime.toFixed(2);
                total = total+ tTime
            }
        }
    }  
    document.getElementById('total_hours').innerText = total  
})

document.getElementById('clear').addEventListener("click",(e)=>{
    for (let i=0;i<7;i++){
         hourStart[i].value = '08'
         hourEnd[i].value = '08'
         hourBreak[i].value = '00'
         minStart[i].value = '00'
         minEnd[i].value = '00'
         minBreak[i].value = '00'
         startMeridian[i].selectedIndex = 0
         endMeridian[i].selectedIndex = 1
    }
})