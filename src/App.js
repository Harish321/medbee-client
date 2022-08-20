/*eslint semi: ["error", "never"]*/

import axios from "axios"
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react"
import Form from "react-jsonschema-form"
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled'
import { styled } from '@mui/material/styles'
import { autocompleteClasses } from '@mui/material/Autocomplete'
import { useParams } from "react-router-dom"
import store from './store'
import './App.css'
import { BASE_API_URI, FORM_API_URI } from "./Constants/Constants"
// Import a few CodeMirror themes; these are used to match alternative

const log = type => console.log.bind(console, type)

const Label = styled('label')({
})

const Input = styled('input')(({ theme }) => ({
}))

const Listbox = styled('ul')(({ theme }) => ({
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.background.paper,
  overflow: 'auto',
  maxHeight: 200,
  border: '1px solid rgba(0,0,0,.25)',
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
}))

const AutoCompleter2 = (props) => {
  const data = [
    {
        "label": "The Shawshank Redemption",
        "year": 1994,
        "value": "The Shawshank Redemption"
    },
    {
        "label": "The Godfather",
        "year": 1972,
        "value": "The Godfather"
    },
    {
        "label": "City of God",
        "year": 2002,
        "value": "City of God"
    },
    {
        "label": "Se7en",
        "year": 1995,
        "value": "Se7en"
    },
    {
        "label": "The Silence of the Lambs",
        "year": 1991,
        "value": "The Silence of the Lambs"
    },
    {
        "label": "It's a Wonderful Life",
        "year": 1946,
        "value": "It's a Wonderful Life"
    },
    {
        "label": "Life Is Beautiful",
        "year": 1997,
        "value": "Life Is Beautiful"
    },
    {
        "label": "The Usual Suspects",
        "year": 1995,
        "value": "The Usual Suspects"
    },
    {
        "label": "Léon: The Professional",
        "year": 1994,
        "value": "Léon: The Professional"
    },
    {
        "label": "Spirited Away",
        "year": 2001,
        "value": "Spirited Away"
    },
    {
        "label": "Saving Private Ryan",
        "year": 1998,
        "value": "Saving Private Ryan"
    },
    {
        "label": "Once Upon a Time in the West",
        "year": 1968,
        "value": "Once Upon a Time in the West"
    },
    {
        "label": "American History X",
        "year": 1998,
        "value": "American History X"
    },
    {
        "label": "Interstellar",
        "year": 2014,
        "value": "Interstellar"
    }
]
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: data,
    isOptionEqualToValue:(o,value)=>{
      return true
    },
    getOptionLabel: (option) => option.label,
  })

  return (
    <React.Fragment>
      <Label className="control-label"  {...getInputLabelProps()}>{props.schema.title}</Label>
      <div style={{ width: '100%' }}>
        <Input className="form-control" style={{ width: '100%' }}  onChangeCapture={(event) => console.log(event)} {...getInputProps()}  />
        {groupedOptions.length > 0 ? (
          <Listbox style={{width:'30%',marginLeft:'5px',marginTop:'3px'}}{...getListboxProps()}>
            {(groupedOptions).map((option, index) => (
              <li onClickCapture={(event)=> props.onChange(event.target.innerText)} style={{padding:'4px'}} {...getOptionProps({ option, index })}>{option.label}</li>
            ))}
          </Listbox>
        ) : null}
      </div>
    </React.Fragment>
  )
}

const fields = {
  autoCompleter2: AutoCompleter2
}


function App(props) {
  const [alert, setAlert] = useState(false)
  const navigate = useNavigate()
  let { id } = useParams()
  const { schema, uiSchema, formData, validate, readonly } = props.formData
  const [savedFormData, setSavedFormData] = useState({})

  let commonStore = store.getState().commonStore
  store.subscribe(function(){
    commonStore = store.getState().commonStore
  })

  const style = {
    root: {
      paddingBottom: "2px"
    }
  }
  
  // useEffect(() => {
  //   if(id){
  //     setSavedFormData(commonStore.allIncidentList.find((incident) => 
  //       formData.formType == incident.formType && id == incident.id.substr(3,incident.id.length)
  //     ))
  //   }
  // }, [])

  useEffect(() => {
    if(id){
      setSavedFormData(commonStore.allIncidentList.find((incident) => 
        formData.formType == incident.formType && id == incident.id.substr(3,incident.id.length)
      ))
    }
    setAlert(false)
    return () => {
      id = null
      setSavedFormData({})
      console.log("cleaned up")
    }
  }, [props])
  
  async function submitForm(formData, schema) {
    formData.createdAt = new Date().toISOString()
    await axios.post(BASE_API_URI + FORM_API_URI + formData.formType, formData)
    setAlert(true)
  }
  
  return (
    <div className="container-fluid" style={style.root}>
      {alert && <div className="success-message">
        Successfully reported the incident, please visit Dashboard.
      </div>}
      {!alert && <div>
        {(
          <Form
            schema={schema}
            uiSchema={uiSchema}
            formData={{...formData, ...savedFormData}}
            fields={fields}
            onSubmit={({ formData, schema }) =>
              submitForm(formData, schema)
            }
            validate={validate}
            onError={log("errors")}>
            <div className="row pull-right" style={{marginRight:"120px"}}>
              <div className="col-sm-3">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </div>}
    </div>
  )

}


export default App
