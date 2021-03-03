import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"


export const EmployeeDetail = () => {
 
 const { getEmployeeById } = useContext(EmployeeContext)
 const [employee, setEmployee] = useState({})

 const { employeeId } = useParams()
 const history = useHistory()

 useEffect(() => {
  console.log(`useEffect - employee: ${ employeeId }`)
  getEmployeeById(employeeId)
   .then(res => setEmployee(res))
 }, []) // useEffect

 debugger
 return (
  <section className="detail">
     <div className="employee__job">{ employee.job }</div>
     <div className="employee__location"> name - { employee.location?.name }</div>
     <div className="employee__location"> taco - { employee.location?.taco }</div>
  </section>
 ) // return
} // EmployeeDetail
