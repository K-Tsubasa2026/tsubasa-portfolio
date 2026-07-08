/* =============================================
   画像スライダー（フェードイン/アウト）
   ============================================= */
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
}, 3000);

/* =============================================
   タイプライターエフェクト
   ============================================= */
const phrases = [
    "ITパスポート合格",
    "AWS(8月受験予定)",
    "分析/デザイン/管理の経験を活かす、マルチスキルワーカー",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById("typed-text");

function typeWriter() {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
        typedEl.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1800);
            return;
        }
    } else {
        typedEl.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }

    const speed = isDeleting ? 60 : 90;
    setTimeout(typeWriter, speed);
}

typeWriter();

/* =============================================
   フリップカード（クリックで表裏切り替え）
   ============================================= */
document.querySelectorAll(".flip").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});
