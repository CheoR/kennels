import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"

/*
  {
    "id": 1,
    "name": "Nashville North",
    "address": "8422 E Johnson Pike"
  }
*/
export const LocationForm = () => {
 const { locations, getLocations, addLocation } = useContext(LocationContext)

 /*
  No need to target DOM, React rerenders on its own when state/props is updated.
  Use useState() to define initial state for form inputs.
 */
const [location, setLocation] = useState({
 name: "",
 address: ""
}) // useState

 const history = useHistory()

 useEffect(() => {
  getLocations()
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
  const newLocation = { ...location }
  let selectedVal = event.target.value

  console.log(event.target.id)
  console.log('activeted')
  if (event.target.id.includes("Id")) selectedVal = parseInt(selectedVal)

    /*
   Animal - object with properties.
   Set the property to the new value.
  */
  newLocation[event.target.id] = selectedVal

  setLocation(newLocation)

 } // handleControlledInputChange

 const handleClickSaveLocation = ( event ) => {

  event.preventDefault()

  const locationName = location.name
  const locationAddress = location.address


  if(!(locationName || locationAddress)) {
   window.alert("Please input location name and address")
  } else {
      /*
    Invoke addLocation passing updated location as an argument.
    After adding, change the url and display the updated location list.
   */
  addLocation(location)
   .then(() => history.push("/locations")) // addLcation
  }
 } // handleClickSaveAnimal

 return (
  <form className="locationForm">
   <h2 className="locationForm__title">New Location</h2>
   <fieldset className="form-group">
    <label htmlFor="name">Location:</label>
    <input 
    type="text" 
    id="name" 
    onChange={ handleControlledInputChange } 
    required="required" 
    autofocused="autofocused" 
    className="form-control" 
    placeholder="Location name"
    value={ location.name }/>
   </fieldset>

    <fieldset className="form-group">
     <label htmlFor="address">Address:</label>
     <input 
     type="text" 
     id="address" 
     onChange={ handleControlledInputChange } 
     required="required" 
     autofocused="autofocused" 
     className="form-control" 
     placeholder="Location address"
     value={ location.address }/>
   </fieldset>

    <button className="btn btn-primary"
     onClick={ handleClickSaveLocation }>
     Save Location
    </button>
  </form>
 ) // return

} // LocationForm