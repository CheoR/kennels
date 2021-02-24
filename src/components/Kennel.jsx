import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import { Employee } from "./employee/Employee"
import { Location } from "./location/Location"
import { Customer } from "./customer/Customer"

import "./Kennel.css"

const dogs = [
 {
  id: 1,
  name: "Peggy",
  breed: "Pug"
 },
  {
   id: 2,
  name: "Snippet",
  breed: "Daschund"
 },
  {
   id: 3,
  name: "Burrito",
  breed: "Bulldog"
 },
  {
   id: 4,
  name: "Bark",
  breed: "Golden Retriever"
 },
  {
   id: 5,
  name: "Gif",
  breed: "Labador"
 },
 {
  id: 6,
  name: "Bixo do Coco",
  breed: "Chihuahua"
 }
]

const employees = [
 {
  id: 1,
  name: "Peggy",
  job: "Professional Dog Snuggles"
 },
  {
   id: 2,
  name: "Cat Lady",
  job: "Picks up cat poop"
 },
  {
   id: 3,
  name: "Mage",
  job: "Eats poop"
 },
  {
   id: 4,
  name: "Hobo Jack",
  job: "Doesn't actually work here, just hangs out here."
 },
  {
   id: 5,
  name: "Drifter Jeff",
  job: "Hobo Jack's friend"
 },
 {
  id: 6,
  name: "Charlie",
  job: "Horse without a liver."
 }
]


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


export const Kennel = () => (
 <>
  <h2>Nashville Kennels</h2>
  <small>Loving care when you're not there.</small>

  <address>
   <div>Visit Us at the Nashville North Location</div>
   <div>500 Puppy Way</div>
  </address>

  <h2>Animals</h2>
   <article className="animals">
    {
     dogs.map(( dog ) => <AnimalCard key={ dog.id } name={ dog.name} breed={ dog.breed }/>)
    }
  </article>

   <h2>Employees</h2>
   <article className="employees">
    {
     employees.map(( employee ) => <Employee key={ employee.id } name={ employee.name} job={ employee.job }/>)
    }
  </article>

   <h2>Locations</h2>
   <article className="locations">
    {
     locations.map(( location ) => <Location key={ location.id } address1={ location.address1 } address2={ location.address2 }/>)
    }
  </article>

   <h2>Customers</h2>
   <article className="customers">
    {
     customers.map(( customer ) => <Customer key={ customer.id }  name={ customer.name } opinion={ customer.opinion }/>)
    }
  </article>
 </>
)

