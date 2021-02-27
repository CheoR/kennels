import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"

export const ApplicationViews = () => {
 return (
  <>
   {/* Render the location list when http://localhost:3000/ */}
   <Route exact path="/">
    <Home />
   </Route>

   {/* Render the animal list when http://localhost:3000/locations */}
   <LocationProvider>
    <Route path="/locations">
     <LocationList />
    </Route>
   </LocationProvider>

   {/* Render the animal list when http://localhost:3000/animals */}
   {/* Need to wrap Animal.Provider */}
   {/*
    Note that the <AnimalList> component is a child of the <AnimalProvider> component.
    It is crucial that you wrap components that need data with the provider component 
    that exposes that data in JSX. You can wrap a component in as many providers as needed.
   */}
   
   {/* <AnimalProvider>
    <Route path="/animals">
     <AnimalList />
    </Route>   
   </AnimalProvider> */}
     <AnimalProvider><LocationProvider><CustomerProvider>
    <Route exact path="/animals">
     <AnimalList />
    </Route>   
   </CustomerProvider></LocationProvider></AnimalProvider>

   {/* Allow acesss to multiple data providers */}
   {/* <AnimalProvider><LocationProvider><CustomerProvider>
    <Route exact path="/animals/create">
     <AnimalForm />
    </Route>   
   </CustomerProvider></LocationProvider></AnimalProvider> */}


   {/* Render the animal list when http://localhost:3000/customers */}
   <CustomerProvider>
    <Route path="/customers">
     <CustomerList />
    </Route>
   </CustomerProvider>

   {/* Render the animal list when http://localhost:3000/employees */}
   <EmployeeProvider>
    <Route path="/employees">
     <EmployeeList />
    </Route>
   </EmployeeProvider>

  </>
 )
} // ApplicationViews