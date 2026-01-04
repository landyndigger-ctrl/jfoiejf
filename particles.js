const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth; canvas.height = innerHeight;

let mouse = { x:null, y:null };
window.onmousemove = e => { mouse.x=e.clientX; mouse.y=e.clientY; };
window.onresize = () => { canvas.width=innerWidth; canvas.height=innerHeight; };

const particles = Array.from({length:130},()=>({
  x:Math.random()*canvas.width,
  y:Math.random()*canvas.height,
  vx:(Math.random()-.5)*.7,
  vy:(Math.random()-.5)*.7
}));

(function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    let dx=mouse.x-p.x, dy=mouse.y-p.y;
    let d=Math.hypot(dx,dy);
    if(d<160){ p.vx-=dx/6000; p.vy-=dy/6000; }
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0||p.x>canvas.width)p.vx*=-1;
    if(p.y<0||p.y>canvas.height)p.vy*=-1;
    ctx.shadowBlur=16; ctx.shadowColor="#ff4dff";
    ctx.fillStyle="rgba(255,140,255,.9)";
    ctx.fillRect(p.x,p.y,2.5,2.5);
  });
  requestAnimationFrame(animate);
})();
