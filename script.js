var AV_S=[['fundamentos','Fundamentos'],['composicion','Composición'],['camara','La cámara'],['luz','Luz y color'],['diseno','Diseño'],['practica','Práctica'],['eventos','Eventos'],['etica','Ética y permisos'],['video','Video'],['tutoriales','Tutoriales'],['recursos','Recursos']];
/* Comportamiento — Imágenes con Excelencia · Centro Misionero Bethesda Norte */
(function(){var n=[['Rojo','#e8736b'],['Naranja','#f0a45a'],['Amarillo','#d9b52f'],['Verde','#5fae4a'],['Azul','#3f84d1'],['Violeta','#8b5fd6'],['Rosa','#d2589f']],k=0;
setInterval(function(){k=(k+1)%n.length;document.querySelectorAll('.wc').forEach(function(w){w.textContent=n[k][0];w.style.color=n[k][1];w.classList.add('pop');setTimeout(function(){w.classList.remove('pop')},500)})},1400);
var h=[['Análogos (vecinos: tranquilo)',['#033d60','#0e7a8c','#7fc4cf']],['Complementarios (opuestos: vivo)',['#033d60','#f2c94c','#fff']],['Monocromático (un color: elegante)',['#033d60','#3f7ca3','#a9c9dd']],['Acento dorado',['#033d60','#ffffff','#d99a1b']]],j=0;
function sh(){document.querySelectorAll('.harm').forEach(function(b){b.querySelector('.hl').textContent=h[j][0];b.querySelectorAll('.hs span').forEach(function(s,m){s.style.background=h[j][1][m]});b.classList.add('go');setTimeout(function(){b.classList.remove('go')},500)});j=(j+1)%h.length}
sh();setInterval(sh,3200)})();
function vids(){document.querySelectorAll('.vp').forEach(function(vp){var pg=vp.closest('.page'),sl=[];
pg.querySelectorAll('main figure').forEach(function(f){if(f.closest('.vp'))return;var c=f.cloneNode(true),fc=c.querySelector('figcaption');sl.push({n:c,t:fc?fc.textContent:''});if(fc)fc.remove()});
if(!sl.length)pg.querySelectorAll('main ol li').forEach(function(li){var d=document.createElement('div');d.className='vtxt';d.innerHTML='<span>📱</span>'+li.innerHTML;sl.push({n:d,t:li.textContent})});
if(!sl.length){vp.remove();return}
vp.innerHTML='<div class="vh">🎬 Video resumen de esta sección</div><div class="vstage"></div><div class="vcap"></div><div class="vbar"><i></i></div><div class="vctl"><button data-v="p">⏸ Pausar</button><button data-v="n">⏭ Siguiente</button><span class="vn"></span></div>';
var st=vp.querySelector('.vstage'),cap=vp.querySelector('.vcap'),bar=vp.querySelector('.vbar i'),vn=vp.querySelector('.vn'),pb=vp.querySelector('[data-v=p]'),i=0,t=0,play=true;
sl.forEach(function(o){var w=document.createElement('div');w.className='vs';w.appendChild(o.n);st.appendChild(w)});
function show(k){i=(k+sl.length)%sl.length;t=0;[].forEach.call(st.children,function(w,m){w.classList.toggle('on',m===i)});cap.textContent=sl[i].t;vn.textContent='Escena '+(i+1)+' de '+sl.length}
pb.onclick=function(){play=!play;pb.textContent=play?'⏸ Pausar':'▶ Reproducir'};vp.querySelector('[data-v=n]').onclick=function(){show(i+1)};
setInterval(function(){if(!play||!pg.classList.contains('show'))return;t++;bar.style.width=(t/55*100)+'%';if(t>=55)show(i+1)},100);show(0)})}
vids();
var ids=['inicio','plan','fundamentos','composicion','camara','luz','diseno','practica','eventos','etica','video','tutoriales','recursos'];
var io=window.IntersectionObserver?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1}):null;
function reveal(){document.querySelectorAll('.page.show .card,.page.show figure,.page.show .verse,.page.show .tile,.page.show .how').forEach(function(n){if(!io||n.classList.contains('in'))return;n.classList.add('rv');io.observe(n)})}
function player(id,caps,pos,cb){var el=document.getElementById(id),i=0,play=true,cur=el.querySelector('.cur'),cap=el.querySelector('.tx'),num=el.querySelector('.n'),dots=el.querySelector('.dots'),pb=el.querySelector('[data-a=play]');
caps.forEach(function(_,k){var d=document.createElement('i');d.onclick=function(){set(k)};dots.appendChild(d)});
function set(k){i=(k+caps.length)%caps.length;var on=[];for(var j=0;j<=i;j++)on.push(j);el.dataset.on=on.join(' ');el.dataset.cur=i;cur.style.left=pos[i][0]+'%';cur.style.top=pos[i][1]+'%';num.textContent=(i+1)+'/'+caps.length;cap.textContent=caps[i];[].forEach.call(dots.children,function(d,m){d.className=m===i?'a':''});if(cb)cb(i)}
el.querySelector('[data-a=prev]').onclick=function(){set(i-1)};el.querySelector('[data-a=next]').onclick=function(){set(i+1)};
pb.onclick=function(){play=!play;pb.textContent=play?'⏸ Pausar':'▶ Reproducir'};
setInterval(function(){if(play&&document.getElementById('p-tutoriales').classList.contains('show'))set(i+1)},4500);set(0)}
player('pl1',['Abra el editor y toque «Crear diseño»; elija el tamaño «Afiche».','Abra «Plantillas» y elija una sobria: pocos adornos y letras claras.','Toque el título y escriba su texto; haga lo mismo con la fecha y la hora.','Abra «Colores» y cambie la paleta: máximo 3 o 4 colores.','Revise la jerarquía: 1.º el título, 2.º la fecha y hora, 3.º los detalles.','Pulse «Descargar»: PNG para redes sociales o PDF para imprimir.'],[[34,7],[9,28],[58,40],[9,52],[58,52],[88,7]],function(i){var a=document.querySelector('#pl1 .pt span'),b=document.querySelector('#pl1 .pd span');a.textContent=i>=2?'Retiro de Jóvenes':'Título del evento';b.textContent=i>=2?'Sábado 14 de marzo · 8:00 a. m.':'Fecha y hora'});
player('pl2',['Abra la cámara y toque el engranaje de Ajustes (⚙).','Active la «Cuadrícula»: aparecen las líneas de los tercios.','Ponga al protagonista (aquí, el sol) en un cruce de las líneas.','Toque la pantalla sobre el sujeto para enfocarlo.','Deslice el sol hacia arriba o abajo para ajustar la luz.','Sostenga firme el teléfono y toque el botón blanco para tomar la foto.'],[[93,12],[50,50],[66.7,33.5],[66.7,33.5],[93,35],[94,86]]);
function go(){var h=(location.hash||'#inicio').slice(1);if(ids.indexOf(h)<0)h='inicio';
ids.forEach(function(i){document.getElementById('p-'+i).classList.toggle('show',i===h)});
document.querySelectorAll('#nav a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+h)});
window.scrollTo(0,0);reveal()}
addEventListener('hashchange',go);go();

if(location.protocol==="file:")document.getElementById("fileAviso").style.display="block";


/* ===== Contraste: tipos ===== */
(function(){
var T={luz:['Claro y oscuro','#033d60','#ffffff','#ffffff',0,'Es la diferencia de luz entre dos colores. Es el contraste más importante: de él depende que un texto se pueda leer.','Úselo en todos los textos de afiches y diapositivas: letra clara sobre fondo oscuro, o al revés.'],
comp:['Complementario','#033d60','#f39a2b','#ffffff',0,'Colores opuestos en el círculo cromático: azul y naranja, morado y amarillo, rojo y verde. Juntos se ven vivos y llenos de energía.','Como las flores naranjas sobre el cielo azul del afiche de la vigilia. Úselo en poca cantidad, para adornar o destacar.'],
cal:['Cálido y frío','#0e7a8c','#ffc54d','#e8f6f8',0,'Los colores cálidos (rojo, naranja, amarillo) parecen acercarse; los fríos (azul, verde, turquesa) parecen alejarse.','Ponga el color cálido en lo que debe destacar (título) y el frío en el fondo.'],
sat:['Intenso y apagado','#6f8290','#ffcc00','#eef2f4',0,'Un color vivo resalta cuando lo rodean colores grises o apagados.','Ideal para resaltar una sola palabra: «HOY», «GRATIS», «ÚLTIMOS CUPOS».'],
cant:['De cantidad','#033d60','#ffffff','#cfe2ec',1,'Mucho de un color y un poco de otro: lo poco llama la atención. Fíjese en la cinta dorada.','Regla 60-30-10: 60 % color de fondo, 30 % color secundario y 10 % color de acento.'],
bajo:['Sin contraste (error)','#b9c4cb','#d3dbe0','#c6d0d6',0,'Colores muy parecidos en luz: el texto se pierde y nadie lo lee, sobre todo desde lejos.','Evítelo siempre en textos. Si duda, use el laboratorio de abajo para medirlo.']};
var box=document.getElementById('cbox');if(!box)return;
var big=box.querySelector('.cbig'),sm=box.querySelector('.csm'),acc=document.getElementById('cacc');
function set(k){var t=T[k];box.style.background=t[1];big.style.color=t[2];sm.style.color=t[3];
acc.style.background='#d99a1b';acc.style.color='#00213b';box.classList.toggle('acc',!!t[4]);
document.getElementById('ctit').textContent=t[0];document.getElementById('cdesc').textContent=t[5];document.getElementById('cuse').textContent='En la iglesia: '+t[6];
box.classList.remove('pop');void box.offsetWidth;box.classList.add('pop');
document.querySelectorAll('.ctabs button').forEach(function(b){b.classList.toggle('on',b.dataset.k===k)})}
document.querySelectorAll('.ctabs button').forEach(function(b){b.addEventListener('click',function(){set(b.dataset.k)})});
set('luz');
})();

/* ===== Contraste: laboratorio ===== */
function lum(h){h=h.replace('#','');var c=[0,2,4].map(function(i){var v=parseInt(h.substr(i,2),16)/255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*c[0]+.7152*c[1]+.0722*c[2]}
function ratio(a,b){var x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
(function(){
var fg=document.getElementById('cfg'),bg=document.getElementById('cbg'),pv=document.getElementById('lprev');if(!fg)return;
function upd(){pv.style.background=bg.value;pv.style.color=fg.value;var r=ratio(fg.value,bg.value);
document.getElementById('mratio').textContent=r.toFixed(1).replace('.',',')+':1';
document.getElementById('mfill').style.left=Math.min(r/14*100,100)+'%';
var v=r>=7?'✔ Excelente: se lee incluso en el proyector.':r>=4.5?'✔ Bueno para afiches y redes. En el proyector, busque más.':r>=3?'⚠ Solo para títulos muy grandes.':'✗ No se lee: cambie un color.';
var s=document.getElementById('mverd');s.textContent=v;s.style.color=r>=4.5?'#2f7d4f':r>=3?'#a8620b':'#c62f3b'}
fg.addEventListener('input',upd);bg.addEventListener('input',upd);
document.querySelectorAll('.pres button').forEach(function(b){b.style.background='linear-gradient(135deg,'+b.dataset.b+' 50%,'+b.dataset.f+' 50%)';b.addEventListener('click',function(){fg.value=b.dataset.f;bg.value=b.dataset.b;upd()})});
document.getElementById('swap').addEventListener('click',function(){var t=fg.value;fg.value=bg.value;bg.value=t;upd()});
document.getElementById('proy').addEventListener('change',function(e){pv.classList.toggle('proy',e.target.checked)});
upd();
})();

/* ===== Contraste: reto ===== */
(function(){
var Q=[[['#ffffff','#033d60'],['#7fc4cf','#d6e2e8'],0,'El blanco sobre azul marino tiene mucha diferencia de luz.'],
[['#ffff00','#ffffff'],['#00213b','#f2c14e'],1,'El amarillo sobre blanco casi desaparece: los dos son muy claros.'],
[['#ff0000','#0000ff'],['#ffffff','#5f3277'],1,'Rojo sobre azul “vibra” y cansa la vista: son colores intensos con luz parecida.'],
[['#ffffff','#d99a1b'],['#00213b','#d99a1b'],1,'Sobre dorado funciona mejor la letra oscura: el blanco y el dorado son ambos claros.']];
var n=0,done=false,bs=document.querySelectorAll('.qo'),fb=document.getElementById('qfb');if(!bs.length)return;
var words=['Ven a adorar','Noche de alabanza','Escuela dominical','Culto familiar'];
function show(){done=false;var q=Q[n];bs.forEach(function(b,i){b.className='qo';b.style.color=q[i][0];b.style.background=q[i][1];b.textContent=words[n]});
fb.innerHTML='&nbsp;';document.getElementById('qn').textContent='Reto '+(n+1)+' de '+Q.length}
bs.forEach(function(b){b.addEventListener('click',function(){if(done)return;done=true;var q=Q[n],ok=+b.dataset.i===q[2];
bs[q[2]].classList.add('right');if(!ok)b.classList.add('wrong');
fb.textContent=(ok?'✔ ¡Correcto! ':'✗ No exactamente. ')+q[3]+' (Contraste: '+ratio(q[q[2]][0],q[q[2]][1]).toFixed(1).replace('.',',')+':1)';
fb.style.color=ok?'#2f7d4f':'#c62f3b'})});
document.getElementById('qnext').addEventListener('click',function(){n=(n+1)%Q.length;show()});
show();
})();

/* ===== Afiches con puntos ===== */
document.querySelectorAll('.hsw').forEach(function(w){var info=w.querySelector('.hsinfo'),img=w.querySelector('.hsimg');
w.querySelectorAll('.pin').forEach(function(p){p.addEventListener('click',function(){
w.querySelectorAll('.pin').forEach(function(x){x.classList.toggle('on',x===p)});img.classList.add('dim');
info.innerHTML='<b>'+p.textContent+'. '+p.dataset.h+'</b><p>'+p.dataset.t+'</p>';info.classList.remove('flash');void info.offsetWidth;info.classList.add('flash')})})});

/* ===== Enlace directo al laboratorio ===== */
document.querySelectorAll('[data-go]').forEach(function(a){a.addEventListener('click',function(){var id=a.dataset.go;setTimeout(function(){var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'})},450)})});


/* ================= Interacciones por sección ================= */
function $(s,c){return (c||document).querySelector(s)}
function $$(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))}
function seg(id,cb){var g=document.getElementById(id);if(!g)return;$$('button',g).forEach(function(b){b.addEventListener('click',function(){$$('button',g).forEach(function(x){x.classList.toggle('on',x===b)});cb(b)})})}
function segVal(id,k){var b=$('#'+id+' button.on');return b?b.dataset[k||'v']:null}
function li(c,t){return '<li class="'+c+'">'+(c==='g'?'✔ ':c==='w'?'⚠ ':'✗ ')+t+'</li>'}
var store={get:function(k){try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}},set:function(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};

/* ----- Mi avance ----- */
(function(){
var S=AV_S;
var done=store.get('bethesda-avance')||{};
S.forEach(function(s){var main=$('#p-'+s[0]+' main'),pn=main&&$('.pn',main);if(!pn)return;
var box=document.createElement('div');box.className='donebox';box.innerHTML='<button type="button" class="donebtn" data-s="'+s[0]+'"></button>';main.insertBefore(box,pn)});
function draw(){var n=S.filter(function(s){return done[s[0]]}).length;
$('#avance .pbar i').style.width=(n/S.length*100)+'%';
$('#avance .ptxt').textContent=n===S.length?'🎉 ¡Completó todas las secciones! Gloria a Dios.':'Lleva '+n+' de '+S.length+' secciones estudiadas.';
var ev=store.get('bethesda-eval')||{};$('#avance .plist').innerHTML=S.map(function(s){var e=ev[s[0]];return '<a href="#'+s[0]+'" class="'+(done[s[0]]?'ok':'')+'">'+(done[s[0]]?'✔ ':'○ ')+s[1]+(e?' · '+e[0]+'/'+e[1]:'')+'</a>'}).join('');
$$('.donebtn').forEach(function(b){var ok=!!done[b.dataset.s];b.classList.toggle('ok',ok);b.textContent=ok?'✔ Sección estudiada (toque para desmarcar)':'✔ Marcar esta sección como estudiada'});
$$('a.tile').forEach(function(t){t.classList.toggle('done',!!done[t.getAttribute('href').slice(1)])})}
document.addEventListener('click',function(e){var b=e.target.closest('.donebtn');if(!b)return;done[b.dataset.s]=!done[b.dataset.s];store.set('bethesda-avance',done);draw()});
$('#preset').addEventListener('click',function(){done={};store.set('bethesda-avance',done);draw()});
window.drawAvance=function(){done=store.get('bethesda-avance')||{};draw()};window.avanceDone=function(){return done};
draw()})();

/* ----- Antes y después ----- */
(function(){var ba=$('#ba');if(!ba)return;var r=$('input',ba);function u(){ba.style.setProperty('--x',r.value+'%')}r.addEventListener('input',u);u()})();

/* ----- Tercios: mover protagonista ----- */
(function(){var a=$('#t3'),s=$('#t3s'),f=$('#t3f');if(!a)return;var x=50,y=50,drag=false,P=[[33.33,33.33],[66.67,33.33],[33.33,66.67],[66.67,66.67]];
function place(cx,cy){var r=a.getBoundingClientRect();x=Math.max(8,Math.min(92,(cx-r.left)/r.width*100));y=Math.max(12,Math.min(88,(cy-r.top)/r.height*100));s.style.left=x+'%';s.style.top=y+'%';check()}
function check(){var best=99,bi=-1;P.forEach(function(p,i){var dd=Math.hypot((p[0]-x)*1.5,p[1]-y);if(dd<best){best=dd;bi=i}});
$$('.t3pt',a).forEach(function(p,i){p.classList.toggle('near',i===bi&&best<9)});
var hz=+segVal('t3h','h'),msg,c;
if(best<9){msg='✔ ¡Punto fuerte! La persona está en un cruce: la imagen se ve natural y atractiva.';c='g'}
else if(Math.abs(x-50)<8&&Math.abs(y-50)<10){msg='⚠ Al centro: no está mal, pero se ve estático. Pruebe moverla a un cruce.';c='w'}
else{msg='Acérquela a uno de los cuatro cruces de las líneas.';c=''}
if(hz===50)msg+=' ⚠ El horizonte al medio divide la foto en dos: súbalo o bájelo.';
f.textContent=msg;f.className='fbk '+c}
s.addEventListener('pointerdown',function(e){drag=true;s.setPointerCapture(e.pointerId);e.preventDefault()});
s.addEventListener('pointermove',function(e){if(drag)place(e.clientX,e.clientY)});
s.addEventListener('pointerup',function(){drag=false});
a.addEventListener('click',function(e){if(e.target.closest('.t3s'))return;place(e.clientX,e.clientY)});
s.addEventListener('keydown',function(e){var k={ArrowLeft:[-3,0],ArrowRight:[3,0],ArrowUp:[0,-3],ArrowDown:[0,3]}[e.key];if(!k)return;e.preventDefault();var r=a.getBoundingClientRect();place(r.left+(x+k[0])/100*r.width,r.top+(y+k[1])/100*r.height)});
seg('t3h',function(b){a.style.setProperty('--hz',b.dataset.h+'%');check()});
$('#t3g').addEventListener('change',function(e){a.classList.toggle('nogrid',!e.target.checked)});check()})();

/* ----- Simulador de exposición ----- */
(function(){var ex=$('#expo');if(!ex)return;
var A=[1.8,2.8,4,5.6,8,11,16],SP=[15,30,60,125,250,500,1000],I=[100,200,400,800,1600,3200,6400];
var eA=$('#eA'),eS=$('#eS'),eI=$('#eI');
function upd(){var a=A[eA.value],sp=SP[eS.value],iso=I[eI.value];
$('#eAv').textContent='f/'+a;$('#eSv').textContent='1/'+sp;$('#eIv').textContent=iso;
var st=Math.log2(Math.pow(2.8/a,2)*(125/sp)*(iso/1600));
ex.style.filter='brightness('+Math.max(.12,Math.min(2.6,Math.pow(2,st*.55)))+')';
$('.ebg',ex).style.filter='blur('+Math.max(0,(5.6-a)*1.1)+'px)';
var mv=sp<125;$('.efg',ex).classList.toggle('move',mv);$('.efg',ex).style.filter='blur('+(sp<=15?3:sp<=30?2:sp<=60?1:0)+'px)';
$('.enoise',ex).style.opacity=Math.max(0,(eI.value-4))*.3;
var o='';
o+=st<-.8?li('b','Foto muy oscura: abra más (número f/ menor), baje la velocidad o suba el ISO.'):st>.8?li('b','Foto muy clara (quemada): cierre la apertura, suba la velocidad o baje el ISO.'):li('g','Exposición correcta: el predicador se ve bien.');
o+=a<=2.8?li('g','Fondo desenfocado: la persona resalta.'):a>=8?li('w','Todo nítido: bueno para fotos de grupo, no tanto para un retrato.'):li('g','Fondo algo nítido.');
o+=mv?li('b','Velocidad lenta: la persona sale movida. Use 1/125 o más rápida.'):li('g','Velocidad suficiente: la persona sale nítida.');
o+=iso>=3200?li('w','ISO alto: aparece “grano” en la foto.'):li('g','ISO adecuado: poco grano.');
$('#eres').innerHTML=o}
[eA,eS,eI].forEach(function(r){r.addEventListener('input',upd)});
$('#eReset').addEventListener('click',function(){eA.value=1;eS.value=3;eI.value=4;upd()});upd()})();

/* ----- Dirección de la luz ----- */
(function(){var r=$('#lr');if(!r)return;
function mix(c,f){return 'rgb('+c.map(function(v){return Math.round(v*f)}).join(',')+')'}
function upd(){var t=+r.value,rad=t*Math.PI/180;
var sun=$('#lsun');sun.setAttribute('cx',60+45*Math.sin(rad));sun.setAttribute('cy',60+45*Math.cos(rad));
var lit=t<=90?1:1-(t-90)/90*.72,sh=t<=90?1-t/90*.6:.4-(t-90)/90*.12;
var skin=[242,201,160],blue=[47,127,201];
$('#lightw .lface').style.background='linear-gradient(to left,'+mix(skin,lit)+','+mix(skin,sh)+')';
$('#lightw .lbody').style.background='linear-gradient(to left,'+mix(blue,lit)+','+mix(blue,sh)+')';
var bg=.75+t/180*.25;$('#lstage').style.background=t>140?'radial-gradient(circle at 50% 35%,#fffbe6 0 30%,#f7e4a0 60%,#e9d48a)':'linear-gradient(#'+(t>90?'f3ead0':'d9ecfb')+',#'+(t>90?'e9dcb4':'c4def2')+')';
var f=$('#lf');if(t<35){f.textContent='✔ Luz de frente: rostro bien iluminado y parejo. Ideal para empezar.';f.className='fbk g'}
else if(t<=120){f.textContent='Luz lateral: da volumen y profundidad. Cuide que la sombra no sea muy dura.';f.className='fbk w'}
else{f.textContent='✗ Contraluz: la persona queda oscura. Gírela hacia la luz.';f.className='fbk b'}}
r.addEventListener('input',upd);upd()})();

/* ----- Editor de afiche ----- */
(function(){var pv=$('#pprev');if(!pv)return;var t=$('#pT'),bx=$('#pBox'),lg=$('#pLogo');
function upd(){var al=segVal('pA'),fo=segVal('pF'),bg=segVal('pB'),ts=+t.value;
pv.className='pprev '+bg+(fo==='deco'?' deco':'')+(bx.checked?' box':'')+(lg.checked?' logo':'');
$('.ptt',pv).style.fontSize=ts+'px';
var aligns=al==='mix'?['left','right','center']:[al,al,al];['.ptt','.pdd','.pss'].forEach(function(s,i){$(s,pv).style.textAlign=aligns[i]});
var ok=0,o='';
if(ts>=30){o+=li('g','Jerarquía: el título manda.');ok++}else o+=li('w','El título es pequeño: compite con la fecha. Agrándelo.');
if(al!=='mix'){o+=li('g','Alineación ordenada.');ok++}else o+=li('b','Alineación mezclada: se ve desordenado.');
if(fo==='clara'){o+=li('g','Letra clara, fácil de leer.');ok++}else o+=li('w','Letra decorativa: difícil de leer de lejos.');
if(bg==='azul'||bx.checked){o+=li('g','Buen contraste: el texto se lee.');ok++}else if(bg==='foto')o+=li('w','Texto sobre foto recargada: active el recuadro oscuro.');else o+=li('b','Poco contraste: letra clara sobre gris claro.');
if(lg.checked){o+=li('g','Identidad: se reconoce nuestra iglesia.');ok++}else o+=li('w','Falta el sello de la iglesia.');
$('#pchk').innerHTML=o;$('#pscore').textContent=(ok===5?'🎉 ¡Afiche listo! ':'Revisión: ')+'★'.repeat(ok)+'☆'.repeat(5-ok)}
t.addEventListener('input',upd);bx.addEventListener('change',upd);lg.addEventListener('change',upd);['pA','pF','pB'].forEach(function(id){seg(id,upd)});upd()})();

/* ----- Editor de foto ----- */
(function(){var im=$('#edimg');if(!im)return;var R=$('#edR'),B=$('#edB'),C=$('#edC'),K=$('#edK'),st=$('#edst'),orig=false;
function upd(){var rot=-7+ +R.value,br=.68*(1+B.value/100),ct=1+C.value/100,sc=1+Math.abs(rot)*.035+(K.checked?.22:0);
$('#edRv').textContent=R.value+'°';$('#edBv').textContent=B.value;$('#edCv').textContent=C.value;
if(orig){im.style.transform='rotate(-7deg) scale(1.25)';im.style.filter='brightness(.68)';return}
im.style.transform='rotate('+rot+'deg) scale('+sc+')'+(K.checked?' translate(-5%,4%)':'');im.style.filter='brightness('+br+') contrast('+ct+')';
var ok=0,o='';
if(Math.abs(rot)<=1){o+=li('g','Horizonte recto.');ok++}else o+=li('w','Horizonte torcido: mueva «Enderezar» (pista: unos +7°).');
if(br>=.9&&br<=1.15){o+=li('g','Brillo correcto.');ok++}else o+=li(br<.9?'w':'b',br<.9?'Todavía está oscura: suba el brillo.':'Demasiado clara: baje el brillo.');
if(ct>=1&&ct<=1.4){o+=li('g','Contraste natural.');ok++}else o+=li(ct>1.4?'b':'w',ct>1.4?'Contraste exagerado: se ve artificial.':'Le falta contraste: súbalo un poco.');
if(K.checked){o+=li('g','Recorte aplicado: el sol queda en un punto fuerte.');ok++}else o+=li('w','Falta recortar.');
if(ok===4)o+='<li class="g">🎉 ¡Foto lista para publicar!</li>';$('#edres').innerHTML=o}
[R,B,C].forEach(function(x){x.addEventListener('input',upd)});K.addEventListener('change',upd);
var h=$('#edhold');function on(e){e.preventDefault();orig=true;st.classList.add('orig');upd()}function off(){if(!orig)return;orig=false;st.classList.remove('orig');upd()}
h.addEventListener('pointerdown',on);h.addEventListener('pointerup',off);h.addEventListener('pointerleave',off);h.addEventListener('pointercancel',off);upd()})();

/* ----- Calculadora de tamaños ----- */
(function(){if(!$('#szB'))return;var tips={'1080x1080':'Ideal para Facebook e Instagram. Deje márgenes: el texto importante lejos de los bordes.','1080x1350':'Ocupa más pantalla en el celular: buena opción para afiches de eventos.','1080x1920':'Pantalla completa del celular. Evite poner texto arriba y abajo: ahí aparecen los botones de la app.','1920x1080':'Para el proyector o televisor del templo. Letra grande (mínimo 32 puntos) y pocas líneas.','2550x3300':'Tamaño carta a buena calidad para imprimir. En Canva elija «Carta» o «Póster».'};
function upd(b){var w=+b.dataset.w,h=+b.dataset.h,m=200,k=Math.min(m/w,m/h);var bx=$('#szbox');bx.style.width=Math.round(w*k)+'px';bx.style.height=Math.round(h*k)+'px';
$('#szlab').textContent=w+' × '+h;$('#szt').textContent=b.dataset.t+': '+w+' × '+h+' píxeles';$('#szd').textContent=tips[w+'x'+h]}
seg('szB',upd);upd($('#szB button.on'))})();

/* ----- Lista de verificación ----- */
(function(){var ul=$('#p-recursos ul.check');if(!ul)return;var items=$$('li',ul);
var w=document.createElement('div');w.innerHTML='<div class="ckbar"><i></i></div><p class="ckmsg"></p><button type="button" class="ckreset">Empezar de nuevo</button>';ul.after(w);
function upd(){var n=items.filter(function(i){return i.classList.contains('on')}).length;$('.ckbar i',w).style.width=(n/items.length*100)+'%';
$('.ckmsg',w).textContent=n===items.length?'🎉 ¡Todo revisado! Su imagen está lista para publicar.':'Revisado: '+n+' de '+items.length+'. Toque cada pregunta cuando la cumpla.';$('.ckmsg',w).className='ckmsg '+(n===items.length?'g':'')}
items.forEach(function(i){i.addEventListener('click',function(){i.classList.toggle('on');upd()})});
$('.ckreset',w).addEventListener('click',function(){items.forEach(function(i){i.classList.remove('on')});upd()});upd()})();

/* ----- Ejercicios: marcar como hecho ----- */
(function(){var dn=store.get('bethesda-ejercicios')||{};
$$('#p-recursos .card').forEach(function(c){var h=$('h3',c);if(!h||!/^\d\./.test(h.textContent))return;var k=h.textContent.slice(0,2);
var b=document.createElement('button');b.type='button';b.className='exbtn';c.appendChild(b);
function draw(){b.classList.toggle('ok',!!dn[k]);c.classList.toggle('exdone',!!dn[k]);b.textContent=dn[k]?'✔ Hecho':'Marcar como hecho'}
b.addEventListener('click',function(){dn[k]=!dn[k];store.set('bethesda-ejercicios',dn);draw()});draw()})})();

/* ----- Buscador del glosario ----- */
(function(){var q=$('#gq');if(!q)return;var dts=$$('#gdl dt');
q.addEventListener('input',function(){var v=q.value.trim().toLowerCase(),any=false;
dts.forEach(function(dt){var dd=dt.nextElementSibling,m=!v||(dt.textContent+' '+dd.textContent).toLowerCase().indexOf(v)>=0;
dt.style.display=dd.style.display=m?'':'none';dt.classList.toggle('hit',!!v&&m);dd.classList.toggle('hit',!!v&&m);if(m)any=true});
$('#gnone').style.display=any?'none':'block'})})();


/* ================= Nuevas funciones ================= */
/* ----- Menú ----- */
(function(){var hd=$('header.top'),bt=$('#menubtn'),nav=$('#nav');if(!bt)return;
function open(o){hd.classList.toggle('open',o);bt.setAttribute('aria-expanded',o);bt.textContent=o?'✕ Cerrar':'☰ Secciones'}
bt.addEventListener('click',function(e){e.stopPropagation();open(!hd.classList.contains('open'))});
nav.addEventListener('click',function(e){if(e.target.closest('a'))open(false)});
document.addEventListener('click',function(e){if(!e.target.closest('header.top'))open(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')open(false)});
function cur(){var h=(location.hash||'#inicio').slice(1),a=$('#nav a[href="#'+h+'"]');$('#mcur').textContent=a?a.lastChild.textContent:'Inicio'}
addEventListener('hashchange',cur);cur()})();

/* ----- Enviar avance por WhatsApp ----- */
(function(){var nm=$('#aname'),bt=$('#asend');if(!bt)return;nm.value=store.get('bethesda-nombre')||'';
nm.addEventListener('input',function(){store.set('bethesda-nombre',nm.value)});
bt.addEventListener('click',function(){var dn=store.get('bethesda-avance')||{},ev=store.get('bethesda-eval')||{};
var hechas=AV_S.filter(function(s){return dn[s[0]]});
var t='Hola, soy '+(nm.value.trim()||'[nombre]')+'. Mi avance en «Imágenes con Excelencia»: '+hechas.length+' de '+AV_S.length+' secciones.\n'+
AV_S.map(function(s){var e=ev[s[0]];return (dn[s[0]]?'✔ ':'○ ')+s[1]+(e?' (evaluación '+e[0]+'/'+e[1]+')':'')}).join('\n');
window.open('https://wa.me/?text='+encodeURIComponent(t),'_blank','noopener')})})();

/* ----- Plan de clases ----- */
(function(){var w=$('#plwrap');if(!w)return;
var ET=['Etapa 1 · Bases de la imagen','Etapa 2 · Color, diseño y culto','Etapa 3 · Ministerio en acción'];
var P=[[0,'Fundamentos y presentación del sitio',['fundamentos'],'Tomar la foto «antes» del templo, sin indicaciones.'],
[0,'Composición I: encuadre, tercios y punto focal',['composicion'],'Ejercicio 1: los tercios.'],
[0,'Composición II: simetría, líneas, aire y planos',['composicion'],'Cinco fotos en el templo, una por principio.'],
[0,'La cámara: modos, exposición y ajustes',['camara'],'Practicar con el simulador y probar el modo A/Av.'],
[1,'Luz y color: contraste y armonías',['luz'],'Ejercicio 2 y laboratorio de contraste.'],
[1,'Diseño gráfico: jerarquía y tipografía',['diseno'],'Armar un afiche con cinco estrellas en el editor.'],
[1,'Práctica: celular, edición y Canva',['practica','tutoriales'],'Ejercicio 3: primer afiche en Canva.'],
[2,'Fotografía de eventos, ética y permisos',['eventos','etica'],'Cubrir un culto con la lista de fotos.'],
[2,'Video para redes: grabar y editar',['video'],'Grabar y editar un video de 30 segundos.'],
[2,'Proyecto final y entrega de certificados',['recursos'],'Presentar foto, afiche y video; comparar con la foto «antes».']];
var NM={fundamentos:'Fundamentos',composicion:'Composición',camara:'La cámara',luz:'Luz y color',diseno:'Diseño',practica:'Práctica',tutoriales:'Tutoriales',proyeccion:'Proyección',eventos:'Eventos',etica:'Ética',video:'Video',recursos:'Recursos'};
var inp=$('#pldate'),sk=store.get('bethesda-plan-skips')||[];
function nextSat(dt){var r=new Date(dt);r.setDate(r.getDate()+((6-r.getDay()+7)%7));return r}
var st=store.get('bethesda-plan-inicio');inp.value=st||nextSat(new Date()).toISOString().slice(0,10);
function draw(){var s0=nextSat(new Date(inp.value+'T12:00'));var today=new Date();today.setHours(0,0,0,0);var nextFound=false,h='',et=-1;
P.forEach(function(p,i){var extra=sk.filter(function(k){return k<=i}).length,dt=new Date(s0);dt.setDate(dt.getDate()+7*(i+extra));
if(p[0]!==et){et=p[0];h+='<div class="pletapa">'+ET[et]+'</div>'}
var isNext=!nextFound&&dt>=today;if(isNext)nextFound=true;
h+='<div class="plrow'+(dt<today?' past':'')+(isNext?' next':'')+'"><div class="pln">'+(i+1)+'</div><div class="pld">'+dt.toLocaleDateString('es-CO',{weekday:'short',day:'numeric',month:'short'})+(isNext?'<em>Próxima clase</em>':'')+'</div><div class="plt"><b>'+p[1]+'</b><span>'+p[2].map(function(k){return '<a href="#'+k+'">'+NM[k]+'</a>'}).join(' · ')+'</span><small>📝 Tarea: '+p[3]+'</small></div><button type="button" class="ghost plskip" data-i="'+i+'">Aplazar</button></div>'});
var fin=new Date(s0);fin.setDate(fin.getDate()+7*(P.length-1+sk.length));
w.innerHTML=h+'<p class="plend">Duración: '+P.length+' clases · Termina el '+fin.toLocaleDateString('es-CO',{day:'numeric',month:'long',year:'numeric'})+'</p>'}
inp.addEventListener('change',function(){store.set('bethesda-plan-inicio',inp.value);draw()});
w.addEventListener('click',function(e){var b=e.target.closest('.plskip');if(!b)return;sk.push(+b.dataset.i);store.set('bethesda-plan-skips',sk);draw()});
$('#plreset').addEventListener('click',function(){sk=[];store.set('bethesda-plan-skips',sk);draw()});draw()})();

/* ----- Simulador de proyección ----- */
(function(){var sl=$('#slide');if(!sl)return;
var L=['Jehová es mi pastor;','nada me faltará.','En lugares de delicados pastos','me hará yacer;','junto a aguas de reposo','me pastoreará.','Confortará mi alma;','guiárame por sendas de justicia.'];
var F=$('#slF'),D=$('#slD'),S=$('#slS');
function upd(){var f=+F.value,dd=+D.value,n=+segVal('slL'),bg=segVal('slB');
$('#slFv').textContent=f+' pt';$('#slDv').textContent='Banca '+dd;
$('#sltx').innerHTML=L.slice(0,n).join('<br>');
var px=f*sl.clientWidth/960;$('#sltx').style.fontSize=px+'px';
sl.className='slide '+bg+(S.checked?' shade':'');
var sc=1/(1+(dd-1)*.11);sl.style.transform='scale('+sc+')';sl.style.filter='blur('+((dd-1)*.05)+'px)';
var need=Math.ceil(20+dd*1.15),o='';
o+=f>=need?li('g','Se lee bien desde la banca '+dd+'.'):li('b','Desde la banca '+dd+' no se lee: suba la letra a '+need+' pt o más.');
o+=n<=4?li('g','Cantidad de texto adecuada.'):n===6?li('w','Seis líneas es mucho para un canto: mejor dos diapositivas.'):li('b','Demasiado texto: divídalo en dos o tres diapositivas.');
o+=bg==='osc'?li('g','Fondo oscuro liso: cómodo para la vista.'):bg==='foto'?(S.checked?li('g','Fondo oscurecido: el texto destaca.'):li('w','Foto recargada: active «oscurecer el fondo».')):li('w','Fondo claro: en el proyector encandila y cansa la vista. Prefiera fondo oscuro.');
$('#slres').innerHTML=o}
[F,D].forEach(function(x){x.addEventListener('input',upd)});S.addEventListener('change',upd);seg('slL',upd);seg('slB',upd);addEventListener('resize',upd);
document.addEventListener('click',function(e){if(e.target.closest('a[href="#proyeccion"]'))setTimeout(upd,500)});
addEventListener('hashchange',function(){if(location.hash==='#proyeccion')setTimeout(upd,60)});upd()})();

/* ----- Lista de fotos por evento ----- */
(function(){var ul=$('#evlist');if(!ul)return;
var E={bautizo:[['El lugar preparado, antes de empezar','La persona con el pastor antes del bautismo','El momento de la oración','La inmersión (use ráfaga)','La salida del agua y la alegría','El abrazo con la familia','Foto de grupo de los bautizados','Detalle: Biblia o certificado'],'Ubíquese de lado, con buena vista del agua, antes de que empiece. Use ráfaga en la inmersión: dura un segundo.'],
boda:[['Decoración y lugar vacío','El novio esperando en el altar','La entrada de la novia','El rostro del novio al verla','Votos y anillos (primer plano)','La oración y bendición','La salida de los esposos','Fotos familiares (lleve una lista)','Detalles: anillos, flores, Biblia'],'Hable antes con los novios y el pastor: dónde puede ubicarse y qué momentos no deben faltar.'],
vigilia:[['El templo lleno (plano general)','El predicador en plano medio','La alabanza con los músicos','La congregación en oración (de lejos o de espaldas)','Testimonios','Detalles: Biblias abiertas, manos','El ambiente y la decoración'],'En momentos de oración y ministración, quédese quieto y lejos. La discreción vale más que la foto.'],
ninos:[['Llegada y bienvenida','Niños en actividad, a la altura de sus ojos','Maestros enseñando','Detalle de manualidades','Juegos y alegría','Foto de grupo final'],'Agáchese a la altura de los niños. Publique solo con autorización de los padres y sin datos personales.'],
culto:[['Bienvenida e ingreso','La alabanza','La lectura bíblica','La predicación','La congregación (plano general)','Saludos y fraternidad al final'],'Un culto normal también cuenta la historia de la iglesia. Varíe planos: general, medio y detalles.']};
var st={},cur='bautizo';
function draw(){var e=E[cur],ch=st[cur]||(st[cur]={});ul.innerHTML=e[0].map(function(t,i){return '<li class="'+(ch[i]?'on':'')+'" data-i="'+i+'">'+t+'</li>'}).join('');
var n=Object.keys(ch).filter(function(k){return ch[k]}).length;$('#evbar').style.width=(n/e[0].length*100)+'%';
$('#evtxt').textContent=n===e[0].length?'🎉 ¡Cubrió todo el evento!':n+' de '+e[0].length+' fotos tomadas';$('#evtip').textContent='💡 '+e[1]}
ul.addEventListener('click',function(e){var l=e.target.closest('li');if(!l)return;var ch=st[cur];ch[l.dataset.i]=!ch[l.dataset.i];draw()});
seg('evB',function(b){cur=b.dataset.v;draw()});$('#evreset').addEventListener('click',function(){st[cur]={};draw()});draw()})();

/* ----- ¿Se puede publicar? ----- */
(function(){var q=$('#pqs');if(!q)return;
var C=[['Foto general de la congregación cantando, tomada desde atrás.',['si'],'Es un culto público y nadie se reconoce de cerca.'],
['Primer plano de un niño en la escuela dominical.',['perm'],'Necesita la autorización de sus padres.'],
['Una hermana llorando durante la oración.',['no'],'Es un momento íntimo. Aun con permiso, es mejor no publicarlo.'],
['Una foto bonita de un atardecer que encontró en Google.',['no'],'Tiene dueño. Use bancos gratuitos como Unsplash o Pexels.'],
['Retrato de un hermano que pidió no aparecer en redes.',['no'],'Su decisión se respeta siempre.'],
['El equipo de alabanza posando para una foto de grupo.',['si','perm'],'Posar es buena señal; confirme que saben que se publicará.'],
['El pastor predicando en el púlpito durante el culto.',['si'],'Es parte de su ministerio público; coordine con él el uso de sus fotos.']];
var n=0,done=false,f=$('#pqf');
function show(){done=false;q.textContent=C[n][0];f.textContent='';f.className='fbk';$$('#pqb button').forEach(function(b){b.classList.remove('on','right','wrong')});$('#pqn').textContent='Caso '+(n+1)+' de '+C.length}
$$('#pqb button').forEach(function(b){b.addEventListener('click',function(){if(done)return;done=true;var ok=C[n][1].indexOf(b.dataset.v)>=0;
$$('#pqb button').forEach(function(x){if(C[n][1].indexOf(x.dataset.v)>=0)x.classList.add('right')});if(!ok)b.classList.add('wrong');
f.textContent=(ok?'✔ ¡Bien! ':'✗ Piénselo otra vez. ')+C[n][2];f.className='fbk '+(ok?'g':'b')})});
$('#pqnext').addEventListener('click',function(){n=(n+1)%C.length;show()});show();
$('#authcp').addEventListener('click',function(){var t=$('#authtx').textContent,b=$('#authcp');
function okk(){b.textContent='✔ Copiado';setTimeout(function(){b.textContent='📋 Copiar texto'},1800)}
if(navigator.clipboard)navigator.clipboard.writeText(t).then(okk,function(){});else{var r=document.createRange();r.selectNode($('#authtx'));getSelection().removeAllRanges();getSelection().addRange(r);document.execCommand('copy');okk()}})})();

/* ----- Horizontal o vertical / lista de transmisión ----- */
(function(){var ph=$('#orph');if(ph){function u(b){ph.className='orphone '+b.dataset.v;var m={h:'Horizontal (16:9)',v:'Vertical (9:16)',s:'Vertical 4:5 o cuadrado'};$('#orf').textContent=m[b.dataset.v]+': ideal para '+b.dataset.t+'.';$('#orf').className='fbk g'}seg('orB',u);u($('#orB button.on'))}
var ul=$('#livechk');if(!ul)return;var it=$$('li',ul);function d(){var n=it.filter(function(i){return i.classList.contains('on')}).length;$('#livebar').style.width=(n/it.length*100)+'%';$('#livemsg').textContent=n===it.length?'🎉 ¡Todo listo para transmitir!':'Listo: '+n+' de '+it.length+'. Toque cada punto cuando lo tenga.';$('#livemsg').className='ckmsg '+(n===it.length?'g':'')}
it.forEach(function(i){i.addEventListener('click',function(){i.classList.toggle('on');d()})});d()})();

/* ----- Evaluaciones por sección ----- */
(function(){var Q={
fundamentos:[['¿Qué es componer una imagen?',['Decidir qué se muestra, dónde se coloca y qué se deja fuera','Aplicar muchos filtros','Tomar muchas fotos seguidas'],'Componer es organizar: elegir, ubicar y quitar.'],
['Antes de leer un afiche, la persona ya recibe…',['Una impresión de orden o desorden','La dirección exacta','Nada, solo lee'],'La imagen comunica antes que las palabras.'],
['¿Qué arruinaba la foto del «antes»?',['Elementos que distraen: cables, basurero, letrero','El color azul del cielo','El tamaño de la imagen'],'Un fondo limpio deja ver al protagonista.']],
composicion:[['Según la regla de los tercios, ¿dónde va el protagonista?',['En un cruce de las líneas','Exactamente en el centro','Pegado al borde'],'Los cruces son los puntos fuertes.'],
['¿Dónde NO conviene dejar el horizonte?',['Justo a la mitad','En el tercio inferior','En el tercio superior'],'A la mitad divide la foto en dos partes iguales.'],
['¿A qué altura se fotografía a una persona?',['A la altura de sus ojos','Desde muy abajo','Desde muy arriba'],'Así no se deforma y se ve natural.']],
camara:[['Para desenfocar el fondo en una predicación se usa…',['Un número f/ pequeño, como f/2.8','Un número f/ grande, como f/16','ISO 100'],'Apertura grande (número pequeño) = fondo desenfocado.'],
['¿Qué velocidad evita que las personas salgan movidas?',['1/125 o más rápida','1/15','1/30'],'Con velocidades lentas el movimiento se ve borroso.'],
['¿Qué pasa al subir mucho el ISO?',['Aparece «grano» en la foto','La foto se desenfoca','Sale en blanco y negro'],'Más ISO da más luz, pero más grano.']],
luz:[['¿Qué pasa con una persona a contraluz?',['Queda oscura','Se ve mejor iluminada','Sale desenfocada'],'La luz detrás oscurece el rostro.'],
['¿Cuál es el contraste mínimo recomendado para textos?',['4,5 a 1','1,5 a 1','2 a 1'],'Con menos de 4,5 el texto cuesta leerlo.'],
['Azul y naranja son colores…',['Complementarios','Análogos','Monocromáticos'],'Están opuestos en el círculo cromático.']],
diseno:[['¿Qué debe leerse primero en un afiche?',['El título','La dirección','El logo'],'La jerarquía empieza por el título.'],
['¿Cuántos tipos de letra se recomiendan como máximo?',['Dos','Cinco','Uno distinto por línea'],'Más de dos se ve desordenado.'],
['Si el texto va sobre una foto recargada, ¿qué hace?',['Pone un recuadro oscuro detrás','Usa letra más delgada','Nada'],'El recuadro devuelve el contraste.']],
practica:[['¿Qué hace primero antes de tomar una foto con el celular?',['Limpiar el lente','Usar el zoom','Activar el flash'],'Un lente sucio deja la foto opaca.'],
['¿Qué tamaño usa para la pantalla del templo?',['1920 × 1080','1080 × 1920','1080 × 1080'],'La pantalla es horizontal 16:9.'],
['Al editar, los ajustes se usan…',['Con moderación, para que se vea natural','Siempre al máximo','Solo filtros llamativos'],'La foto debe verse honesta y natural.']],
proyeccion:[['¿Cuál es el tamaño mínimo de letra en diapositivas?',['32 puntos','12 puntos','18 puntos'],'Desde las últimas bancas se necesita letra grande.'],
['¿Cuántas líneas por diapositiva en un canto?',['De 2 a 4','10','El canto completo'],'Poco texto se sigue mejor.'],
['Para proyectar letras de cantos con derechos de autor se necesita…',['Una licencia o el permiso del autor','Nada','Solo poner el nombre del canto'],'Por ejemplo, una licencia CCLI.']],
eventos:[['En un bautizo, ¿cómo captura la inmersión?',['Con ráfaga, desde un lugar preparado','Con flash fuerte','Acercándose hasta el agua'],'El momento dura un segundo.'],
['Durante la oración, el fotógrafo debe…',['Quedarse quieto y lejos','Acercarse para el primer plano','Usar flash'],'La discreción vale más que la foto.'],
['¿Qué se necesita para publicar fotos de niños?',['La autorización de sus padres','Nada','Que estén sonriendo'],'Los niños merecen cuidado especial.']],
etica:[['¿Puede usar cualquier imagen de Google?',['No, solo si su licencia lo permite','Sí, siempre','Sí, si la recorta'],'Casi todas las imágenes tienen dueño.'],
['Un hermano pide no salir en las fotos. ¿Qué hace?',['Respeta su decisión y no publica la foto','La publica igual','La publica con filtro'],'El respeto va primero.'],
['¿Qué retoque es correcto en fotos de personas?',['Ajustes naturales de luz y recorte','Cambiar el cuerpo o el rostro','Exagerar los colores de la piel'],'Nuestras imágenes deben ser verdaderas.']],
video:[['Un video para YouTube o la pantalla se graba…',['Horizontal','Vertical','En diagonal'],'Las pantallas son horizontales.'],
['¿Qué arruina más un video?',['El mal audio','La marca del celular','Los colores'],'Si no se escucha, nadie lo ve completo.'],
['¿Por qué conviene poner subtítulos a los videos?',['Porque mucha gente los ve sin sonido','Porque se ven más modernos','No sirven para nada'],'En redes, gran parte de los videos se ven en silencio.']]};
function shuf(a,seed){var r=a.map(function(x,i){return[x,i]});for(var i=r.length-1;i>0;i--){var j=(seed*(i+3)+7)%(i+1);var t=r[i];r[i]=r[j];r[j]=t}return r}
$$('.evalq').forEach(function(box,bi){var s=box.dataset.s,qs=Q[s];if(!qs)return;var ans={};
function render(){ans={};box.innerHTML='<h3>📝 Evaluación de la sección</h3><p>Responda las '+qs.length+' preguntas. Puede repetirla las veces que quiera.</p>'+qs.map(function(q,qi){return '<div class="eq" data-q="'+qi+'"><p class="eqp"><b>'+(qi+1)+'.</b> '+q[0]+'</p><div class="eqo">'+shuf(q[1],bi+qi+1).map(function(o){return '<button type="button" data-o="'+o[1]+'">'+o[0]+'</button>'}).join('')+'</div><p class="eqf"></p></div>'}).join('')+'<div class="eqres"></div>'}
box.addEventListener('click',function(e){var b=e.target.closest('.eqo button');if(b){var w=b.closest('.eq'),qi=+w.dataset.q;if(qi in ans)return;var ok=b.dataset.o==='0';ans[qi]=ok;
$$('button',w).forEach(function(x){if(x.dataset.o==='0')x.classList.add('right')});if(!ok)b.classList.add('wrong');
var f=$('.eqf',w);f.textContent=(ok?'✔ Correcto. ':'✗ No es esa. ')+qs[qi][2];f.className='eqf '+(ok?'g':'b');
if(Object.keys(ans).length===qs.length){var n=Object.keys(ans).filter(function(k){return ans[k]}).length;var ev=store.get('bethesda-eval')||{};if(!ev[s]||n>=ev[s][0])ev[s]=[n,qs.length];store.set('bethesda-eval',ev);
$('.eqres',box).innerHTML='<b>'+(n===qs.length?'🎉 ¡Excelente! ':'')+'Resultado: '+n+' de '+qs.length+'</b> <button type="button" class="ghost eqagain">Repetir evaluación</button>';if(window.drawAvance)window.drawAvance()}}
if(e.target.closest('.eqagain'))render()});render()})})();

/* ----- Generador de plantillas ----- */
var SELLO=new Image();SELLO.src='img/sello.png';
function wrapText(c,t,x,y,maxW,lh){var w=t.split(' '),line='',lines=[];w.forEach(function(p){var test=line?line+' '+p:p;if(c.measureText(test).width>maxW&&line){lines.push(line);line=p}else line=test});lines.push(line);lines.forEach(function(l,i){c.fillText(l,x,y+i*lh)});return lines.length}
(function(){var cv=$('#tgC');if(!cv)return;var c=cv.getContext('2d');
function draw(){var sz=segVal('tgF').split('x'),W=+sz[0],H=+sz[1],sty=segVal('tgS');cv.width=W;cv.height=H;var k=Math.min(W,H)/1080;
var pal={noche:['#00213b','#0b5170','#ffffff','#f2c14e','rgba(255,255,255,.12)'],claro:['#ffffff','#e3edf3','#033d60','#d99a1b','rgba(3,61,96,.08)'],dorado:['#f2c14e','#d99a1b','#00213b','#033d60','rgba(0,33,59,.12)']}[sty];
var g=c.createLinearGradient(0,0,W,H);g.addColorStop(0,pal[0]);g.addColorStop(1,pal[1]);c.fillStyle=g;c.fillRect(0,0,W,H);
c.save();c.strokeStyle=pal[3];c.globalAlpha=.35;c.lineWidth=6*k;[[-.1,-.05,.55],[.85,.8,.6]].forEach(function(r){c.save();c.translate(W*r[0]+W*.25,H*r[1]+H*.1);c.rotate(Math.PI/4);c.strokeRect(-W*r[2]/2,-W*r[2]/2,W*r[2],W*r[2]);c.restore()});c.restore();
var m=70*k,sz2=150*k;if(SELLO.complete&&SELLO.naturalWidth)c.drawImage(SELLO,m,m,sz2,sz2);
c.fillStyle=pal[2];c.textAlign='left';c.textBaseline='alphabetic';c.font='600 '+(30*k)+'px Georgia,serif';c.fillText('Centro Misionero',m+sz2+24*k,m+50*k);c.font='700 '+(54*k)+'px Georgia,serif';c.fillText('BETHESDA',m+sz2+24*k,m+105*k);c.font='600 '+(24*k)+'px Georgia,serif';c.fillText('NORTE',m+sz2+24*k,m+140*k);
c.fillStyle=pal[3];c.fillRect(m+sz2+24*k,m+115*k,220*k,4*k);
c.textAlign='center';c.fillStyle=pal[2];var t=$('#tgT').value||'Título';var fs=(W>H?120:130)*k;c.font='800 '+fs+'px Nunito,"Segoe UI",sans-serif';
var ty=W>H?H*.5:H*.55,nl=wrapText(c,t.toUpperCase(),W/2,ty,W-2*m,fs*1.05);
var dy=ty+nl*fs*1.05+20*k;c.fillStyle=pal[4];var dw=Math.min(W-2*m,760*k);c.fillRect(W/2-dw/2,dy-50*k,dw,74*k);
c.fillStyle=pal[2];c.font='700 '+(44*k)+'px Nunito,"Segoe UI",sans-serif';c.fillText($('#tgD').value,W/2,dy);
c.fillStyle=pal[3];c.fillRect(W/2-60*k,H-m-90*k,120*k,5*k);c.fillStyle=pal[2];c.font='600 '+(34*k)+'px Nunito,"Segoe UI",sans-serif';wrapText(c,$('#tgL').value,W/2,H-m-30*k,W-2*m,40*k)}
['tgT','tgD','tgL'].forEach(function(id){$('#'+id).addEventListener('input',draw)});seg('tgF',draw);seg('tgS',draw);SELLO.addEventListener('load',draw);
if(document.fonts)document.fonts.ready.then(draw);
$('#tgDl').addEventListener('click',function(){var msg=$('#tgMsg');try{var a=document.createElement('a');a.download='plantilla-bethesda.png';a.href=cv.toDataURL('image/png');a.click();msg.textContent='✔ Imagen descargada.';msg.className='fbk g'}catch(e){msg.textContent='Para descargar, abra la página desde internet (GitHub Pages).';msg.className='fbk w'}});draw()})();

/* ----- Galería del equipo ----- */
/* Para agregar trabajos: suba la imagen a img/galeria/ y agregue una línea, por ejemplo:
   ['img/galeria/foto1.jpg','Nombre del autor','Título del trabajo'], */
var GALERIA=[];
(function(){var g=$('#gal');if(!g)return;
if(!GALERIA.length){g.innerHTML=[1,2,3].map(function(){return '<div class="gph"><span>🖼️</span>Pronto: trabajos del equipo</div>'}).join('');return}
g.innerHTML=GALERIA.map(function(x,i){return '<button type="button" class="gi" data-i="'+i+'"><img src="'+x[0]+'" alt="'+x[2]+'" loading="lazy"><span><b>'+x[2]+'</b>'+x[1]+'</span></button>'}).join('');
var lb=$('#lbox');g.addEventListener('click',function(e){var b=e.target.closest('.gi');if(!b)return;var x=GALERIA[b.dataset.i];$('img',lb).src=x[0];$('p',lb).textContent=x[2]+' · '+x[1];lb.hidden=false});
lb.addEventListener('click',function(e){if(e.target.tagName!=='IMG')lb.hidden=true})})();

/* ----- Certificado ----- */
(function(){var bt=$('#cgen');if(!bt)return;var nm=$('#cname'),msg=$('#cmsg'),cv=$('#certC'),c=cv.getContext('2d'),LOGO=new Image();LOGO.src='img/logo.png';
nm.value=store.get('bethesda-nombre')||'';
bt.addEventListener('click',function(){var dn=store.get('bethesda-avance')||{},falt=AV_S.filter(function(s){return !dn[s[0]]});
if(!nm.value.trim()){msg.textContent='Escriba su nombre completo.';msg.className='fbk w';return}
if(falt.length){msg.textContent='Le faltan '+falt.length+' secciones por marcar: '+falt.map(function(s){return s[1]}).join(', ')+'.';msg.className='fbk w';return}
store.set('bethesda-nombre',nm.value);
function draw(){var W=1600,H=1130;c.fillStyle='#fbfaf6';c.fillRect(0,0,W,H);c.strokeStyle='#033d60';c.lineWidth=22;c.strokeRect(30,30,W-60,H-60);c.strokeStyle='#d99a1b';c.lineWidth=4;c.strokeRect(62,62,W-124,H-124);
if(LOGO.naturalWidth){var lw=520,lh=lw*LOGO.naturalHeight/LOGO.naturalWidth;c.drawImage(LOGO,W/2-lw/2,95,lw,lh)}
c.textAlign='center';c.fillStyle='#033d60';c.font='800 58px Nunito,"Segoe UI",sans-serif';c.fillText('CERTIFICADO DE PARTICIPACIÓN',W/2,400);
c.fillStyle='#1f3344';c.font='400 30px Nunito,"Segoe UI",sans-serif';c.fillText('Se otorga a',W/2,465);
c.fillStyle='#033d60';c.font='700 76px Georgia,serif';c.fillText(nm.value.trim(),W/2,565);c.fillStyle='#d99a1b';c.fillRect(W/2-380,590,760,4);
c.fillStyle='#1f3344';c.font='400 30px Nunito,"Segoe UI",sans-serif';wrapText(c,'por completar la capacitación «Imágenes con Excelencia» en composición, fotografía, diseño, proyección y comunicación para el ministerio.',W/2,660,1100,44);
c.font='600 26px Nunito,"Segoe UI",sans-serif';c.fillText('Bogotá, '+new Date().toLocaleDateString('es-CO',{day:'numeric',month:'long',year:'numeric'}),W/2,790);
c.strokeStyle='#1f3344';c.lineWidth=2;[[W*.3,'Pastor(a)'],[W*.7,'Instructor']].forEach(function(p){c.beginPath();c.moveTo(p[0]-190,920);c.lineTo(p[0]+190,920);c.stroke();c.font='600 26px Nunito,"Segoe UI",sans-serif';c.fillText(p[1],p[0],958)});
c.fillStyle='#0e7a8c';c.font='italic 22px Georgia,serif';c.fillText('«Todo lo que hagáis, hacedlo de corazón, como para el Señor» · Colosenses 3:23',W/2,1040);
$('#certprev').classList.add('show');try{$('#cdl').href=cv.toDataURL('image/png');msg.textContent='✔ Certificado listo. Revíselo y descárguelo.';msg.className='fbk g'}catch(e){msg.textContent='Vista previa lista. Para descargar, abra la página desde internet (GitHub Pages).';msg.className='fbk w'}}
if(LOGO.complete)draw();else LOGO.onload=draw})})();


/* ----- Imágenes de ejemplos: guía, error y ampliación ----- */
(function(){var lb=document.getElementById('lbox');if(lb&&lb.parentNode!==document.body)document.body.appendChild(lb);
$$('.exvis.real').forEach(function(v){var img=$('img',v);function bad(){v.classList.add('noimg')}
img.addEventListener('error',bad);
$('.exg',v).addEventListener('click',function(e){e.stopPropagation();v.classList.toggle('guia');this.textContent=v.classList.contains('guia')?'✕ Ocultar guía':'👁 Ver guía'});
img.addEventListener('click',function(){if(!lb)return;$('img',lb).src=img.src.replace(/width=\d+/,'width=1400');$('p',lb).textContent=img.alt;lb.hidden=false})});
if(lb)lb.addEventListener('click',function(e){if(e.target.tagName!=='IMG')lb.hidden=true});})();


/* ----- Ampliar ilustraciones e imágenes ----- */
(function(){var lb=document.getElementById('lbox');if(!lb)return;if(lb.parentNode!==document.body)document.body.appendChild(lb);
var box=lb.querySelector('.lbsvg');if(!box){box=document.createElement('div');box.className='lbsvg';lb.insertBefore(box,lb.querySelector('p'))}
var lbimg=lb.querySelector('img');
document.addEventListener('click',function(e){var z=e.target.closest('.zoom');if(z){var sv=z.querySelector('svg');if(!sv)return;
var h=sv.outerHTML.replace(/id="([^"]+)"/g,'id="$1_lb"').replace(/url\(#([^)]+)\)/g,'url(#$1_lb)');
box.innerHTML=h;box.style.display='';lbimg.style.display='none';lb.querySelector('p').textContent=z.dataset.cap||'';lb.hidden=false;return}
var im=e.target.closest('.exvis.real img');if(im){box.innerHTML='';box.style.display='none';lbimg.style.display=''}});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.hidden=true});
lb.addEventListener('click',function(){lb.hidden=true})})();


/* ----- Fotos reales: error, ampliación ----- */
(function(){var lb=document.getElementById('lbox');
$$('.phx').forEach(function(ph){$$('img',ph).forEach(function(img){
img.addEventListener('error',function(){ph.classList.add('noimg')});
img.addEventListener('click',function(e){e.stopPropagation();if(!lb)return;var box=lb.querySelector('.lbsvg');if(box){box.innerHTML='';box.style.display='none'}
var li=lb.querySelector('img');li.style.display='';li.src=img.src.replace(/([?&])(w|width)=\d+/,'$1$2=1400');lb.querySelector('p').textContent=img.alt;lb.hidden=false})})});
})();


/* ----- Profundicemos: leer en grande ----- */
(function(){var m=document.createElement('div');m.className='readm';m.hidden=true;
m.innerHTML='<div class="rbox" role="dialog" aria-modal="true"><button type="button" class="rclose" aria-label="Cerrar">✕</button><div class="rvis"></div><div class="rbody"><small></small><h3></h3><div class="rtxt"></div></div><div class="rnav"><button type="button" class="rprev">← Anterior</button><span></span><button type="button" class="rnext">Siguiente →</button></div></div>';
document.body.appendChild(m);var list=[],idx=0;
function fixIds(h){return h.replace(/id="([^"]+)"/g,'id="$1_rd"').replace(/url\(#([^)]+)\)/g,'url(#$1_rd)')}
function show(i){idx=(i+list.length)%list.length;var dp=list[idx],v=dp.querySelector('.dpv'),sec=dp.closest('.deepc').querySelector('h3');
$('.rvis',m).innerHTML=v?fixIds(v.outerHTML):'';$$('.rvis img',m).forEach(function(img){img.addEventListener('error',function(){var p=img.closest('.phx');if(p)p.classList.add('noimg')})});
$('small',m).textContent=sec?sec.textContent.replace(/^\S+\s/,''):'';$('h3',m).textContent=dp.querySelector(':scope>b').textContent;
var p=dp.querySelector(':scope>p');$('.rtxt',m).innerHTML=p?p.outerHTML:'';$('.rnav span',m).textContent=(idx+1)+' de '+list.length;m.querySelector('.rbox').scrollTop=0}
function open(dp){list=$$('.dp',dp.closest('.deep'));show(list.indexOf(dp));m.hidden=false;document.body.style.overflow='hidden'}
function close(){m.hidden=true;document.body.style.overflow=''}
$$('.dp').forEach(function(dp){var b=document.createElement('button');b.type='button';b.className='dpread';b.textContent='⤢ Leer en grande';dp.appendChild(b);
b.addEventListener('click',function(){open(dp)});dp.querySelector(':scope>b').addEventListener('click',function(){open(dp)})});
$('.rclose',m).addEventListener('click',close);m.addEventListener('click',function(e){if(e.target===m)close()});
$('.rprev',m).addEventListener('click',function(){show(idx-1)});$('.rnext',m).addEventListener('click',function(){show(idx+1)});
document.addEventListener('keydown',function(e){if(m.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowRight')show(idx+1);if(e.key==='ArrowLeft')show(idx-1)});})();
