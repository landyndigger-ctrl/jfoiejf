const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let w, h;
const mouse = { x: null, y: null, r: 120 };

function resize() {
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;
}
addEventListener("resize", resize);
resize();

addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

const particles = [...Array(90)].map(() => ({
  x: Math.random() * w,
  y: Math.random() * h,
  vx: (Math.random() - 0.5) * 0.4,
  vy: (Math.random() - 0.5) * 0.4,
  r: Math.random() * 1.6 + 0.4
}));

(function animate() {
  ctx.clearRect(0, 0, w, h);

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    let dx = p.x - mouse.x;
    let dy = p.y - mouse.y;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < mouse.r) {
      p.x += dx / dist * 2;
      p.y += dy / dist * 2;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,180,220,0.6)";
    ctx.fill();
  });

  requestAnimationFrame(animate);
})();
