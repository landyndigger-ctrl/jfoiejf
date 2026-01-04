document.addEventListener("contextmenu",e=>e.preventDefault());
document.onkeydown=e=>{
  if(e.keyCode===123||(e.ctrlKey&&e.shiftKey&&e.key==="I")||(e.ctrlKey&&e.key==="u"))
    return false;
};
