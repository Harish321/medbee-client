/*eslint semi: ["error", "never"]*/

import React, { Component } from "react"
import Form from "react-jsonschema-form"
import './App.css'

// Import a few CodeMirror themes; these are used to match alternative

const log = type => console.log.bind(console, type)

class CopyLink extends Component {
  onCopyClick = event => {
    this.input.select()
    document.execCommand("copy")
  }

  render() {
    const { shareURL, onShare } = this.props
    if (!shareURL) {
      return (
        <button className="btn btn-default" type="button" onClick={onShare}>
          Share
        </button>
      )
    }
    return (
      <div className="input-group">
        <input
          type="text"
          ref={input => (this.input = input)}
          className="form-control"
          defaultValue={shareURL}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-default"
            type="button"
            onClick={this.onCopyClick}>
            <i className="glyphicon glyphicon-copy" />
          </button>
        </span>
      </div>
    )
  }
}
function App(props){

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
                  onSubmit={({ formData }) =>
                    console.log("submitted formData", formData)
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
