
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
const form=document.getElementById('contactForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const body=[`Name: ${data.get('name')||''}`,`Phone: ${data.get('phone')||''}`,`Email: ${data.get('email')||''}`,`Service: ${data.get('service')||''}`,`Message: ${data.get('message')||''}`].join('%0D%0A');window.location.href=`mailto:vedjyotsewa@gmail.com?subject=VedJyot Puja Inquiry&body=${body}`;});}
const lb=document.getElementById('lightbox');
if(lb){document.querySelectorAll('.gallery-item').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();lb.querySelector('img').src=a.href;lb.classList.add('open')}));lb.addEventListener('click',()=>lb.classList.remove('open'));}
