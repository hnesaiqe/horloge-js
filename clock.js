
// Date et Heure
function showTime(id) {
    date = new Date;
    
    
    h = date.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    resultat = h + ':' + m + ':' + s + ' ' + amPm;
    document.getElementById(id).innerHTML = resultat;
    setTimeout('showTime("' + id + '");', '1000');
    return true;
}

window.onload = showTime('showTime');