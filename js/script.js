// O Bootstrap já cuida da navbar, do carrossel e do modal de horários.
// Aqui fica só o envio do formulário.

const formReserva = document.getElementById('formReserva');
const botaoConfirmar = document.getElementById('botaoConfirmar');
const alertaSucesso = document.getElementById('alertaSucesso');
const modalConfirmacao = new bootstrap.Modal(document.getElementById('modalConfirmacao'));

// O navegador só dispara o "submit" se os campos passarem na validação do HTML5
formReserva.addEventListener('submit', function (evento) {
  evento.preventDefault(); // impede a página de recarregar
  modalConfirmacao.show();
});

// Ao confirmar: fecha o modal, limpa o formulário e mostra a mensagem de sucesso
botaoConfirmar.addEventListener('click', function () {
  modalConfirmacao.hide();
  formReserva.reset();
  alertaSucesso.classList.remove('d-none');
});
