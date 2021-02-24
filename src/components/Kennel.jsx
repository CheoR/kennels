import React from "react"
// import "./Keennel.css"

const data = {
 header: "Nashville Kennel",
 small: "Loving care when you're not there",
 address1: "Visit us at the Nashville North Location",
 address2: "500 Puppy Way"
}

const DataTag = () => (
 <>
  <h2>{ data.header }</h2>
  <small>{ data.small }</small>
  <address>
   <div>{ data.address1 }</div>
   <div>{ data.address2 }</div>
  </address>
 </>
)

export const Kennel = () => <DataTag />
