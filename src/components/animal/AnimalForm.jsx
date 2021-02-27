import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"


export const AnimalForm = () => {
 /*
 Assign new animal a location and customer.
 */

 const { addAnimal } = useContext(AnimalContext)
 const { locations, getLocations } = useContext(LocationContext)
 const { customers, getCustomers } = useContext(CustomerContext)

 /*
  No need to target DOM, React rerenders on its own when state/props is updated.
  Use useState() to define initial state for form inputs.
 */
 const [animal, setAnimal] = useState({
  name: "",
  breed: "",
  locationId: 0,
  customerId: 0
 }) // useState

  const history = useHistory()

  /*
   External data for form dropdowns.
  */
 useEffect(() => {
  getCustomers().then(getLocations)
 }, []) // useEffect

 /*
  Update state when a field changes.
  The return will re-render and display based on the values in state
  Controlled component: when react controls when a form/input renders.
 */
 const handleControlledInputChange = ( event ) => {
   /*
    Do not change states directly.
    Copy your variable properties into a new variable,
    use setVariableName to update state.
   */
  const newAnimal = { ...animal }
  let selectedVal = event.target.value

  if (event.target.id.includes("Id")) selectedVal = parseInt(selectedVal)

  /*
   Animal - object with properties.
   Set the property to the new value.
  */
  newAnimal[event.target.id] = selectedVal

  // update state
  setAnimal(newAnimal)

 } // handleControlledInputChange

 const handleClickSaveAnimal = ( event ) => {
  event.preventDefault()

  const locationId = animal.locationId
  const customerId = animal.customerId

  // if(locationId === 0 || customerId === 0) {
  if(!(locationId || customerId)) {
   window.alert("Please select a location and a customer")
  } else {
   /*
    Invoke addAnimal passing updated animal as an argument.
    After adding, change the url and display the updated animal list.
   */
  addAnimal(animal)
  .then(() => history.push("/animals")) // addAnimal
  }
 } // handleClickSaveAnimal

 return (
   <form className="animalForm">
    <h2 className="animalForm__title">New Animal</h2>
    <fieldset>
     <div className="form-group">
      <label htmlFor="name">Animal name:</label>
      <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal name" value={animal.name}/>
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
      <select defaultValue={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
       <option value="0">Select a location</option>
        {locations.map(loc => (
         <option key={loc.id} value={loc.id}>
          {loc.name}
         </option>
       ))}
      </select>
     </div>
    </fieldset>
    <fieldset>
     <div className="form-group">
     <label htmlFor="customerId">Customer: </label>
     <select defaultValue={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
      <option value="0">Select a customer</option>
       {customers.map(c => (
      <option key={c.id} value={c.id}>
        {c.name}
        </option>
      ))}
     </select>
     </div>
    </fieldset>
    <button className="btn btn-primary"
     onClick={handleClickSaveAnimal}>
     Save Animal
    </button>
   </form>
 ) // return
} // AnimalForm
