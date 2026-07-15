const c=document.getElementById('scratch');
const ctx=c.getContext('2d');
function size(){c.width=c.offsetWidth;c.height=c.offsetHeight;ctx.fillStyle='#bfbfbf';ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle='#fff';ctx.font='bold 28px Poppins';ctx.textAlign='center';ctx.fillText('Scratch Here ❤️',c.width/2,c.height/2);}
size();window.onresize=size;
ctx.globalCompositeOperation='destination-out';
let down=false;
function draw(e){if(!down)return;const r=c.getBoundingClientRect();const x=(e.touches?e.touches[0].clientX:e.clientX)-r.left;const y=(e.touches?e.touches[0].clientY:e.clientY)-r.top;ctx.beginPath();ctx.arc(x,y,24,0,Math.PI*2);ctx.fill();check();}
['mousedown','touchstart'].forEach(ev=>c.addEventListener(ev,()=>down=true));
['mouseup','mouseleave','touchend'].forEach(ev=>window.addEventListener(ev,()=>down=false));
['mousemove','touchmove'].forEach(ev=>c.addEventListener(ev,draw,{passive:false}));
function check(){
const d=ctx.getImageData(0,0,c.width,c.height).data;let clear=0;
for(let i=3;i<d.length;i+=4){if(d[i]===0)clear++;}
if(clear>(c.width*c.height*0.45)){
c.style.transition='opacity .6s';c.style.opacity='0';
setTimeout(()=>c.remove(),600);
}
}
document.getElementById('claim').onclick=()=>{
document.getElementById('scratchWrap').style.display='none';
document.getElementById('accepted').classList.remove('hidden');
};