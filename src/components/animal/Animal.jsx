import React from "react"
import { Link } from "react-router-dom"
import "./Animal.css"

export const Animal = ({ animal, customer, clinic }) => (
 <section className="animal">
  <h3 className="animal__name">
   <Link to={`/animals/detail/${animal.id}`}>
    { animal.name }
   </Link>
  </h3>
  <div className="animal__breed">{ animal.breed }</div>
  <address className="location__address">{ clinic.address }</address>
 </section>
)

{/*<div className="animal__owner">{ customer.name }</div>
<address className="location__address">{ animal.location.name }</address> */}