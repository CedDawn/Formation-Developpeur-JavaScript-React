import React, { useEffect } from 'react'
import '../styles/Header.css'
import Logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { UserCall } from '../services/UserService'
import { useSelector } from 'react-redux'
import { appSlice, store, userSlice } from '../store'

export function Header() {
  const { firstName, token } = useSelector((state) => state.user)
  const { isLogged } = useSelector((state) => state.app)

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      store.dispatch(userSlice.actions.setToken(localStorage.getItem('jwt')))
    } else if (sessionStorage.getItem('jwt')) {
      store.dispatch(userSlice.actions.setToken(sessionStorage.getItem('jwt')))
    }
    if (token !== '') {
      UserCall(token).then((response) => {
        handleError(response)
        handleSuccess(response)
      })
    }
    function handleError(response) {
      if (
        response.status === 400 ||
        response.status === 401 ||
        response.status === 500
      ) {
        localStorage.clear()
        sessionStorage.clear()
        store.dispatch(userSlice.actions.setToken(''))
        store.dispatch(appSlice.actions.logging(false))
      }
    }
    function handleSuccess(response) {
      if (response.status === 200) {
        store.dispatch(appSlice.actions.logging(true))
        store.dispatch(userSlice.actions.setFirstName(response.body.firstName))
        store.dispatch(userSlice.actions.setLastName(response.body.lastName))
      }
    }
  }, [firstName, token])

  function handleLogout() {
    localStorage.clear()
    sessionStorage.clear()
    store.dispatch(appSlice.actions.logging(false))
    store.dispatch(userSlice.actions.setToken(''))
  }

  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {isLogged ? (
          <div>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </Link>
            <Link
              className="main-nav-item"
              onClick={handleLogout}
              reloadDocument
              to="/"
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          <div>
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}
