export default {
  schema: {
    title: "Indicatiors For Surgical Services",
    type: "object",
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
        "title": "Event Date"
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
      eventType: { type: 'string', title: 'Event Type' },
      parameters: { type: 'string', title: 'Parameters' },
      delayTime: { type: 'string', title: 'If delay, enter delay time in minutes' },
      complications: { type: 'string', title: 'Unexcpected Outcomes/Complications' },
      comments: { type: 'string', title: 'Comments' }
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
