import React from 'react'
import { UserPage } from '../components/UserPage'

export function User() {
  if (!localStorage.getItem('jwt') && !sessionStorage.getItem('jwt')) {
    window.location.href = '/'
  } else {
    return (
      <>
        <UserPage />
      </>
    )
  }
}
