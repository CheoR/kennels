import React from "react"
import "./Animal.css"

export const Animal = ({ animal, customer, clinic }) => (
 <section className="animal">
  <h3 className="animal__name">{ animal.name }</h3>
  <div className="animal__breed">{ animal.breed }</div>
  <div className="animal__owner">{ customer.name }</div>
  <address className="location__address">{ animal.location.name }</address>
  <address className="location__address">{ clinic.address }</address>
 </section>
)
