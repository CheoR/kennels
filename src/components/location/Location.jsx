import React from "react"
import { Link } from "react-router-dom"
import "./Location.css"

/*
{
 "id": 2,
 "name": "Nashville South",
 "address": "209 W Emory Drive",
 "employees": [
  {
    "id": 3,
    "name": "Mage",
    "job": "Eats poop",
    "locationId": 2
  },
  {
    "id": 4,
    "name": "Hobo Jack",
    "job": "Doesn't actually work here, just hangs out here.",
    "locationId": 2
  },
  {
   "name": "Sunny",
   "job": "Ray Of Happiness",
   "locationId": 2,
   "id": 7
  }
 ],
 "animals": [
   {
    "id": 1,
    "name": "Peggy",
    "breed": "Pug",
    "customerId": 1,
    "locationId": 2
   },
   {
    "id": 6,
    "name": "Bixo do Coco",
    "breed": "Chihuahua",
    "customerId": 1,
    "locationId": 2
   }
 ]
}
*/

export const Location = ({ location }) => (
 <section className="location">
  <Link to={`/locations/detail/${location.id}`}>
    <h3 className="location__name">{ location.name }</h3>
   </Link>
  <div className="location__employees">Employees: { location.employees.length }</div>
  <div className="location__animals">Animals: { location.animals.length }</div>
 </section>
)
