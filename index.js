let a;
let time;
let h , m , s;
setInterval(() => {
    a= new Date(); 
    if(a.getHours()<10){
        h= "0"+a.getHours();
        m= "0"+a.getMinutes();
        s= "0"+a.getSeconds();
    }
    else{
    h = a.getHours();
    m = a.getMinutes();
    s = a.getSeconds();
    }
    d = "Today's Date : "+a.getDate()+" / "+(a.getMonth()+1)+" / "+a.getFullYear();
    document.getElementById('hour').innerHTML= h;
    document.getElementById('minute').innerHTML= m ;
    document.getElementById('Sec').innerHTML = s ;
    document.getElementById('date').innerHTML = d;
}, 1000);
