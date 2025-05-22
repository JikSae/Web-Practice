// Swiper 초기화
const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// GSAP 등장 애니메이션
gsap.from("#intro", {
  duration: 1,
  opacity: 0,
  y: -50,
  ease: "power2.out"
});

gsap.from("#music", {
  duration: 1,
  opacity: 0,
  y: 50,
  delay: 0.3,
  ease: "power2.out"
});

gsap.from("#mbti", {
  duration: 1,
  opacity: 0,
  y: 50,
  delay: 0.6,
  ease: "power2.out"
});

gsap.from("#hobby", {
  duration: 1,
  opacity: 0,
  y: 50,
  delay: 0.9,
  ease: "power2.out"
});

gsap.from("#favorite-movie", {
  duration: 1,
  opacity: 0,
  y: 50,
  delay: 1.2,
  ease: "power2.out"
});

  gsap.from("#mbtiList li", {
    opacity: 0,
    y: 20,
    stagger: 0.8,
    duration: 1.1,
    ease: "power2.out"
  });

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('mbtiChart').getContext('2d');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['내향(I)', '감각(S)', '감정(F)', '인식(P)', '외향(E)', '직관(N)', '사고(T)', '판단(J)'],
      datasets: [{
        label: 'ISFP 성향 비율',
        data: [84, 75, 68, 56, 16, 25, 32, 44],
        backgroundColor: 'rgba(255, 193, 7, 0.2)',
        borderColor: '#fdc000',
        pointBackgroundColor: 'rgb(255,255,255)',
        pointBorderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'white'
          }
        }
      }
    }
  });
});