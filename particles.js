const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let mouse = { x: null, y: null };

window.onmousemove = e => {
  mouse.x = e.x;
  mouse.y = e.y;
};

let particles = Array.from({ length: 80 }, () => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  vx: Math.random()-0.5,
  vy: Math.random()-0.5
}));

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    let dx = mouse.x - p.x;
    let dy = mouse.y - p.y;
    let dist = Math.sqrt(dx*dx+dy*dy);
    if (dist < 120) {
      p.vx -= dx/6000;
      p.vy -= dy/6000;
    }
    p.x += p.vx;
    p.y += p.vy;
    ctx.fillStyle = "rgba(180,100,255,0.8)";
    ctx.fillRect(p.x,p.y,2,2);
  });
  requestAnimationFrame(animate);
}
animate();
