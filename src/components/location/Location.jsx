import React from "react"
import "./Location.css"


export const Location = ({ address1, address2 }) => (
 <section className="location">
  <h3 className="location__address1">{ address1 }</h3>
  <div className="location_address2">{ address2 }</div>
 </section>
)
