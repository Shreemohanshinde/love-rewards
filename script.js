const c=document.getElementById('scratch'),ctx=c.getContext('2d');
function init(){c.width=c.offsetWidth;c.height=c.offsetHeight;let g=ctx.createLinearGradient(0,0,c.width,c.height);g.addColorStop(0,'#f3f3f3');g.addColorStop(.5,'#c3c3c3');g.addColorStop(1,'#ececec');ctx.globalCompositeOperation='source-over';ctx.fillStyle=g;ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle='#666';ctx.font='bold 24px Poppins';ctx.textAlign='center';ctx.fillText('Scratch Here ❤️',c.width/2,c.height/2);ctx.globalCompositeOperation='destination-out';}
init();window.onresize=init;let down=false;
function pos(e){const r=c.getBoundingClientRect();return[(e.touches?e.touches[0].clientX:e.clientX)-r.left,(e.touches?e.touches[0].clientY:e.clientY)-r.top]}
function draw(e){if(!down)return;e.preventDefault();const[p,q]=pos(e);ctx.beginPath();ctx.arc(p,q,24,0,Math.PI*2);ctx.fill();check();}
['mousedown','touchstart'].forEach(v=>c.addEventListener(v,()=>down=true));
['mouseup','mouseleave','touchend'].forEach(v=>window.addEventListener(v,()=>down=false));
['mousemove','touchmove'].forEach(v=>c.addEventListener(v,draw,{passive:false}));
function check(){const d=ctx.getImageData(0,0,c.width,c.height).data;let n=0;for(let i=3;i<d.length;i+=4)if(d[i]==0)n++;if(n>c.width*c.height*.45){c.style.opacity=0;c.style.transition='opacity .5s';setTimeout(()=>c.remove(),500);}}
goBtn.onclick=()=>{reward.style.display='none';accepted.classList.remove('hidden');};