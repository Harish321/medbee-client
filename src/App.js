/*eslint semi: ["error", "never"]*/

import axios from "axios"
import React, { Component } from "react"
import Form from "react-jsonschema-form"
import './App.css'
const baseurl = "http://localhost:3003/form/"
// Import a few CodeMirror themes; these are used to match alternative

const log = type => console.log.bind(console, type)


function App(props){
  async function submitForm(formData,schema){
    await axios.post(baseurl+formData.formType,formData)
    schema.readonly = true
  }
  const style = {
          root: {
            "marginLeft" : 300
          }
        }
  const { schema, uiSchema, formData, validate } = props.formData
  return (
          <div className="container-fluid" style={style.root}>
            <div>
              {(
                <Form
                  // ArrayFieldTemplate={ArrayFieldTemplate}
                  // ObjectFieldTemplate={ObjectFieldTemplate}
                  // liveValidate={liveSettings.validate}
                  // disabled={liveSettings.disable}
                  schema={schema}
                  uiSchema={uiSchema}
                  formData={formData}
                  // onChange={this.onFormDataChange}
                  onSubmit={({ formData,schema }) =>
                    submitForm(formData,schema) 
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
            </div>
          </div>
        )
}


export default App
