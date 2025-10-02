import { loadNavbar } from './navbar.js';
import { loadFooter } from './footer.js';

document.querySelector('#navbar').innerHTML = loadNavbar();
document.querySelector('#footer').innerHTML = loadFooter();
const video = document.getElementById('heroVideo');
const muteBtn = document.getElementById('muteToggle');


if (video && muteBtn) {
  muteBtn.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      video.play().catch(err => console.log("Autoplay restriction:", err));
      muteBtn.textContent = '🔊';
    } else {
      video.muted = true;
      muteBtn.textContent = '🔇';
    }
  });
}

//about section js
// دالة العد التدريجي
function animateCountUp(element, target) {
  let current = 0;
  const increment = Math.ceil(target / 100);
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    element.textContent = current + "%";
  }, 20);
}

// مراقبة ظهور السكشن
const aboutSection = document.querySelector('#about');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // عدّاد الأرقام
      document.querySelectorAll('.stat-value').forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        animateCountUp(stat, target);
      });

      // تعبئة progress bars
      document.querySelectorAll('.progress-bar').forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + "%";
      });

      observer.disconnect(); // مرة واحدة بس
    }
  });
}, { threshold: 0.4 });

if (aboutSection) {
  observer.observe(aboutSection);
}
