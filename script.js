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
var ids=['inicio','fundamentos','composicion','luz','diseno','practica','tutoriales','recursos'];
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
