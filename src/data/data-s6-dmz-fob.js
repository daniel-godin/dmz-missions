// This is the Call of Duty: Modern Warfare II: DMZ Foward Operating Base (FOB) Object with all data.


// Should I break this apart into 4 different objects?  Probably...
export const dataS6DMZFOB = { // Stash, Weapons Locker, Bounty Board, Communications Station
  
  // !!!!  I need to re-do this whole object.
  stash: {
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
  
      // I haven't gotten to wallet expansion 5 yet.
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
  
    stashExpansion: {
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
            task: "Extract 5 screwdrivers.",
            progressCurrent: 0,
            progressTotal: 5,
            complete: false, // true/false complete/incomplete
          },
          task2: {
            task: "Extract 5 wrenches.",
            progressCurrent: 0,
            progressTotal: 5,
            complete: false, // true/false complete/incomplete
          },
          task3: {
            task: "Extract 1 RGL-80.",
            progressCurrent: 0,
            progressTotal: 1,
            complete: false, // true/false complete/incomplete
          },
          task4: {
            task: "Extract 3 dog tags.",
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
            task: "Extract 40 documents.",
            progressCurrent: 0,
            progressTotal: 40,
            complete: false, // true/false complete/incomplete
          },
          task2: {
            task: "Extract 16 sensitive documents.",
            progressCurrent: 0,
            progressTotal: 16,
            complete: false, // true/false complete/incomplete
          },
          task3: {
            task: "Extract 8 classified documents.",
            progressCurrent: 0,
            progressTotal: 8,
            complete: false, // true/false complete/incomplete
          },
        },
      },

    },

    walletCrown: {
      walletExpansion1Crown: {
        title: "Wallet Expansion 1 (CROWN)",
        complete: false, // true/false complete/incomplete
        factionRequirement: "Crown (4)", // Amount of Faction Needed to "Unlock"
        reward: "Expand the wallet's capacity by $100k.",
        tasks: {
          task1: {
            task: "Extract 5 batteries.",
            progressCurrent: 0,
            progressTotal: 5,
            complete: false, // true/false complete/incomplete
          },
          task2: {
            task: "Extract 2 drills.",
            progressCurrent: 0,
            progressTotal: 2,
            complete: false, // true/false complete/incomplete
          },
          task3: {
            task: "Extract 3 bottles of oil.",
            progressCurrent: 0,
            progressTotal: 3,
            complete: false, // true/false complete/incomplete
          },
        },
      },
      walletExpansion2Crown: {
        title: "Wallet Expansion 2 (CROWN)",
        complete: false, // true/false complete/incomplete
        factionRequirement: "Crown (5)", // Amount of Faction Needed to "Unlock"
        reward: "Expand the wallet's capacity by $50k.",
        tasks: {
          task1: {
            task: "Extract 8 rolls of electrical tape.",
            progressCurrent: 0,
            progressTotal: 8,
            complete: false, // true/false complete/incomplete
          },
          task2: {
            task: "Extract 3 car batteries.",
            progressCurrent: 0,
            progressTotal: 3,
            complete: false, // true/false complete/incomplete
          },
          task3: {
            task: "Extract 6 jumper cables.",
            progressCurrent: 0,
            progressTotal: 6,
            complete: false, // true/false complete/incomplete
          },
        },
      },
      walletExpansion3Crown: {
        title: "Wallet Expansion 3 (CROWN)",
        complete: false, // true/false complete/incomplete
        factionRequirement: "Crown (6)", // Amount of Faction Needed to "Unlock"
        reward: "Expand the wallet's capacity by $50k.",
        tasks: {
          task1: {
            task: "Extract 5 AQ laptops.",
            progressCurrent: 0,
            progressTotal: 5,
            complete: false, // true/false complete/incomplete
          },
          task2: {
            task: "Extract 10 screwdrivers.",
            progressCurrent: 0,
            progressTotal: 10,
            complete: false, // true/false complete/incomplete
          },
          task3: {
            task: "Extract 4 encrypted hard drives.",
            progressCurrent: 0,
            progressTotal: 4,
            complete: false, // true/false complete/incomplete
          },
          task4: {
            task: "Extract 500k in cash.",
            progressCurrent: 0,
            progressTotal: 500,
            complete: false, // true/false complete/incomplete
          }, 
        },
      },
      walletExpansion4Crown: {
        title: "Wallet Expansion 4 (CROWN)",
        complete: false, // true/false complete/incomplete
        factionRequirement: "Crown (8)", // Amount of Faction Needed to "Unlock"
        reward: "Expand the wallet's capacity by $50k.",
        tasks: {
          task1: {
            task: "Extract 4 GPUs.",
            progressCurrent: 0,
            progressTotal: 4,
            complete: false, // true/false complete/incomplete
          },
          task2: {
            task: "Extract 10 game consoles.",
            progressCurrent: 0,
            progressTotal: 10,
            complete: false, // true/false complete/incomplete
          },
          task3: {
            task: "Extract 10 VCRs.",
            progressCurrent: 0,
            progressTotal: 10,
            complete: false, // true/false complete/incomplete
          },
          task4: {
            task: "Extract 6 encrypted thumb drives.",
            progressCurrent: 0,
            progressTotal: 6,
            complete: false, // true/false complete/incomplete
          }, 
        },
      },
  
      // Not unlocked yet for me
      walletExpansion5Crown: {
        title: "Wallet Expansion 5 (CROWN)",
        complete: false, // true/false complete/incomplete
        factionRequirement: "Crown (10)", // Amount of Faction Needed to "Unlock"
        reward: "Expand the wallet's capacity by $50k.",
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

    stashExpansionCrown: {
      stashExpansion1Crown: {
        title: "Stash Expansion 1 (CROWN)",
        complete: false, // true/false complete/incomplete
        factionRequirement: "Crown (4)", // Amount of Faction Needed to "Unlock"
        reward: "Expand the mission item and key stashes by an additional 3 slots each.",
        tasks: {
          task1: {
            task: "Extract 8 bandages.",
            progressCurrent: 0,
            progressTotal: 8,
            complete: false, // true/false complete/incomplete
          },
          task2: {
            task: "Extract 4 IFAKs.",
            progressCurrent: 0,
            progressTotal: 4,
            complete: false, // true/false complete/incomplete
          },
          task3: {
            task: "Extract 1 bottle of radiation blockers.",
            progressCurrent: 0,
            progressTotal: 1,
            complete: false, // true/false complete/incomplete
          },
        },
      },
      stashExpansion2Crown: {
        title: "Stash Expansion 2 (CROWN)",
        complete: false, // true/false complete/incomplete
        factionRequirement: "Crown (5)", // Amount of Faction Needed to "Unlock"
        reward: "Expand the mission item and key stashes by an additional 3 slots each.",
        tasks: {
          task1: {
            task: "Extract 6 vases from Ashika Island.",
            progressCurrent: 0,
            progressTotal: 6,
            complete: false, // true/false complete/incomplete
          },
          task2: {
            task: "Extract 3 Japanese liquor bottles.",
            progressCurrent: 0,
            progressTotal: 3,
            complete: false, // true/false complete/incomplete
          },
        },
      },
      stashExpansion3Crown: {
        title: "Stash Expansion 3 (CROWN)",
        complete: false, // true/false complete/incomplete
        factionRequirement: "Crown (6)", // Amount of Faction Needed to "Unlock"
        reward: "Expand the mission item and key stashes by an additional 2 slots each.",
        tasks: {
          task1: {
            task: "Extract 8 bottles of fresh water.",
            progressCurrent: 0,
            progressTotal: 8,
            complete: false, // true/false complete/incomplete
          },
          task2: {
            task: "Extract 7 food rations.",
            progressCurrent: 0,
            progressTotal: 7,
            complete: false, // true/false complete/incomplete
          },
          task3: {
            task: "Extract 3 gas cans.",
            progressCurrent: 0,
            progressTotal: 3,
            complete: false, // true/false complete/incomplete
          },
          task4: {
            task: "Extract 8 cans of food.",
            progressCurrent: 0,
            progressTotal: 8,
            complete: false, // true/false complete/incomplete
          }, 
        },
      },
      stashExpansion4Crown: {
        title: "Stash Expansion 4 (CROWN)",
        complete: false, // true/false complete/incomplete
        factionRequirement: "Crown (8)", // Amount of Faction Needed to "Unlock"
        reward: "Expand the mission item and key stashes by an additional 1 slots each.",
        tasks: {
          task1: {
            task: "Extract 8 aspirin bottles.",
            progressCurrent: 0,
            progressTotal: 8,
            complete: false, // true/false complete/incomplete
          },
          task2: {
            task: "Extract 8 large medical bags.",
            progressCurrent: 0,
            progressTotal: 8,
            complete: false, // true/false complete/incomplete
          },
        },
      },
  
      // I haven't reached this yet.
      stashExpansion5Crown: {
        title: "Stash Expansion 5 (CROWN)",
        complete: false, // true/false complete/incomplete
        factionRequirement: "Crown (10)", // Amount of Faction Needed to "Unlock"
        reward: "Expand the mission item and key stashes by an additional 1 slots each.",
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
  },

  weaponsLocker: {
    firstInsuredSlot: {
      firstInsuredSlotCooldownReduction1: {
        title: "1st Insured Slot Cooldown Reduction 1",
        complete: false, // true/false complete/incomplete
        factionRequirement: "Phalanx (3)", // Amount of Faction Needed to "Unlock"
        reward: "Reduce the cooldown of the 1st insured slot by 25%.",
        tasks: {
          task1: {
            task: "Extract 4 bottles of gun oil.",
            progressCurrent: 0,
            progressTotal: 4,
            complete: false, // true/false complete/incomplete
          },
          task2: {
            task: "Extract 3 classified documents.",
            progressCurrent: 0,
            progressTotal: 3,
            complete: false, // true/false complete/incomplete
          },
          task3: {
            task: "Extract 400k in cash.",
            progressCurrent: 0,
            progressTotal: 400,
            complete: false, // true/false complete/incomplete
          },
        },
      },
      firstInsuredSlotCooldownReduction2: {
        title: "1st Insured Slot Cooldown Reduction 2",
        complete: false, // true/false complete/incomplete
        factionRequirement: "Phalanx (9)", // Amount of Faction Needed to "Unlock"
        reward: "Reduce the cooldown of the 1st insured slot by an additional 25% (50% total).",
        tasks: {
          task1: {
            task: "Extract 12 tubes of toothpaste.",
            progressCurrent: 0,
            progressTotal: 12,
            complete: false, // true/false complete/incomplete
          },
          task2: {
            task: "Extract 15 bottles of fresh water.",
            progressCurrent: 0,
            progressTotal: 15,
            complete: false, // true/false complete/incomplete
          },
          task3: {
            task: "Extract 7 light bulbs.",
            progressCurrent: 0,
            progressTotal: 7,
            complete: false, // true/false complete/incomplete
          },
          task4: {
            task: "Extract 5 enemy operator's weapons.",
            progressCurrent: 0,
            progressTotal: 5,
            complete: false, // true/false complete/incomplete
          }, 
        },
      },
    },
  
    secondInsuredSlot: {
  
    },
  
    thirdInsuredSlot: {
  
    },
  
    contrabandStash: {
  
    },
  
    contrabandStashCrown: {
  
    },
  
  },

  equipment: {

  },

  bountyBoard: {

  },

  communicationsStation: {

  },


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
  



  increasedStartingArmor: {

  },

  unlockRebreather: {

  },

  startingSoloSelfRevive: {

  },

  bountyBoard: {

  },

  communicationStation: {

  },







}