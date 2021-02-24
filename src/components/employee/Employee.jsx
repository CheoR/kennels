import React from "react"
import "./Employee.css"


export const Employee = ({ name, job }) => (
 <section className="employee">
  <h3 className="employee__name">{ name }</h3>
  <div className="employee__job">{ job }</div>
 </section>
)
