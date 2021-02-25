import React from "react"
import { Employee } from "./Employee"


const employees = [
 {
  id: 1,
  name: "Peggy",
  job: "Professional Dog Snuggles"
 },
  {
   id: 2,
  name: "Cat Lady",
  job: "Picks up cat poop"
 },
  {
   id: 3,
  name: "Mage",
  job: "Eats poop"
 },
  {
   id: 4,
  name: "Hobo Jack",
  job: "Doesn't actually work here, just hangs out here."
 },
  {
   id: 5,
  name: "Drifter Jeff",
  job: "Hobo Jack's friend"
 },
 {
  id: 6,
  name: "Charlie",
  job: "Horse without a liver."
 }
]

export const EmployeeList = () => (
 <>
   <h2>Employees</h2>
   <article className="employees">
    {
     employees.map(( employee ) => <Employee key={ employee.id } name={ employee.name} job={ employee.job }/>)
    }
  </article>

 </>
) // EmployeeList