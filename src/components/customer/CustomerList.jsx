import React from "react"
import { Customer } from "./Customer"


const customers = [
 {
  id: 1,
  name: "Customer 1",
  opinion: "Opinion 1"
 },
  {
   id: 2,
  name: "Customer 2",
  opinion: "Opinion 2"
 },
  {
   id: 3,
  name: "Customer 3",
  opinion: "Opinion 3"
 },
  {
   id: 4,
  name: "Customer 4",
  opinion: "Opinion 4"
 },
  {
   id: 5,
  name: "Customer 5",
  opinion: "Opinion 5"
 },
 {
  id: 6,
  name: "Customer 6",
  opinion: "Opinion 6"
 }
]

export const CustomerList = () => (
 <>
   <h2>Customers</h2>
   <article className="customers">
    {
     customers.map(( customer ) => <Customer key={ customer.id }  name={ customer.name } opinion={ customer.opinion }/>)
    }
  </article>
 </>
) // CustomerList
