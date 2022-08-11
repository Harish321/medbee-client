export default {
    schema: {
      title: "Fall Safety",
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
        "departmentReportingFall": {
            "type": "string",
            "title": "Department Reporting Fall"
        },
        "departmentsInvolved": {
            "type": "string",
            "title": "Departments Involved"
        },
        "eventNo": {
            "type": "string",
            "title": "Event No"
        },
        "eventDate": {
            "type": "string",
            "title": "Event Date"
        },
        "locationOfFall": {
            "type": "string",
            "title": "Location Of Fall"
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
        "typeOfFall": {
            "type": "string",
            "title": "Type Of Fall"
        },
        "contributingFactors": {
            "type": "string",
            "title": "Contributing Factors"
        },
        "typeOfInjury": {
            "type": "string",
            "title": "Type Of Injury"
        },
        "significance": {
            "type": "string",
            "title": "Significance"
        },
        "physNotified": {
            "type": "string",
            "title": "Physician Notified"
        },
        "notifiedPhysician": {
            "type": "string",
            "title": "Notified Physician"
        },
        "newOrderReceived": {
            "type": "string",
            "title": "New Order Received"
        },
        "interventionInPlacePriorToFall": {
            "type": "string",
            "title": "Intervention to Fall"
        },
        "medicationList": {
            "type": "string",
            "title": "Medication List"
        },
        "postFallActionsTaken": {
            "type": "string",
            "title": "Post Actions Taken"
        },
        "lastFallAssessment": {
            "type": "string",
            "title": "Last Fall Assessment"
        },
        "notifiedPerson": {
            "type": "string",
            "title": "Notified Person"
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
  