/*
    {
      "id": 1,
      "name": "Peggy",
      "job": "Professional Dog Snuggles",
      "locationId": 1
    }

Create an EmployeeForm component.
Create a route in ApplicationViews for /employees/create that renders an EmployeeForm.
Add a button to the employee list labeled, "New Employee".
When the button is clicked, show the employee form by using history.push() to change the route.
The employee form should include an input for the name and a dropdown for the location.
On Save, create a new employee object and POST it to the API.
 The employee object should include the locationId as a foreign key.
Once the employee is saved, re-route the user to the list of employees.
*/

import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeForm = () => {
  console.log("am in formlist")

  const { employees, getEmployees, addEmployee } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  /*
  No need to target DOM, React rerenders on its own when state/props is updated.
  Use useState() to define initial state for form inputs.
 */
  const [employee, setEmployee] = useState({
    name: "",
    job: "",
    locationId: 0
  }) // useState

  const history = useHistory()

  useEffect(() => {
    getEmployees().then(getLocations)
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
  const newEmployee = { ...employee }
  let selectedVal = event.target.value

  if(event.target.id.includes("Id")) selectedVal = parseInt(selectedVal)

  /*
   Employee - object with properties.
   Set the property to the new value.
  */
 newEmployee[event.target.id] = selectedVal

 // update state
 setEmployee(newEmployee)
} // handleControlledInputChange

const handleClickSaveEmployee = ( event ) => {
  event.preventDefault()

  const locationId = employee.locationId

  if(!locationId) {
    window.alert("Please select a location")
  } else {
   /*
    Invoke addEmployee passing updated employee as an argument.
    After adding, change the url and display the updated employee list.
   */

   addEmployee(employee)
    .then(() => history.push("/employees")) // addEmployee
  }
} // handleClickSaveEmployee

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee name</label>
          <input 
          type="text" 
          id="name" 
          className="form-control"
          onChange={ handleControlledInputChange }
          required="required" 
          autoFocus="autoFocus" 
          placeholder="Employee name" 
          value={ employee.name }/>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="job">Employee job</label>
          <input 
          type="text" 
          id="job" 
          className="form-control"
          onChange={ handleControlledInputChange }
          required="required" 
          autoFocus="autoFocus" 
          placeholder="Employee job" 
          value={ employee.job }/>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="" htmlFor="locationId">Location: </label>
          <select 
            name="locationId" 
            id="locationId" 
            className="form-control" 
            defaultValue="employee.locationId"
            onChange={ handleControlledInputChange }>
              <option value="0">Select location</option>
              {locations.map(loc=> (
                <option value={ loc.id } key={ loc.id }>
                  { loc.name }
                </option>
              ))} 
          </select>
        </div>
      </fieldset>

      <button 
        className="btn btn-primary" 
        onClick={ handleClickSaveEmployee }>
          Save Empployee
      </button>
    </form>
  ) // return
} // EmployeeForm
