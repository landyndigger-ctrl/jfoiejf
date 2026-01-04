const aura=document.createElement("div");
Object.assign(aura.style,{
  position:"fixed", width:"120px", height:"120px", borderRadius:"50%",
  pointerEvents:"none", zIndex:2,
  background:"radial-gradient(circle, rgba(255,80,255,.35), transparent 70%)",
  filter:"blur(25px)"
});
document.body.appendChild(aura);
document.addEventListener("mousemove",e=>{
  aura.style.left=e.clientX-60+"px";
  aura.style.top=e.clientY-60+"px";
});
