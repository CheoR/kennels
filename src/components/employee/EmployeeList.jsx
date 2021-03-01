import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"


export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)

  const history = useHistory()

  useEffect(() => {
    getEmployees()
  }, []) // useEffect

  return (
  <>
    <h2>Employees</h2>
    <button className="form-btn" onClick={() => { history.push("/employees/create") }}>
      Add Employee
    </button>
    <article className="employees">
      {
      employees.map(employee => <Employee key={ employee.id } employee={ employee } />)
      }
    </article>
  </>
  )
} // EmployeeList
