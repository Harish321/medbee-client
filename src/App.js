/*eslint semi: ["error", "never"]*/

import React, { Component } from "react"
import Form from "react-jsonschema-form"
import { shouldRender } from "./utils"
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

class App extends Component {
  constructor(props) {
    super(props)
    // initialize state with Simple data sample
    // const { schema, uiSchema, formData, validate } = samples.RiskForm
    // const { schema, uiSchema, formData, validate } = samples.IndicatorForSurgicalForm
    // const { schema, uiSchema, formData, validate } = samples.MedicationSafetyForm
    const { schema, uiSchema, formData, validate } = props.formData

    this.state = {
      form: false,
      schema,
      uiSchema,
      formData,
      validate,
      editor: "default",
      theme: "default",
      liveSettings: {
        validate: true,
        disable: false,
      },
      shareURL: null,
    }
  }

  componentDidMount() {
    const hash = document.location.hash.match(/#(.*)/)
    if (hash && typeof hash[1] === "string" && hash[1].length > 0) {
      try {
        this.load(JSON.parse(atob(hash[1])))
      } catch (err) {
        alert("Unable to load form setup data.")
      }
    } else {
      this.load(this.props.formData)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shouldRender(this, nextProps, nextState)
  }

  load = data => {
    // Reset the ArrayFieldTemplate whenever you load new data
    const { ArrayFieldTemplate, ObjectFieldTemplate } = data
    // force resetting form component instance
    this.setState({ form: false }, _ =>
      this.setState({
        ...data,
        form: true,
        ArrayFieldTemplate,
        ObjectFieldTemplate,
      })
    )
  }


  render() {
    const {
      schema,
      uiSchema,
      formData,
      liveSettings,
      validate,
      theme,
      editor,
      ArrayFieldTemplate,
      ObjectFieldTemplate,
      transformErrors,
    } = this.state

    const style = {
      root: {
        "marginLeft" : 100
      }
    }
    return (
      <div className="container-fluid" style={style.root}>
        <div className="col-sm-5">
          {this.state.form && (
            <Form
              ArrayFieldTemplate={ArrayFieldTemplate}
              ObjectFieldTemplate={ObjectFieldTemplate}
              liveValidate={liveSettings.validate}
              disabled={liveSettings.disable}
              schema={schema}
              uiSchema={uiSchema}
              formData={formData}
              onChange={this.onFormDataChange}
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
              transformErrors={transformErrors}
              onError={log("errors")}>
              <div className="row">
                <div className="col-sm-3">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
                <div className="col-sm-9 text-right">
                  <CopyLink
                    shareURL={this.state.shareURL}
                    onShare={this.onShare}
                  />
                </div>
              </div>
            </Form>
          )}
        </div>
      </div>
    )
  }
}


export default App
