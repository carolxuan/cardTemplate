// product-tab
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

function openTab(tabId) {
  tabButtons.forEach(btn => btn.classList.remove('active'));
  tabContents.forEach(content => content.classList.remove('active'));

  document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

tabButtons.forEach(button => {
  button.addEventListener('click', () => openTab(button.getAttribute('data-tab')));
});

openTab('tab1');

// 卡片輪播 swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 18
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});
