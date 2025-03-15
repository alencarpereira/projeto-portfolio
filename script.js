const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', info => {
    cursor.style.left = info.clientX + 'px';
    cursor.style.top = info.clientY + 'px';
})

