import React, { useState } from 'react'
import '../styles/EmployeeList.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { FilterMatchMode } from 'primereact/api'
import { useSelector } from 'react-redux'

export function EmployeeList() {
  const { employees } = useSelector((state) => state.app)
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  })
  const [globalFilterValue, setGlobalFilterValue] = useState('')

  const onGlobalFilterChange = (e) => {
    const value = e.target.value
    let _filters = { ...filters }

    _filters['global'].value = value

    setFilters(_filters)
    setGlobalFilterValue(value)
  }

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Search"
          />
        </span>
      </div>
    )
  }

  const header = renderHeader()

  return (
    <>
      <main>
        <div id="employee-div" className="container">
          <h1>Current Employees</h1>
          <a href="/">Home</a>
          <DataTable
            value={employees}
            size="small"
            tableStyle={{ minWidth: '50rem' }}
            removableSort
            header={header}
            emptyMessage="No employees found."
            filters={filters}
            paginator
            rows={10}
            rowsPerPageOptions={[10, 25, 50, 100]}
          >
            <Column field="firstName" sortable header="First Name"></Column>
            <Column field="lastName" sortable header="Last Name"></Column>
            <Column field="startDate" sortable header="Start Date"></Column>
            <Column field="department" sortable header="Department"></Column>
            <Column
              field="dateOfBirth"
              sortable
              header="Date of Birth"
            ></Column>
            <Column field="street" sortable header="Street"></Column>
            <Column field="city" sortable header="City"></Column>
            <Column field="state" sortable header="State"></Column>
            <Column field="zipCode" sortable header="Zip Code"></Column>
          </DataTable>
        </div>
      </main>
    </>
  )
}
