const cursor = document.querySelector('.cursor');
// Pega o botão de voltar ao topo
const voltarTopoBtn = document.getElementById('voltar-topo');

// Movimentação do cursor
document.addEventListener('mousemove', (info) => {
    cursor.style.left = info.clientX + 'px';
    cursor.style.top = info.clientY + 'px';
});

// Efeito de destaque ao passar por links
const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
    });

    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// Mostra o botão quando o usuário rolar para baixo
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Quando rolar 200px ou mais
        voltarTopoBtn.style.display = 'block';
    } else {
        voltarTopoBtn.style.display = 'none';
    }
});

// Adiciona o comportamento de voltar ao topo
voltarTopoBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolagem suave
    });
});
