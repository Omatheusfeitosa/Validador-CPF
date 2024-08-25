import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';
import ValidaCPF from './modules/ValidaCPF';

document.addEventListener('DOMContentLoaded', function() {

  const validarButton = document.querySelector('#validar');
  const gerarButton = document.querySelector('#gerar');
  const cpfGeradoDiv = document.querySelector('.cpf-gerado');

  const toggleMenu = document.querySelector(".toggle-icon")
  const toggleBar = document.querySelector(".nav-bar-toggle")

  toggleMenu.addEventListener('click', function() {
    toggleBar.classList.toggle('active')
    const icon = toggleMenu.querySelector('i')

    if(toggleBar.classList.contains('active')) {
      icon.classList.remove('fa-bars')
      icon.classList.add('fa-x')
    } else {
      icon.classList.remove("fa-x")
      icon.classList.add("fa-bars")
    }
  })

  if(validarButton) {
  validarButton.addEventListener('click', function() {
        let cpf = document.querySelector('#cpf').value
        cpf = cpf.replace(/\D+/g, '')
        const valida = new ValidaCPF(cpf)

        if(cpf.length !== 11) {
          return document.querySelector('#mensagem').innerHTML = 'O CPF precisa conter 11 digitos'
        }
        
        if(valida.valida()) {
          return document.querySelector('#mensagem').innerHTML = 'CPF Válido'
        } else {
          return document.querySelector('#mensagem').innerHTML = 'CPF Inválido'
        }
      })
  }

  if(gerarButton) {
  document.querySelector('#gerar').addEventListener('click', function() {
      const gera = new GeraCPF();
      const cpfGerado = document.querySelector('.cpf-gerado');
      if(cpfGerado) {
        cpfGerado.innerHTML = gera.geraNovoCpf();
      }
    })
  }

  if(cpfGeradoDiv) {
  document.querySelector('.cpf-gerado').addEventListener('click', function() {
      const textoCopiado = document.querySelector('.cpf-gerado').innerText
      navigator.clipboard.writeText(textoCopiado)
        .then(() => {
          alert("CPF Copiado!")
        })
        .catch(erro => {
          console.error("Houve um problema ao copiar o CPF", erro)
        })
    })
  }
})
