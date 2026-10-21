const btnAcionar = document.querySelector('.btn-acionar');
const menuLateral = document.querySelector('.menu-lateral');
const overlay = document.querySelector('#overlay');
const linksMenu = document.querySelectorAll('.menu-lateral a, .menu-lateral button');
const iconAbrir = document.querySelector('.icon-abrir');
const iconFechar = document.querySelector('.icon-fechar');

// Função para alternar o estado do menu
function toggleMenu() {
    const estaAtivo = menuLateral.classList.toggle('menuAtivo');
    
    // Alterna a classe inativo/ativo no overlay
    if (overlay) overlay.classList.toggle('ativo', estaAtivo);
    btnAcionar.classList.toggle('ativo', estaAtivo);

    // Alterna os ícones do botão
    if (iconAbrir && iconFechar) {
        iconAbrir.style.display = estaAtivo ? 'none' : 'block';
        iconFechar.style.display = estaAtivo ? 'block' : 'none';
    }
}

// Evento no botão principal
btnAcionar.addEventListener('click', toggleMenu);

// Fecha o menu ao clicar no overlay/fundo escuro
if (overlay) {
    overlay.addEventListener('click', toggleMenu);
}

// Fecha o menu automaticamente ao clicar em qualquer item/link
linksMenu.forEach(item => {
    item.addEventListener('click', () => {
        if (menuLateral.classList.contains('menuAtivo')) {
            toggleMenu();
        }
    });
});

// Fecha o menu ao pressionar a tecla "ESC"
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuLateral.classList.contains('menuAtivo')) {
        toggleMenu();
    }
});
