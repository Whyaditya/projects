setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}, 1000);


setInterval(() => {
    let da = new Date();
    ht = da.getHours();
    let mt = 0;
    if (da.getMinutes() < 10) {
        mt = `0${da.getMinutes()}`;
    } else {
        mt = da.getMinutes();
    };
    st = da.getSeconds();

    document.getElementById('ct').innerHTML = `${ht}:${mt}:${st}`;



    if (alarm1 === `${ht}:${mt}`) {
        alert("wake up");
    }; 
    if (alarm2 === `${ht}:${mt}`)
     {
        alert("wake up");
    }; 
    if (alarm3 === `${ht}:${mt}`)
    {
        alert("wake up");
    };



}, 1000);



class clock {
    constructor(){
        setInterval(() => {
            let da = new Date();
            ht = da.getHours();
            let mt = 0;
            if (da.getMinutes() < 10) {
                mt = `0${da.getMinutes()}`;
            } else {
                mt = da.getMinutes();
            };
            st = da.getSeconds();
        
            document.getElementById('ct').innerHTML = `${ht}:${mt}:${st}`;
        
        
        
            if (alarm1 === `${ht}:${mt}`) {
                alert("wake up");
            }; 
         
        }, 1000);
    }




    .../
}