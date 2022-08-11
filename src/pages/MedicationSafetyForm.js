export default {
  schema: {
    title: "Medication Saftey",
    type: "object",
    properties: {
      "enteredBy": {
        "type": "string",
        "title": "Entered By"
      },
      "facility": {
        "type": "string",
        "title": "Facility"
      },
      "departmentsInvolved": {
        "type": "string",
        "title": "Departments Involved in Med Error"
      },
      "eventNo": {
        "type": "string",
        "title": "Event No"
      },
      "eventDate": {
        "type": "string",
        "title": "Event Date"
      },
      "locationReportingMedError": {
        "type": "string",
        "title": "Location Reporting Med Error"
      },
      "time": {
        "type": "string",
        "title": "Time"
      },
      "room": {
        "type": "string",
        "title": "Room"
      },
      "shift": {
        "type": "string",
        "title": "Shift"
      },
      processes: { type: 'string', title: 'processes' },
      safteyProcesses: { type: 'string', title: 'saftey Processes' },
      signigicance: { type: 'string', title: 'signigicance' },

      "physNotified": {
        "type": "string",
        "title": "Physician Notified"
      },
      "notifiedPhysician": {
        "type": "string",
        "title": "Notified Physician"
      },
      errorDetectedTime: { type: 'string', title: 'When was Error Detected' },
      drugRoute: { type: 'string', title: 'Drug Route' },
      listOfDrugs: { type: 'string', title: 'Please list name of Drug' },
      actionTaken: { type: 'string', title: 'Immediate Action Taken' },
      "employeeWitnesses": {
        "type": "string",
        "title": "Employee Witnesses"
      },
      "physicianWitnesses": {
        "type": "string",
        "title": "Physician Witnesses"
      },
      "otherWitnesses": {
        "type": "string",
        "title": "Other Witnesses"
      },
      "comments": {
        "type": "string",
        "title": "Comments"
      }
    },
  },
  uiSchema: {
    // languages: {
    //   "ui:widget": "select",
    // },
    // firstName: {
    //   "ui:autofocus": true,
    //   "ui:emptyValue": "",
    // },
    // age: {
    //   "ui:widget": "updown",
    //   "ui:title": "Age of person",
    //   "ui:description": "(earthian year)",
    // },
    // bio: {
    //   "ui:widget": "textarea",
    // },
    // password: {
    //   "ui:widget": "password",
    //   "ui:help": "Hint: Make it strong!",
    // },
    // date: {
    //   "ui:widget": "alt-datetime",
    // },
    // telephone: {
    //   "ui:options": {
    //     inputType: "tel",
    //   },
    // },
  },
  formData: {
  },
};
