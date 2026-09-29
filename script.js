
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(menuBtn && nav){
  menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}
const monthly=document.querySelector('[data-plan="monthly"]');
const annual=document.querySelector('[data-plan="annual"]');
const prices=document.querySelectorAll('[data-monthly][data-annual]');
function setPlan(plan){
  prices.forEach(el=>{
    el.textContent = plan==='annual' ? el.dataset.annual : el.dataset.monthly;
  });
  if(monthly) monthly.classList.toggle('active',plan==='monthly');
  if(annual) annual.classList.toggle('active',plan==='annual');
}
monthly?.addEventListener('click',()=>setPlan('monthly'));
annual?.addEventListener('click',()=>setPlan('annual'));
setPlan('monthly');

document.querySelectorAll('form[data-demo-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const status=form.querySelector('.form-status');
    if(status) status.textContent='Thank you. Your enquiry has been received.';
    form.reset();
  });
});
