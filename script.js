const c=document.getElementById('scratch'),x=c.getContext('2d');
function init(){c.width=c.offsetWidth;c.height=c.offsetHeight;
let g=x.createLinearGradient(0,0,c.width,c.height);
g.addColorStop(0,'#f5f5f5');g.addColorStop(.5,'#c5c5c5');g.addColorStop(1,'#ececec');
x.globalCompositeOperation='source-over';x.fillStyle=g;x.fillRect(0,0,c.width,c.height);
x.fillStyle='#666';x.font='bold 24px Poppins';x.textAlign='center';
x.fillText('Scratch Here ❤️',c.width/2,c.height/2);
x.globalCompositeOperation='destination-out';}
init();window.onresize=init;
let d=false;
function p(e){let r=c.getBoundingClientRect();return[(e.touches?e.touches[0].clientX:e.clientX)-r.left,(e.touches?e.touches[0].clientY:e.clientY)-r.top]}
function draw(e){if(!d)return;e.preventDefault();let [a,b]=p(e);x.beginPath();x.arc(a,b,24,0,Math.PI*2);x.fill();chk();}
['mousedown','touchstart'].forEach(v=>c.addEventListener(v,()=>d=true));
['mouseup','mouseleave','touchend'].forEach(v=>window.addEventListener(v,()=>d=false));
['mousemove','touchmove'].forEach(v=>c.addEventListener(v,draw,{passive:false}));
function chk(){let dt=x.getImageData(0,0,c.width,c.height).data,z=0;
for(let i=3;i<dt.length;i+=4)if(dt[i]==0)z++;
if(z>c.width*c.height*.45){c.style.transition='opacity .5s';c.style.opacity=0;setTimeout(()=>c.remove(),500);}}
btn.onclick=()=>{reward.style.display='none';accepted.classList.remove('hidden');};