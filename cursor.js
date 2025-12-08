document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');

    const interactiveElements = document.querySelectorAll('a, button, .btn, .magnetic, [data-magnetic]');

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let circleX = 0;
    let circleY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animateCursor = () => {
        // Animate dot
        dotX += (mouseX - dotX) * 0.9;
        dotY += (mouseY - dotY) * 0.9;
        cursorDot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;

        // Animate circle
        circleX += (mouseX - circleX) * 0.1;
        circleY += (mouseY - circleY) * 0.1;
        cursorCircle.style.transform = `translate(${circleX - 20}px, ${circleY - 20}px)`;

        requestAnimationFrame(animateCursor);
    };

    animateCursor();

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('grow');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('grow');
        });
    });
});