(function(){
var top=document.querySelector('[data-top]'),solidAlways=document.body.classList.contains('p-kontakt');
function onS(){top.classList.toggle('solid',solidAlways||scrollY>40)}onS();addEventListener('scroll',onS,{passive:true});
var bur=document.querySelector('.burger'),menu=document.getElementById('menu');
bur.addEventListener('click',function(){var o=bur.getAttribute('aria-expanded')==='true';bur.setAttribute('aria-expanded',!o);menu.hidden=o;top.classList.add('solid');if(o)onS()});
// galeria
var tabs=document.querySelectorAll('.tabs button');
tabs.forEach(function(b){b.addEventListener('click',function(){var f=b.dataset.f;tabs.forEach(function(x){x.setAttribute('aria-pressed',x===b)});
 document.querySelectorAll('.gal-it').forEach(function(it){it.hidden=!(f==='wszystkie'||it.dataset.k===f)})})});
var lb=document.querySelector('.lb');
if(lb){document.querySelectorAll('.gal-btn').forEach(function(b){b.addEventListener('click',function(){var i=b.querySelector('img');lb.querySelector('img').src=i.src;lb.querySelector('img').alt=i.alt;lb.querySelector('p').textContent=i.alt;lb.showModal()})});
 lb.querySelector('.lb-x').addEventListener('click',function(){lb.close()});lb.addEventListener('click',function(e){if(e.target===lb)lb.close()})}
// formularz
var f=document.getElementById('wycena');
if(f){var q=new URLSearchParams(location.search).get('typ');if(q){var s=f.querySelector('select');if([].some.call(s.options,function(o){return o.value===q}))s.value=q}
 f.addEventListener('submit',function(ev){ev.preventDefault();var note=f.querySelector('.form-note');
  if(!f.checkValidity()){note.textContent='Uzupełnij imię, telefon, miejscowość i zaznacz zgodę.';return}
  var d=new FormData(f),typ=f.querySelector('select').selectedOptions[0].text;
  var body='Rodzaj: '+typ+'\nPowierzchnia: '+(d.get('m2')||'-')+' m2\nMiejscowość: '+d.get('miasto')+'\nImię: '+d.get('imie')+'\nTelefon: '+d.get('tel')+'\n\n'+(d.get('msg')||'');
  location.href='mailto:marcins2490@o2.pl?subject='+encodeURIComponent('Wycena ocieplenia: '+typ+', '+d.get('miasto'))+'&body='+encodeURIComponent(body);
  note.textContent='Otwieramy Twoją pocztę z gotową wiadomością. Wolisz szybciej? Zadzwoń 663 409 045.'})}
// mapa
var m=document.getElementById('mapa');
if(m){var go=function(){if(!window.L)return setTimeout(go,150);var ll=[+m.dataset.lat,+m.dataset.lng];
 var map=L.map(m,{scrollWheelZoom:false}).setView([51.82,20.0],8);
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'© OpenStreetMap'}).addTo(map);
 L.marker(ll).addTo(map).bindPopup('<b>M-BUD Piana Pur</b><br>Zabłocie 2, 96-206 Sadkowice');};go()}
})();

/* === licznik otwarć demo (buy-signal) v3 — geo po stronie serwera === */
(function(){try{if(String(location.protocol).indexOf('http')!==0)return;try{if(/[?&#]team=1/.test(location.search+location.hash)){localStorage.setItem('nb_team','1');}}catch(e){}try{if(localStorage.getItem('nb_team')==='1')return;}catch(e){}if(/crm-newbeginning|crm\.impulseo\.pl/.test(document.referrer||''))return;try{if(navigator.webdriver)return;}catch(e){}try{if(/^https?:\/\/(kris20032|impulseo-pl)\.github\.io\/?$/i.test(document.referrer||''))return;}catch(e){}if(sessionStorage.getItem('_dv'))return;sessionStorage.setItem('_dv','1');var seg=(location.pathname.split('/').filter(Boolean)[0])||'';var base=location.origin+(seg?('/'+seg):'');var ua='';try{ua=(navigator.userAgent||'').slice(0,300);}catch(e){}var EP='https://zngfubfinbojfgaxdrbf.supabase.co/functions/v1/demo-view';try{fetch(EP,{method:'POST',keepalive:true,headers:{'Content-Type':'text/plain'},body:JSON.stringify({demo_url:base,page:location.pathname,referrer:(document.referrer||null),user_agent:(ua||null)})}).catch(function(){});}catch(e){}}catch(e){}})();
