import React from 'react'
import '../styles/LoginPage.css'
import { LoginCall } from '../services/LoginService'

export function LoginPage() {
  async function handleSubmit(event) {
    event.preventDefault()
    let form = {
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value,
    }
    await LoginCall(form).then((response) => {
      handleError(response)
      handleSuccess(response)
    })
  }

  function handleError(response) {
    if (
      response.status === 400 &&
      response.message === 'Error: User not found!'
    ) {
      document.querySelector('.mailerrormessage').innerHTML = response.message
      document.querySelector('.passerrormessage').innerHTML = ''
    } else if (
      response.status === 400 &&
      response.message === 'Error: Password is invalid'
    ) {
      document.querySelector('.mailerrormessage').innerHTML = ''
      document.querySelector('.passerrormessage').innerHTML = response.message
    }
  }

  function handleSuccess(response) {
    if (response.status === 200) {
      const remember = document.querySelector('#remember-me')
      if (remember.checked) {
        localStorage.setItem('jwt', response.body.token)
      } else {
        sessionStorage.setItem('jwt', response.body.token)
      }
      document.querySelector('.mailerrormessage').innerHTML = ''
      document.querySelector('.passerrormessage').innerHTML = ''
      document.location.href = '/user'
    }
  }

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" />
              <p className="mailerrormessage"></p>
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
              <p className="passerrormessage"></p>
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <input type="submit" value="Sign In" className="sign-in-button" />
          </form>
        </section>
      </main>
    </>
  )
}
