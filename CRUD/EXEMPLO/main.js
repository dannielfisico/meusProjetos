'use strict'

const openCloseModal = () => document.getElementById('modal').classList.toggle('active')

document.getElementById('cadastrarCliente').addEventListener('click', openCloseModal)
document.getElementById('modalClose').addEventListener('click', openCloseModal)
document.getElementById('cancelar').addEventListener('click', openCloseModal)

const banco = {
    nome: "Carlos Alves",
    email: "carlosalves@gmail.com",
    celular: "889879755",
    cidade: "Sobral"
}

const salvarCliente = () => localStorage.setItem(banco)

salvarCliente()