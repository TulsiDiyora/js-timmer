let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

let hv = document.getElementById('hv');
let mv = document.getElementById('mv');
let sv = document.getElementById('sv');


const start = () =>{
    console.log("start");

    let ho = JSON.parse(hv.value);
    let mm = JSON.parse(mv.value);
    let sm = JSON.parse(sv.value);

    let h = ho;
    let m = mm;
    let s = sm;

    hr.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;

    const startTime = () =>{
        
        const interval =  setInterval(() => {
            
            s--;
    
            if(s < 10){
                
                sec.innerHTML ="0"+  s;
            }
            else{
                sec.innerHTML = s;
            }
            console.log("sec:" , s);
    
            if(s <= 0){
                s = 59;
                m--;
              if(m < 10){
                min.innerHTML ="0" + m;
              }
              else{
                min.innerHTML = m;
              }
            }
    
            if(m <= 0){
                if(h == 0 && m == 0){
                    clearInterval(interval);
                }
               else{
                m = 59;
                h--;
                hr.innerHTML = h;
                min.innerHTML = m;
               }
            }
    
        }, 1000)
    }
    startTime();
}