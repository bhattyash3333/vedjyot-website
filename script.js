
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  if(btn && nav){
    btn.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.position = 'absolute';
      nav.style.top = '78px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = '#fffaf2';
      nav.style.flexDirection = 'column';
      nav.style.padding = '18px 28px';
      nav.style.boxShadow = '0 20px 40px rgba(0,0,0,.12)';
    });
  }
});
