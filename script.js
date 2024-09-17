// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-btn');
    const body = document.body;

    // تحقق من الوضع المخزن في التخزين المحلي، إذا كان موجوداً
    const currentMode = localStorage.getItem('mode');
    if (currentMode) {
        body.classList.add(currentMode);
    } else {
        // تعيين الوضع الافتراضي
        body.classList.add('day-mode');
    }

    toggleBtn.addEventListener('click', () => {
        if (body.classList.contains('day-mode')) {
            body.classList.remove('day-mode');
            body.classList.add('night-mode');
            localStorage.setItem('mode', 'night-mode');
        } else {
            body.classList.remove('night-mode');
            body.classList.add('day-mode');
            localStorage.setItem('mode', 'day-mode');
        }
    });
});
 

function myFunction() {
    var x = document.getElementById("content");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myF() {
    var x = document.getElementById("todo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }