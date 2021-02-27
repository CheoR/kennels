import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below.
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  // useEffect - reach out to the world for something
  // Careful not to replace [] with getAnimals() - else infinite loop
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getLocations()
      .then(getCustomers)
      .then(getAnimals)
  }, []) // useEffect

  return (
    <>
     <h2>Animals</h2>
    <div className="animals">
      {
        /* <Animal /> is actually a function and the keys are properties, not HTML attributes. */
        animals.map(animal => {
          const customer = customers.find(c => c.id === animal.customerId)
          const clinic = locations.find(c => c.id === animal.locationId)

          return (<Animal key={ animal.id }
            animal={ animal }
            customer={ customer }
            clinic={ clinic }
          />)
        }) // animals.map
      }
    </div>
    </>
  ) // return
} // AnimalList
