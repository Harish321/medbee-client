export default {
  schema: {
    title: "Variance Saftey",
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
      "departmentReportingVariance": {
          "type": "string",
          "title": "Department Reporting Variance"
      },
      "departmentsInvolved": {
          "type": "string",
          "title": "Departments Involved Variance"
      },
      "eventNo": {
          "type": "string",
          "title": "Event No"
      },
      "eventDate": {
          "type": "string",
          "title": "Event Date"
      },
      "locationOfEvent": {
          "type": "string",
          "title": "Location Of Event"
      },
      "room": {
          "type": "string",
          "title": "Room"
      },
      "time": {
          "type": "string",
          "title": "Time"
      },
      "shift": {
          "type": "string",
          "title": "Shift"
      },
      eventType: { type: 'string', title: 'Event Type' },
      eventParameters: { type: 'string', title: 'Event Parameters' },
      "physNotified": {
          "type": "string",
          "title": "Physician Notified"
      },
      "actionTaken": {
          "type": "string",
          "title": "Variance Immediate Action Taken"
      },
      "notifiedPerson": {
          "type": "string",
          "title": "Please provide name/relationship of person who was notified"
      },
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
          "title": "Abstract (Comments)"
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
