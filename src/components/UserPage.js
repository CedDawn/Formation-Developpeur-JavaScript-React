import React from 'react'
import '../styles/UserPage.css'
import { ProfileCall } from '../services/ProfileService'
import { useSelector } from 'react-redux'
import { appSlice, userSlice, store } from '../store'

export function UserPage() {
  const { isEditing } = useSelector((state) => state.app)
  const { firstName, lastName, token } = useSelector((state) => state.user)

  function handleForm() {
    store.dispatch(appSlice.actions.editing())
  }

  function handleEdit() {
    const data = []
    const newFirstName = document.querySelector('#firstName').value
    const newLastName = document.querySelector('#lastName').value
    if (newFirstName === '' && newLastName === '') {
      handleForm()
    } else {
      if (newFirstName === '') {
        store.dispatch(userSlice.actions.setFirstName(firstName))
        data.push(firstName)
      } else {
        store.dispatch(userSlice.actions.setFirstName(newFirstName))
        data.push(newFirstName)
      }
      if (newLastName === '') {
        store.dispatch(userSlice.actions.setLastName(lastName))
        data.push(lastName)
      } else {
        console.log('good')
        store.dispatch(userSlice.actions.setLastName(newLastName))
        data.push(newLastName)
      }
      ProfileCall(token, data).then(() => {
        window.location.reload()
      })
    }
  }

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          {isEditing ? (
            <>
              <h1>
                Welcome back
                <form className="nameform">
                  <input type="text" id="firstName" placeholder={firstName} />
                  <input type="text" id="lastName" placeholder={lastName} />
                </form>
              </h1>
              <div>
                <button className="edit-button" onClick={handleEdit}>
                  Save
                </button>
                <button className="edit-button" onClick={handleForm}>
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h1>
                Welcome back
                <br />
                {firstName} {lastName}
              </h1>
              <button className="edit-button" onClick={handleForm}>
                Edit Name
              </button>
            </>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </>
  )
}
