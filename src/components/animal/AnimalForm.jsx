import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"


export const AnimalForm = () => {
 /*
  Create/update animal object through user interaction with the fields in the form.
  Every time the user updates a field, the state of the animal object is updated. In
  particular, the state of the field that the user interacts with is updated.
 */

 const { addAnimal, getAnimalById, updateAnimal } = useContext(AnimalContext)
 const { locations, getLocations } = useContext(LocationContext)
 const { customers, getCustomers } = useContext(CustomerContext)

  /*
  No need to target DOM, React rerenders on its own when state/props is updated.
  Use useState() to define initial state for form inputs.
  If you wanted the form to initially start with empty fields, the argument for useState
  would be something like:
  {
    name: "",
    breed: "",
    locationId: 0,
    customerId: 0
  }

  No need to do here since field information will be populated from the animal object.
  for edit, hold on to state of animal in this view
 */
  const [animal, setAnimal] = useState({
    name: "",
    breed: "",
    customerId: 0,
    locationId: 0
  }) // useState

 // wait for data before button is active
 // Look at the button to see how it's setting itself to disabled or not based on this state
 const [isLoading, setIsLoading] = useState(true)

 const { animalId } = useParams()
 const history = useHistory()

 /*
  Update state when field changes.
  Updating state causes a re-render and updates the view.
  Controlled Component: when react is is charge of state for items that would normally
  be in charge of their own state: 
  <input>
  <textArea>
  <select>
 */
const handleControlledInputChange = ( event ) => {
  /*
    Make copy of current state.
    Modify.
    Call update state on new copy.
  */
  const newAnimal =  { ...animal }

  /*
    Shorthand for updating the property that the user changed through
    the input field for that property.
    e.g. User updates animal adddress, updated object would be
    newAddress["address"] = "new address"
  */
 newAnimal[event.target.id] = event.target.value
 setAnimal(newAnimal)
} // handleControlledInputChange


  const handleSaveAnimal = () => {

    console.log("==============")
    console.log(parseInt(animal.locationId))
    console.log(parseInt(animal.customerId))
    console.log(animal)
    console.log("==============")

    if(0) { // !(animal.locationId || animal.customerId)) {
      window.alert("Please select a location and a customer")
    } else {
      /*
        Disable button - no extra clicks.
        See form below for use.
      */
     setIsLoading(true)

     /*
      If animalId is valid, then url must be

      /animals/edit/:animalId(\d+)

      Indicating it is an edit and not a new animal.
     */
     if(animalId) {
       /*
        PUT - update exisiting object
       */

      updateAnimal({
        id: animal.id,
        name: animal.name,
        breed: animal.breed,
        locationId: parseInt(animal.locationId),
        customerId: parseInt(animal.customerId)
      })
      .then(() => history.push(`/animals/detail/${animal.id}`)) // updateAnimal
     } else {
      //POST - add
      console.log("there is no animal id")
      console.log("animal")
      console.log(animal)
      debugger
      addAnimal({
        name: animal.name,
        breed: animal.breed,
        locationId: parseInt(animal.locationId),
        customerId: parseInt(animal.customerId)
      })
      .then(() => history.push("/animals")) // Add Animal
     } // if
    } // if
  } // handleSaveAnimal


  /*
    Get customers and locations.
    If animalId is in the URL, then it's an edit and will also need
    getAnimalById
  */
  useEffect(() => {
    getCustomers().then(getLocations).then(() => {
      if(animalId) {
        getAnimalById(animalId)
          .then(animal => {
            setAnimal(animal)
            setIsLoading(false)
          })
      } else {
        setIsLoading(false)
      }
    }) // getCustomers
  }, []) // useEffect

return (
  <form className="animalForm">
    <h2 className="animalForm__title">{animalId ? "Edit Animal" : "Add Animal"}</h2>
    <fieldset>
      <div className="form-group">
        <label htmlFor="name">Animal name: </label>
        <input type="text" id="name" required autoFocus className="form-control"
        placeholder="Animal name"
        onChange={handleControlledInputChange}
        value={animal.name}/>
      </div>
    </fieldset>
    <fieldset>
      <div className="form-group">
        <label htmlFor="breed">Animal breed:</label>
        <input type="text" id="breed" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed}/>
      </div>
    </fieldset>
    <fieldset>
      <div className="form-group">
        <label htmlFor="locationId">Assign to location: </label>
        <select value={animal.locationId} id="locationId" className="form-control" onChange={handleControlledInputChange}>
          <option value="0">Select a location</option>
            {locations.map(location => (
              <option key={location.id} value={location.id}>
              {location.name}
          </option>
          ))}
        </select>
      </div>
    </fieldset>
    <fieldset>
      <div className="form-group">
        <label htmlFor="customerId">Customer: </label>
        <select value={animal.customerId} id="customerId" className="form-control" onChange={handleControlledInputChange}>
          <option value="0">Select a customer</option>
            {customers.map(customer => (
              <option key={customer.id} value={customer.id}>
              {customer.name}
          </option>
          ))}
        </select>
      </div>
    </fieldset>
    <button className="btn btn-primary"
      disabled={isLoading}
      onClick={event => {
        event.preventDefault() // Prevent browser from submitting the form and refreshing the page
      handleSaveAnimal()
      }}>
      {animalId ? "Save Animal" : "Add Animal"}
    </button>
  </form>
  ) // return
} // AnimalForm
