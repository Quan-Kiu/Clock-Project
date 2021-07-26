const hour = document.getElementById('hour'), minutes = document.getElementById('minutes'), seconds = document.getElementById('seconds');

const timestext = document.getElementById('times-text'),datetext = document.getElementById('date-text');

const clock = () =>{

let date = new Date()

hh = date.getHours() * 30,

mm = date.getMinutes()*6,

ss = date.getSeconds()*6;

hour.style.transform = 'translateX(-50%) rotate('+((hh+(mm/12))+180)+'deg)';

minutes.style.transform = 'translateX(-50%) rotate('+(mm+180)+'deg)';

seconds.style.transform = 'translateX(-50%) rotate('+(ss+180)+'deg)';


hh /= 30;
mm /= 6;

if(hh <10)
{
    hh = '0'+hh+'';
}

if(mm<10)
{
    mm = hh = '0'+mm+'';
}



timestext.innerHTML = ''+hh+':'+mm+'';


day = date.getDate();

month = date.getMonth();

year = date.getFullYear();

datetext.innerHTML = ''+day+'/'+month+'/'+year+'';


}

setInterval(clock,1000)