import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"

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
   {/* Need to wrap Animal.Provider */}
   {/*
    Note that the <AnimalList> component is a child of the <AnimalProvider> component.
    It is crucial that you wrap components that need data with the provider component 
    that exposes that data in JSX. You can wrap a component in as many providers as needed.
   */}
   
   <AnimalProvider>
    <Route path="/animals">
     <AnimalList />
    </Route>
   </AnimalProvider>

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