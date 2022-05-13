import './LoginPage.css'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import InputMask from 'react-input-mask'
import { Button, Modal, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function LoginPage() {
  //Aqui iremos tornar a nossa "página dinâmica", através do Javascript
  //Estado para armazenar Altura e Peso
  const [form, setForm] = useState('')
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const value = useContext(AuthContext)
  console.log('value', value)

  //Função para armazenar o que foi digitado pelo usuário, dentro dos Inputs
  //Iremos criar um objeto
  function handleChange(event) {
    console.log('event 1', event.target.name)
    console.log('event 2', event.target.value)
    setForm({ ...form, [event.target.name]: event.target.value })
    console.log('form', form)
  }

  //Função para enviar para a API (Usaremos o console para ver o Network)
  function handleSubmit(event) {
    event.preventDefault()
    console.log('estamos dentro do handleSubmit')
    console.log('form handleSubmit', form)
    if ((!form.altura && !form.peso) || !form.peso || !form.altura) {
      alert('Os valores não podem ser inválidos. Digite o valor corretamente')
    } else {
      const imc = form.peso / (form.altura * form.altura)
      console.log('imc', imc)
      alert('O seu IMC é ' + imc)
    }
  }

  //JSX, equivale ao nosso HTML e CSS
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="form">
          <div className="container-input-label">
            <div className="childen-container-input-label">
              <label>Digite seu Email</label>
              <InputMask
                placeholder="E-mail"
                onChange={handleChange}
                name="email"
                // mask="9.99"
              />
            </div>
            <div className="childen-container-input-label">
              <label>Digite sua Senha</label>
              <InputMask
                placeholder="Senha"
                onChange={handleChange}
                name="senha"
                // type="number"
                // mask=""
              />
            </div>
          </div>
          <div className="container-button">
            <button type="submit">LOGIN</button>
            <a className="container-forgot-password">Cadastre-se</a>
          </div>
        </div>
      </div>
    </form>
  )
}

export default LoginPage
