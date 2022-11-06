var t = 0;
function timecount() {
    t= t+2;
    postMessage(t);
    setTimeout("timecount()",1000);
}
timecount();