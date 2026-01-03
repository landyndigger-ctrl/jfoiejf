
document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = e => {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && ['I','C','J'].includes(e.key)) ||
    (e.ctrlKey && e.key === 'U')
  ) return false;
};
