(function(){var live=Date.now()>=Date.parse('2026-11-10T07:00:00Z');
document.querySelectorAll('a[data-store]').forEach(function(a){
if(live){a.textContent=a.getAttribute('data-store');}
else if(a.hasAttribute('data-prelaunch')){a.href='launch.ics';a.setAttribute('download','DuBizUnterwegs-Launch.ics');a.title='Kalendereintrag f\u00fcr den 10. November 2026';}
else{a.removeAttribute('href');a.classList.add('soon');a.setAttribute('aria-disabled','true');}});})();
