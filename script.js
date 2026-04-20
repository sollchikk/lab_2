console.log("JS підключено");

document.addEventListener('DOMContentLoaded', () => {

    // 1. Зберігання даних про браузер та ОС у localStorage
    
    const osInfo = navigator.platform;
    const browserInfo = navigator.userAgent;

    let arch = "32-bit";
    if (browserInfo.includes("WOW64") || browserInfo.includes("Win64") || browserInfo.includes("x64")) {
        arch = "64-bit";
    }

    const combinedInfo = `ОС: ${osInfo} (${arch}) | Браузер: ${browserInfo}`;
    localStorage.setItem('userSystemData', combinedInfo);

    const footerElement = document.getElementById('system-info');
    if (footerElement) {
        footerElement.textContent = `Ваша система: ${combinedInfo}`;
    }

   
    // 2. Отримання коментарів із сервера
   
    const reviewsContainer = document.getElementById('reviews');
    const variantNumber = 12;

    fetch(`https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`)
      .then(response => response.json())
      .then(data => {
        data.forEach(comment => {
          const div = document.createElement('div');
          div.innerHTML = `<h4>${comment.name}</h4><p>${comment.body}</p>`;
          reviewsContainer.appendChild(div);
        });
      })
      .catch(error => console.error('Error:', error));

 
    // 3. Модальне вікно після 1 хв
   
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('closeModal');

    setTimeout(() => modal.style.display = 'block', 1000);
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    
    // 4. Перемикач теми + автоматичний режим
   
    const body = document.body;
    const toggleBtn = document.getElementById('toggleTheme');

    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) body.classList.add('light-mode');
    else body.classList.add('dark-mode');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(savedTheme + '-mode');
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

});