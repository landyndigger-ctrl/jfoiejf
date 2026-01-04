function updateTime(){
  const now=new Date();
  const utc=now.toUTCString().slice(17,22);
  const el=document.getElementById("time");
  if(el) el.textContent=utc;
}
setInterval(updateTime,1000);
updateTime();
