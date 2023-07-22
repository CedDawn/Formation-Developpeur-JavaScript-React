import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import states from '../datas/states'
import departments from '../datas/departments'
import '../styles/EmployeeForm.css'
import 'react-datepicker/dist/react-datepicker.css'
import { Modal, handleOpen } from 'simple-dawn-modal'
import { appSlice, store } from '../store'

export function EmployeeForm() {
  const [birthDate, setBirthDate] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const [actualState, setActualState] = useState('AL')
  const [actualDepartment, setActualDepartment] = useState('Sales')

  const statesOptions = []
  states.forEach((state) => {
    statesOptions.push({ value: state.abbreviation, label: state.name })
  })

  function saveEmployee() {
    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById('last-name')
    const street = document.getElementById('street')
    const city = document.getElementById('city')
    const zipCode = document.getElementById('zip-code')
    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: birthDate.toLocaleDateString(),
      startDate: startDate.toLocaleDateString(),
      department: actualDepartment,
      street: street.value,
      city: city.value,
      state: actualState,
      zipCode: zipCode.value,
    }
    store.dispatch(appSlice.actions.addEmployee(employee))
    handleOpen()
  }

  return (
    <>
      <main>
        <div className="container">
          <h3>Create Employee</h3>
          <Form action="#" id="create-employee">
            <Form.Label htmlFor="first-name">First Name</Form.Label>
            <Form.Control type="text" id="first-name" />

            <Form.Label htmlFor="last-name">Last Name</Form.Label>
            <Form.Control type="text" id="last-name" />

            <Form.Label htmlFor="date-of-birth">Date of Birth</Form.Label>
            <DatePicker
              selected={birthDate}
              onChange={(date) => setBirthDate(date)}
              className="form-control"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              id="date-of-birth"
            />

            <Form.Label htmlFor="start-date">Start Date</Form.Label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="form-control"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              id="start-date"
            />

            <fieldset className="address">
              <legend>Address</legend>
              <Form.Label htmlFor="street">Street</Form.Label>
              <Form.Control type="text" id="street" />
              <Form.Label htmlFor="city">City</Form.Label>
              <Form.Control type="text" id="city" />
              <Form.Label htmlFor="state">State</Form.Label>
              <Select
                options={statesOptions}
                defaultValue={statesOptions[0]}
                id="state"
                className="mb-4"
                isClearable={false}
                isSearchable={false}
                onChange={(choice) => setActualState(choice.value)}
              />
              <Form.Label htmlFor="zip-code">Zip Code</Form.Label>
              <Form.Control type="number" id="zip-code" />
            </fieldset>

            <Form.Label htmlFor="department">Department</Form.Label>
            <Select
              options={departments}
              defaultValue={departments[0]}
              id="department"
              className="mb-4"
              isClearable={false}
              isSearchable={false}
              onChange={(choice) => setActualDepartment(choice.value)}
            />
          </Form>
          <Button variant="primary" onClick={saveEmployee} className="mb-4">
            Save
          </Button>
        </div>
        <Modal content="Employee Created!" />
      </main>
    </>
  )
}
