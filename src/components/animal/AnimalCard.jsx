import React from "react"
import "./Animal.css"

export const AnimalCard = ( { name, breed }) => (
 <section className="animal">
  <h3 className="animal__name">{ name }</h3>
  <div className="animal__breed">{ breed }</div>
 </section>
)
