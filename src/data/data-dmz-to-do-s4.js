// This is a quick and dirty version.  More fully featured coming soon.
// DMZ Season 4 To-Do List:  2 columns (Missons || FOB)

export const dataDMZToDoMissions = {
  taskUID: { // Possibly use a date and time generation to use this, for easier sorting.
    taskUID: "taskUID", // Randomly generated.  Need to implement later.
    userUID: "", // Users UID.  For easier tracking/moving later.
    dateTimeCreated: "", // Date and Time when to-do task was created.  This is for sorting.  Oldest top to newest bottom at first.
    type: "Mission", // type mission or type fob.  For organizing later.
    task: "This is your mission task to do.", // string which is the text the user inputted for their "to do task".
    complete: false, // true/false complete/incomplete
    progress: { // For later.  User should be able to "update" their progress on a task.  For example... especially in FOB... Exfil with 10 Gold Bars, Skulls, GPU's.  This takes a while and user will want to update and see what they really need.
      progressCurrent: 0, // This should be a Number.  For example.  Exfil with 10 Gold Bars, and the user currently has extracted with 4/10, this would be 4.
      progressTotal: 5, // This should be a Number.  For example.  Exfil with 10 Gold Bars, this should be 10.
    },
  },
  taskUID2: { // Possibly use a date and time generation to use this, for easier sorting.
    taskUID: "taskUID2", // Randomly generated.  Need to implement later.
    userUID: "", // Users UID.  For easier tracking/moving later.
    dateTimeCreated: "", // Date and Time when to-do task was created.  This is for sorting.  Oldest top to newest bottom at first.
    type: "Mission", // type mission or type fob.  For organizing later.
    task: "This is your mission task to do.", // string which is the text the user inputted for their "to do task".
    complete: true, // true/false complete/incomplete
    progress: { // For later.  User should be able to "update" their progress on a task.  For example... especially in FOB... Exfil with 10 Gold Bars, Skulls, GPU's.  This takes a while and user will want to update and see what they really need.
      progressCurrent: 10, // This should be a Number.  For example.  Exfil with 10 Gold Bars, and the user currently has extracted with 4/10, this would be 4.
      progressTotal: 10, // This should be a Number.  For example.  Exfil with 10 Gold Bars, this should be 10.
    },
  },
};

export const dataDMZToDoFOB = {
  taskUID: { // Possibly use a date and time generation to use this, for easier sorting.
    taskUID: "taskUID", // Randomly generated.  Need to implement later.
    userUID: "", // Users UID.  For easier tracking/moving later.
    dateTimeCreated: "", // Date and Time when to-do task was created.  This is for sorting.  Oldest top to newest bottom at first.
    type: "FOB", // type mission or type fob.  For organizing later.
    task: "This is your FOB passive task to do.", // string which is the text the user inputted for their "to do task".
    complete: false, // true/false complete/incomplete
    progress: { // For later.  User should be able to "update" their progress on a task.  For example... especially in FOB... Exfil with 10 Gold Bars, Skulls, GPU's.  This takes a while and user will want to update and see what they really need.
      progressCurrent: 4, // This should be a Number.  For example.  Exfil with 10 Gold Bars, and the user currently has extracted with 4/10, this would be 4.
      progressTotal: 10, // This should be a Number.  For example.  Exfil with 10 Gold Bars, this should be 10.
    },
  },
  taskUID2: { // Possibly use a date and time generation to use this, for easier sorting.
    taskUID: "taskUID2", // Randomly generated.  Need to implement later.
    userUID: "", // Users UID.  For easier tracking/moving later.
    dateTimeCreated: "", // Date and Time when to-do task was created.  This is for sorting.  Oldest top to newest bottom at first.
    type: "FOB", // type mission or type fob.  For organizing later.
    task: "This is your FOB passive task to do.", // string which is the text the user inputted for their "to do task".
    complete: true, // true/false complete/incomplete
    progress: { // For later.  User should be able to "update" their progress on a task.  For example... especially in FOB... Exfil with 10 Gold Bars, Skulls, GPU's.  This takes a while and user will want to update and see what they really need.
      progressCurrent: 10, // This should be a Number.  For example.  Exfil with 10 Gold Bars, and the user currently has extracted with 4/10, this would be 4.
      progressTotal: 10, // This should be a Number.  For example.  Exfil with 10 Gold Bars, this should be 10.
    },
  },
};