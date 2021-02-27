import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { useHistory } from "react-router-dom"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below.
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  /*
    useHistory: hook that tells React route to visit.
    It has a push() method that can be used to change he URL.
    Here it will be used to tell React to render the animal form component.
  */
 const history = useHistory()


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
     <button className="form-btn" onClick={() => { history.push("/animals/create") }}>
       Add Animal
     </button>
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
