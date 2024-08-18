// Selecionar os elementos
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const modal = document.getElementById('modal');

// Adicionar evento de click ao botão de abrir
openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Adicionar evento de click ao botão de fechar
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});