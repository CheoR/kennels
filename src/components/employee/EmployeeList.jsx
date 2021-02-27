import React, { useContext, useEffect } from "react"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"


export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    getEmployees()
  }, []) // useEffect

  return (
  <>
    <h2>Employees</h2>
    <article className="employees">
      {
      employees.map(employee => <Employee key={ employee.id } employee={ employee } />)
      }
    </article>
  </>
  )
} // EmployeeList
