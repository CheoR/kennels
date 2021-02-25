import React from "react"
import { Location } from "./Location"


const locations = [
 {
  id: 1,
  address1: "123 W Fake St",
  address2: "Nashville, TN"
 },
  {
   id: 2,
  address1: "456 Also Fake Rd.",
  address2: "Nashville, GA"
 },
  {
   id: 3,
  address1: "789 Fake Way",
  address2: "Nashville, MS"
 },
  {
   id: 4,
  address1: "1234 Fake Blvd",
  address2: "Nashville, TN"
 },
  {
   id: 5,
  address1: "5678 Fake Ct",
  address2: "Nashville, TN"
 },
 {
  id: 6,
  address1: "123 E Fake St",
  address2: "Nashville, TN"
 }
]

export const LocationList = () => ( 
 <>
  <h2>Locations</h2>
  <article className="locations">
   {
    locations.map(( location ) => <Location key={ location.id } address1={ location.address1 } address2={ location.address2 }/>)
   }
  </article>
 </>
) // LocationList
