/*eslint semi: ["error", "never"]*/

import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import React, { Component, useState, useEffect } from "react"
import Form from "react-jsonschema-form"
import './App.css'
const baseurl = "http://192.168.0.190:3003/form/"
// Import a few CodeMirror themes; these are used to match alternative

const log = type => console.log.bind(console, type)


function App(props) {
  const [alert, setAlert] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    setAlert(false)
    return () => {
      console.log("cleaned up")
    }
  }, [props])
  async function submitForm(formData, schema) {
    formData.createdAt = new Date().toISOString()
    await axios.post(baseurl + formData.formType, formData)
    setAlert(true)
    // Alert.Actions
    //     .show('Fall Incident Captured Successfully.')
    //     .then(() => {
    //         //after ok
    //     })
    //     .catch(() => {
    //         //after cancel
    //     })
  }
  const style = {
    root: {
      "marginLeft": 300
    }
  }
  const { schema, uiSchema, formData, validate, readonly } = props.formData
  // setAlert(false)
  return (
      <div className="container-fluid" style={style.root}>
        { alert && <div>
            Successfully Submited
          </div>}
        {!alert && <div>
          {(
            <Form
              // ArrayFieldTemplate={ArrayFieldTemplate}
              // ObjectFieldTemplate={ObjectFieldTemplate}
              // liveValidate={liveSettings.validate}
              // disabled={readonly}
              schema={schema}
              uiSchema={uiSchema}
              formData={formData}
              // onChange={this.onFormDataChange}
              onSubmit={({ formData, schema }) =>
                submitForm(formData, schema)
              }
              validate={validate}
              onBlur={(id, value) =>
                console.log(`Touched ${id} with value ${value}`)
              }
              onFocus={(id, value) =>
                console.log(`Focused ${id} with value ${value}`)
              }
              // transformErrors={transformErrors}
              onError={log("errors")}>
              <div className="row pull-right" >
                <div className="col-sm-3">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
                {/* <div className="col-sm-9 text-right">
                      <CopyLink
                        shareURL={this.state.shareURL}
                        onShare={this.onShare}
                      />
                    </div> */}
              </div>
            </Form>
          )}
        </div>}
      </div>
  )

}


export default App
