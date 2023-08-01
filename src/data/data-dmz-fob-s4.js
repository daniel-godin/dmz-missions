// This is the Call of Duty: Modern Warfare II: DMZ Foward Operating Base (FOB) Object with all data.


// Should I break this apart into 4 different objects?  Probably...
export const dataDMZFOBS4 = { // Stash, Weapons Locker, Bounty Board, Communications Station
  
  // !!!!  I need to re-do this whole object.
  
  arrayOfFOBSections: [
      "Wallet", "Stash", "Wallet (Crown)", "Stash (Crown)",
      "1st Insured Slot", "2nd Insured Slot", "3rd Insured Slot", "Contraband Stash", "Contraband Stash (Crown)",
      "Bounty Board", "Communications Station",
  ],

  template: {
    CHANGEthisNAME: {
      title: "",
      complete: false, // true/false complete/incomplete
      factionRequirement: "", // Amount of Faction Needed to "Unlock"
      reward: "",
      tasks: {
        task1: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task2: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task3: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task4: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        }, 
        task5: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task6: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
      },
    },
  },
  
  wallet: {
    unlockWallet: {
      title: "Unlock Wallet",
      complete: false, // true/false complete/incomplete
      factionRequirement: "Black Mous Level 2", // Amount of Faction Needed to "Unlock"
      reward: "Unlock the wallet to store extracted cash.",
      tasks: {
        task1: {
          task: "Extract 100k in Cash.",
          progressCurrent: 0,
          progressTotal: 100_000,
          complete: false, // true/false complete/incomplete
        },
      },
    },
    walletExpansion1: {
      title: "Wallet Expansion 1",
      complete: false, // true/false complete/incomplete
      factionRequirement: "White Lotus Level 3", // Amount of Faction Needed to "Unlock"
      reward: "Expand the wallet's capacity by $150k",
      tasks: {
        task1: {
          task: "Extract 10 bottles of liquor.",
          progressCurrent: 0,
          progressTotal: 10,
          complete: false, // true/false complete/incomplete
        },
        task2: {
          task: "Extract 6 wine bottles.",
          progressCurrent: 0,
          progressTotal: 6,
          complete: false, // true/false complete/incomplete
        },
        task3: {
          task: "Extract 2 aged or vintage wine bottles.",
          progressCurrent: 0,
          progressTotal: 2,
          complete: false, // true/false complete/incomplete
        },
      },
    },
    walletExpansion2: {
      title: "Wallet Expansion 2",
      complete: false, // true/false complete/incomplete
      factionRequirement: "White Lotus Level 4", // Amount of Faction Needed to "Unlock"
      reward: "Expand the wallet's capacity by an additional $150k.",
      tasks: {
        task1: {
          task: "Extract 2 encrypted hard drives.",
          progressCurrent: 0,
          progressTotal: 2,
          complete: false, // true/false complete/incomplete
        },
        task2: {
          task: "Extract 8 hard drives.",
          progressCurrent: 0,
          progressTotal: 8,
          complete: false, // true/false complete/incomplete
        },
        task3: {
          task: "Extract 4 thumb drives.",
          progressCurrent: 0,
          progressTotal: 4,
          complete: false, // true/false complete/incomplete
        },
        task4: {
          task: "Extract 4 laptops.",
          progressCurrent: 0,
          progressTotal: 4,
          complete: false, // true/false complete/incomplete
        }, 
      },
    },
    walletExpansion3: {
      title: "Wallet Expansion 3",
      complete: false, // true/false complete/incomplete
      factionRequirement: "White Lotus Level 6", // Amount of Faction Needed to "Unlock"
      reward: "Expand the wallet's capacity by an additional 100k.",
      tasks: {
        task1: {
          task: "Extract 2 GPUs.",
          progressCurrent: 0,
          progressTotal: 2,
          complete: false, // true/false complete/incomplete
        },
      },
    },
    walletExpansion4: {
      title: "Wallet Expansion 4",
      complete: false, // true/false complete/incomplete
      factionRequirement: "White Lotus Level 8", // Amount of Faction Needed to "Unlock"
      reward: "Expand the wallet's capacity by an additional $100k.",
      tasks: {
        task1: {
          task: "Extract 6 vintage wine bottles.",
          progressCurrent: 0,
          progressTotal: 6,
          complete: false, // true/false complete/incomplete
        },
        task2: {
          task: "Extract 10 bottles of Japanese liquor.",
          progressCurrent: 0,
          progressTotal: 10,
          complete: false, // true/false complete/incomplete
        },
      },
    },
    walletExpansion5: {
      title: "Wallet Expansion 5",
      complete: false, // true/false complete/incomplete
      factionRequirement: "White Lotus Level 10", // Amount of Faction Needed to "Unlock"
      reward: "Expand the wallet's capacity by an additional $100k.",
      tasks: {
        task1: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task2: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task3: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task4: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        }, 
        task5: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task6: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
      },
    },
  },

  stash: {
    stashExpansion1: {
      title: "Stash Expansion 1",
      complete: false, // true/false complete/incomplete
      factionRequirement: "Black Mous (4)", // Amount of Faction Needed to "Unlock"
      reward: "Expand the mission item and key stashes by 5 slots each.",
      tasks: {
        task1: {
          task: "Extract 10 nuclear fuel rods.",
          progressCurrent: 0,
          progressTotal: 10,
          complete: false, // true/false complete/incomplete
        },
        task2: {
          task: "Extract 2 radiation blocker bottles.",
          progressCurrent: 0,
          progressTotal: 2,
          complete: false, // true/false complete/incomplete
        },
      },
    },
    stashExpansion2: {
      title: "Stash Expansion 2",
      complete: false, // true/false complete/incomplete
      factionRequirement: "Black Mous (5)", // Amount of Faction Needed to "Unlock"
      reward: "Expand the mission item and key stashes by an additional 5 slots each.",
      tasks: {
        task1: {
          task: "Extract 9 cigar boxes.",
          progressCurrent: 0,
          progressTotal: 9,
          complete: false, // true/false complete/incomplete
        },
        task2: {
          task: "Extract 5 comic books.",
          progressCurrent: 0,
          progressTotal: 5,
          complete: false, // true/false complete/incomplete
        },
        task3: {
          task: "Extract 3 bottles of aspirin.",
          progressCurrent: 0,
          progressTotal: 3,
          complete: false, // true/false complete/incomplete
        },
      },
    },
    stashExpansion3: {
      title: "Stash Expansion 3",
      complete: false, // true/false complete/incomplete
      factionRequirement: "Black Mous (6)", // Amount of Faction Needed to "Unlock"
      reward: "Expand the mission item and key stashes by an additional 4 slots each.",
      tasks: {
        task1: {
          task: "Extract 5 large medical bags.",
          progressCurrent: 0,
          progressTotal: 5,
          complete: false, // true/false complete/incomplete
        },
        task2: {
          task: "Extract 10 AFAKs.",
          progressCurrent: 0,
          progressTotal: 10,
          complete: false, // true/false complete/incomplete
        },
        task3: {
          task: "Extraft 15 IFAKs.",
          progressCurrent: 0,
          progressTotal: 15,
          complete: false, // true/false complete/incomplete
        },
      },
    },
    stashExpansion4: {
      title: "Stash Expansion 4",
      complete: false, // true/false complete/incomplete
      factionRequirement: "Black Mous (8)", // Amount of Faction Needed to "Unlock"
      reward: "Expand the mission item and key stashes by an additional 3 slots each.",
      tasks: {
        task1: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task2: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task3: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task4: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        }, 
        task5: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task6: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
      },
    },
    stashExpansion5: {
      title: "Stash Expansion 5",
      complete: false, // true/false complete/incomplete
      factionRequirement: "Black Mous (10)", // Amount of Faction Needed to "Unlock"
      reward: "Expand the mission item and key stashes by an additional 3 slots each.",
      tasks: {
        task1: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task2: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task3: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task4: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        }, 
        task5: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
        task6: {
          task: "",
          progressCurrent: 0,
          progressTotal: 1,
          complete: false, // true/false complete/incomplete
        },
      },
    },
  },

  walletCrown: {

  },

  stashCrown: {

  },

  firstInsuredSlot: {

  },

  secondInsuredSlot: {

  },

  thirdInsuredSlot: {

  },

  contrabandStash: {

  },

  contrabandStashCrown: {

  },

  bountyBoard: {

  },

  communicationStation: {

  },







}