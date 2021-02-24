import React from "react"
import "./Customer.css"


export const Customer = ({ name, opinion }) => (
 <section className="customer">
  <h3 className="customer__name">{ name }</h3>
  <div className="customer__opinion">{ opinion }</div>
 </section>
)
