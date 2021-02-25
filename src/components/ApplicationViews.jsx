import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"

export const ApplicationViews = () => {
 return (
  <>
   {/* Render the location list when http://localhost:3000/ */}
   <Route exact path="/">
    <Home />
   </Route>

   {/* Render the animal list when http://localhost:3000/locations */}
   <Route path="/locations">
    <LocationList />
   </Route>

   {/* Render the animal list when http://localhost:3000/animals */}
   <Route path="/animals">
    <AnimalList />
   </Route>

   {/* Render the animal list when http://localhost:3000/customers */}
   <Route path="/customers">
    <CustomerList />
   </Route>

   {/* Render the animal list when http://localhost:3000/employees */}
   <Route path="/employees">
    <EmployeeList />
   </Route>

  </>
 )
} // ApplicationViews