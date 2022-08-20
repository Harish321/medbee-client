export default {
  schema: {
    title: "Indicatiors For Surgical Services",
    type: "object",
    required: [
      "facility",
      "eventNo",
      "eventDate",
      "eventType",
      "locationOfEvent"
    ],
    properties: {
      "enteredBy": {
        "type": "string",
        "title": "Entered By"
      },
      "departmentsInvolved": {
        "type": "string",
        "title": "Departments Involved Surgical"
      },
      "eventDate": {
        "type": "string",
        "title": "Event Date",
        "format": "date"
      },
      "eventNo": {
        "type": "string",
        "title": "Event No"
      },
      "facility": {
        "type": "string",
        "title": "Facility"
      },
      "shift": {
        "type": "string",
        "title": "Shift"
      },
      "time": {
        "type": "string",
        "title": "Time"
      },
      "locationOfEvent": {
        "type": "string",
        "title": "Location Of Event"
      },
      "room": {
        "type": "string",
        "title": "Room"
      },
      eventType: {
        type: 'string', title: 'Event Type',
        enum: [
          "Equipment Issues",
          "Inappropriate Behavior Communication",
          "Incorrect Counts",
          "Instrument Problems",
          "Or Discharge Delay",
          "Pre Op",
          "Post Op",
          "Registration",
          "Specimen Error",
          "Surgery Cancelled",
          "Universal Protocol Not Followed"
        ]
      },
      parameters: {
        type: 'string', title: 'Parameters', enum: [
          "Equipment Cpm Unavailable Instrument Problems Insulscan Failed",
          "Equipment Malfunctioned Instrument Problems Had To Borrow",
          "Equipment Missing Instrument Problems Broken",
          "Equipment Not Available Instrument Problems Vendor",
          "Equipment Pca Unavailable Instrument Problems Missing",
          "Equipment Shortage Post Op Pyxis Stock Depleted",
          "Equipment Thyroid Trays Unavailable Post Op No Notification Of Isolation Precautions"
        ]
      },
      delayTime: { type: 'string', title: 'If delayed, enter delay time in minutes' },
      complications: { type: 'string', title: 'Unexcpected Outcomes/Complications' },
      comments: { type: 'string', title: 'Comments' }
    },
  },
  uiSchema: {
    complications: { 
      "ui:widget": "textarea",
      "ui:placeholder": "Complications"
    },
    comments: { 
      "ui:widget": "textarea",
      "ui:placeholder": "Comments"
    },
    "enteredBy": {
      "ui:placeholder": "Entered by"
    },
    "departmentsInvolved": {
      "ui:placeholder": "Departments involved"
    },
    "eventDate": {
    },
    "eventNo": {
      "ui:placeholder": "Event number"
    },
    "facility": {
      "ui:placeholder": "Facility"
    },
    "shift": {
      "ui:placeholder": "Shift"
    },
    "time": {
      "ui:placeholder": "Time"
    },
    "locationOfEvent": {
      "ui:placeholder": "Location"
    },
    "room": {
      "ui:placeholder": "Room"
    },
    eventType: {
      "ui:placeholder": "Choose an option"
    },
    parameters: {
      "ui:placeholder": "Choose an option"
    },
    delayTime: {
      "ui:placeholder": "Delay time"
    },
  },
  formData: {
    formType: "Surgical"
  },
};
