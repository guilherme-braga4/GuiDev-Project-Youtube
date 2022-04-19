import './App.css'
import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'

function App() {
  //Aqui iremos tornar a nossa "página dinâmica", através do Javascript
  //Estado para armazenar Altura e Peso
  const [form, setForm] = useState('')

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
      alert('O seu IMC é ' + imc + ' e sua classificação é Magreza')
    }
    // Desafio: implemente uma lógica para verificar o IMC, e junto com o Alert, mostrar a classificação do IMC
    // Por exemplo: "Seu IMC é 30 e sua Classificação é Sobrepeso"
    // if ("alguma coisa") {
    //   "isso acontece"
    // }
    // else {
    //   "outra coisa acontece"
    // }

    // // ou você pode precisar por mais de 2 condições, e usar o Else If
    // if ("alguma coisa") {
    //   "isso acontece"
    // }
    // else if ("outra coisa") {
    //  "outra coisa acontece"
    // }
    // else {
    //   "por fim isso acontece"
    // }
  }

  //JSX, equivale ao nosso HTML e CSS
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="form">
          <div className="container-input-label">
            <div className="childen-container-input-label">
              <label>Quanto você mede?</label>
              <InputMask
                placeholder="ALTURA"
                onChange={handleChange}
                name="altura"
                mask="9.99"
              />
            </div>
            <div className="childen-container-input-label">
              <label>Quanto você pesa?</label>
              <InputMask
                placeholder="PESO"
                onChange={handleChange}
                name="peso"
                // type="number"
                // mask=""
              />
            </div>
          </div>
          <div className="container-button">
            <button>CALCULAR</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default App
