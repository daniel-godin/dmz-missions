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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
        maps: {
          allMaps: false,
          alMazrah: false,
          ashikaIsland: false,
          building21: false,
          koscheiComplex: false,
          vondel: false,
        },
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
      unlockSecondInsuredSlot: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Unlock 2nd Insured Slot",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Black Mous", // Shadow Company, Black Mous, etc.
        factionRequirement: 4, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 1, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Unlock the 2nd insured weapon slot.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 3 IFAKs found at hospitals.",
                progressCurrent: 0,
                progressTotal: 3,
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 1 AFAK or large medical bag.",
                progressCurrent: 0,
                progressTotal: 1,
                complete: false, // true/false complete/incomplete
            },
            task3: {
                task: "Extract 1 enemy operator's weapon.",
                progressCurrent: 0,
                progressTotal: 1,
                complete: false, // true/false complete/incomplete
            },
        },
      },
      secondInsuredSlotCooldownReduction1: { // Example:  firstInsuredSlotCooldownReduction1
        title: "2nd Insured Slot Cooldown Reduction 1",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Phalanx", // Shadow Company, Black Mous, etc.
        factionRequirement: 5, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 2, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Reduce the cooldown of the 2nd insured slot by 25%.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 8 bags of imported tea.",
                progressCurrent: 0,
                progressTotal: 8,
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 8 jars of soothing hand cream.",
                progressCurrent: 0,
                progressTotal: 8,
                complete: false, // true/false complete/incomplete
            },
            task3: {
                task: "Extract 4 bottles of aged of vintage wine.",
                progressCurrent: 0,
                progressTotal: 4,
                complete: false, // true/false complete/incomplete
            },
          },
      },
      secondInsuredSlotCooldownReduction2: { // Example:  firstInsuredSlotCooldownReduction1
        title: "2nd Insured Slot Cooldown Reduction 2",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Phalanx", // Shadow Company, Black Mous, etc.
        factionRequirement: 12, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 3, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Reduce the cooldown of the 2nd insured slot by an additional 25% (50% total).",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 4 jugs of chlorine.",
                progressCurrent: 0,
                progressTotal: 4,
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 4 jugs of formaldehyde.",
                progressCurrent: 0,
                progressTotal: 4,
                complete: false, // true/false complete/incomplete
            },
            task3: {
                task: "Extract 4 bottles of cephalexin.",
                progressCurrent: 0,
                progressTotal: 4,
                complete: false, // true/false complete/incomplete
            },
            task4: {
                task: "Extract 4 bottles of hydrochloride.",
                progressCurrent: 0,
                progressTotal: 4,
                complete: false, // true/false complete/incomplete
            },
            task5: {
                task: "Extract 4 bottles of acetone.",
                progressCurrent: 0,
                progressTotal: 4,
                complete: false, // true/false complete/incomplete
            },
            task6: {
                task: "Extract 4 bottles of hydrogen peroxide.",
                progressCurrent: 0,
                progressTotal: 4,
                complete: false, // true/false complete/incomplete
            },
        },
      },
    },
  
    thirdInsuredSlot: {
      unlockThirdInsuredSlot: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Unlock 3rd Insured Slot",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Black Mous", // Shadow Company, Black Mous, etc.
        factionRequirement: 4, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 1, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Unlock the 3rd insured weapon slot.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 5 GPUs.",
                progressCurrent: 0,
                progressTotal: 5,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 10 Gold Bars.",
                progressCurrent: 0,
                progressTotal: 10,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task3: {
                task: "Extract 8 Gold Skulls.",
                progressCurrent: 0,
                progressTotal: 8,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task4: {
                task: "Extract 10 Enemy Operator's Weapons.",
                progressCurrent: 0,
                progressTotal: 10,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
      thirdInsuredSlotCooldownReduction1: { // Example:  firstInsuredSlotCooldownReduction1
        title: "3rd Insured Slot Cooldown Reduction 1",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Phalanx", // Shadow Company, Black Mous, etc.
        factionRequirement: 7, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 2, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Reduce the cooldown of the 3rd insured slot by 25%.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 35 cigar boxes.",
                progressCurrent: 0,
                progressTotal: 35,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 20 lighters.",
                progressCurrent: 0,
                progressTotal: 20,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
      thirdInsuredSlotCooldownReduction2: { // Example:  firstInsuredSlotCooldownReduction1
        title: "3rd Insured Slot Cooldown Reduction 2",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Phalanx", // Shadow Company, Black Mous, etc.
        factionRequirement: 15, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 3, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Reduce the cooldown of the 3rd insured slot by an additional 25% (50% total).",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 10 dog tags.",
                progressCurrent: 0,
                progressTotal: 10,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 1 damascus dog tag.",
                progressCurrent: 0,
                progressTotal: 1,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task3: {
                task: "Extract 2 gold dog tags.",
                progressCurrent: 0,
                progressTotal: 2,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task4: {
                task: "Extract 3 silver dog tags.",
                progressCurrent: 0,
                progressTotal: 3,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task5: {
                task: "Extract 3 weapon cases.",
                progressCurrent: 0,
                progressTotal: 3,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
    },
  
    contrabandStash: {
      contrabandStash1: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Contraband Stash Expansion 1",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Black Mous", // Shadow Company, Black Mous, etc.
        factionRequirement: 5, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 1, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Expand the contraband stash by 5 slots.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 4 thumb drives.",
                progressCurrent: 0,
                progressTotal: 4,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 5 hard drives.",
                progressCurrent: 0,
                progressTotal: 5,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
      contrabandStash2: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Contraband Stash Expansion 2",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Black Mous", // Shadow Company, Black Mous, etc.
        factionRequirement: 7, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 2, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Expand the contraband stash by an additional 5 slots.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 4 dog tags.",
                progressCurrent: 0,
                progressTotal: 4,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 4 pieces of Black Mous intel from Rohan Oil.",
                progressCurrent: 0,
                progressTotal: 4,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
      contrabandStash3: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Contraband Stash Expansion 3",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Black Mous", // Shadow Company, Black Mous, etc.
        factionRequirement: 9, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 3, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Expand the contraband stash by an additional 4 slots.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 6 Ashika Island masks.",
                progressCurrent: 0,
                progressTotal: 6,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 1 original Ashika Island mask.",
                progressCurrent: 0,
                progressTotal: 1,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
      contrabandStash4: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Contraband Stash Expansion 4",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Black Mous", // Shadow Company, Black Mous, etc.
        factionRequirement: 12, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 4, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Expand the contraband stash by an additional 3 slots.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 15 armor plates.",
                progressCurrent: 0,
                progressTotal: 15,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 5 three-plate carriers.",
                progressCurrent: 0,
                progressTotal: 5,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task3: {
                task: "Extract 3 armor plate boxes.",
                progressCurrent: 0,
                progressTotal: 3,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
      contrabandStash5: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Contraband Stash Expansion 5",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Black Mous", // Shadow Company, Black Mous, etc.
        factionRequirement: 15, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 5, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Expand the contraband stash by an additional 3 slots.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 10 UAVs or advanced UAVs.",
                progressCurrent: 0,
                progressTotal: 10,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 12 anti-armor round boxes.",
                progressCurrent: 0,
                progressTotal: 12,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task3: {
                task: "Extract 20 encrypted hard drives.",
                progressCurrent: 0,
                progressTotal: 20,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
    },
  
    contrabandStashCrown: {
      contrabandStashCrown1: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Contraband Stash Expansion (CROWN) 1",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Crown", // Shadow Company, Black Mous, etc.
        factionRequirement: 5, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 1, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Expand the contraband stash by an additional 3 slots.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 9 stims.",
                progressCurrent: 0,
                progressTotal: 9,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 6 bandages.",
                progressCurrent: 0,
                progressTotal: 6,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
      contrabandStashCrown2: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Contraband Stash Expansion (CROWN) 2",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Crown", // Shadow Company, Black Mous, etc.
        factionRequirement: 7, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 2, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Expand the contraband stash by an additional 3 slots.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 15 lighters, comic books cigar boxes, or documents.",
                progressCurrent: 0,
                progressTotal: 15,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 5 gas cans.",
                progressCurrent: 0,
                progressTotal: 5,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
      contrabandStashCrown3: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Contraband Stash Expansion (CROWN) 3",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Crown", // Shadow Company, Black Mous, etc.
        factionRequirement: 9, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 3, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Expand the contraband stash by an additional 3 slots.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 16 blow torches.",
                progressCurrent: 0,
                progressTotal: 16,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 12 jumper cables.",
                progressCurrent: 0,
                progressTotal: 12,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task3: {
                task: "Extract 8 car batteries.",
                progressCurrent: 0,
                progressTotal: 8,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
      contrabandStashCrown4: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Contraband Stash Expansion (CROWN) 4",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Crown", // Shadow Company, Black Mous, etc.
        factionRequirement: 12, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 4, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Expand the contraband stash by an additional 3 slots.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 3,500 rounds of pistol or SMG ammo.",
                progressCurrent: 0,
                progressTotal: 3_500,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 6,500 rounds of AR or LMG ammo.",
                progressCurrent: 0,
                progressTotal: 6_500,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task3: {
                task: "Extract 1,200 shells of shotgun ammo.",
                progressCurrent: 0,
                progressTotal: 1_200,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task4: {
                task: "Extract 120 shells of launcher ammo.",
                progressCurrent: 0,
                progressTotal: 120,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task5: {
                task: "Extract 800 rounds of sniper ammo.",
                progressCurrent: 0,
                progressTotal: 800,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
      contrabandStashCrown5: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Contraband Stash Expansion (CROWN) 5",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Crown", // Shadow Company, Black Mous, etc.
        factionRequirement: 15, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 5, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Expand the contraband stash by an additional 3 slots.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 30 gas masks.",
                progressCurrent: 0,
                progressTotal: 1,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 10 durable gas masks.",
                progressCurrent: 0,
                progressTotal: 2,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task3: {
                task: "Extract 15 radiation blocker bottles.",
                progressCurrent: 0,
                progressTotal: 3,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
    },
  
  },

  equipment: {
    increasedStartingArmor: {
      increasedStartingArmor1: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Increased Starting Armor",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "", // Shadow Company, Black Mous, etc.
        factionRequirement: 0, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 1, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Start deployments with 3 armor plates.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Dead Drop 8 stronghold keycards.",
                progressCurrent: 0,
                progressTotal: 8,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Dead drop 1 skeleton key.",
                progressCurrent: 0,
                progressTotal: 1,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
      increasedStartingArmor2: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Increased Starting Armor II",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Shadow Company", // Shadow Company, Black Mous, etc.
        factionRequirement: 5, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 2, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Start deployments with 4 armor plates.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Dead drop 10 killstreaks.",
                progressCurrent: 0,
                progressTotal: 10,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 5 NVGs.",
                progressCurrent: 0,
                progressTotal: 5,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
      increasedStartingArmor3: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Increased Starting Armor III",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Shadow Company", // Shadow Company, Black Mous, etc.
        factionRequirement: 9, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 3, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Start deployments with 5 armor plates.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 5 heart lockets.",
                progressCurrent: 0,
                progressTotal: 5,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 5 vials of insulin.",
                progressCurrent: 0,
                progressTotal: 5,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task3: {
                task: "Extract 5 small dolls.",
                progressCurrent: 0,
                progressTotal: 5,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task4: {
                task: "Extract 5 lucky cat statues.",
                progressCurrent: 0,
                progressTotal: 5,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task5: {
                task: "Extract 5 dog bank statues.",
                progressCurrent: 0,
                progressTotal: 5,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
    },
    unlockRebreather: {
      unlockRebreather1: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Unlock Rebreather",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Shadow Company", // Shadow Company, Black Mous, etc.
        factionRequirement: 3, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 1, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Unlock Rebreather",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 12 rebreathers.",
                progressCurrent: 0,
                progressTotal: 12,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 15 rolls of electrical tape.",
                progressCurrent: 0,
                progressTotal: 15,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task3: {
                task: "Extract 8 light bulbs.",
                progressCurrent: 0,
                progressTotal: 8,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task4: {
                task: "Extract 8 bottles of gun oil.",
                progressCurrent: 0,
                progressTotal: 8,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task5: {
                task: "Extract 5 blow torches.",
                progressCurrent: 0,
                progressTotal: 5,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task6: {
                task: "Extract 1 GPU.",
                progressCurrent: 0,
                progressTotal: 1,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
      unlockArmorBox: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Unlock Armor Box",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "Shadow Company", // Shadow Company, Black Mous, etc.
        factionRequirement: 7, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 2, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Unlock Armor Box.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Extract 8 armor boxes.",
                progressCurrent: 0,
                progressTotal: 81,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task2: {
                task: "Extract 4 drills.",
                progressCurrent: 0,
                progressTotal: 4,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task3: {
                task: "Extract 5 screwdrivers.",
                progressCurrent: 0,
                progressTotal: 5,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task4: {
                task: "Extract 8 batteries.",
                progressCurrent: 0,
                progressTotal: 8,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task5: {
                task: "Extract 16 electronic components.",
                progressCurrent: 0,
                progressTotal: 16,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
            task6: {
                task: "Extract 5 plastic explosive bricks.",
                progressCurrent: 0,
                progressTotal: 5,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
    },
  
    startingSoloSelfRevive: {
      startingSoloSelfRevive1: { // Example:  firstInsuredSlotCooldownReduction1
        title: "Starting Solo Self Revive",
        complete: false, // true/false complete/incomplete
        unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
        faction: "", // Shadow Company, Black Mous, etc.
        factionRequirement: 0, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
        positionInTier: 1, // Number. 1-?? or 01-??.  Position in the DOM list.
        reward: "Start solo deployments with a self revive.",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        tasks: {
            task1: {
                task: "Dead drop 40 self revives.",
                progressCurrent: 0,
                progressTotal: 40,
                tags: [],
                complete: false, // true/false complete/incomplete
            },
        },
      },
    },
  },

  bountyBoard: {

  },

  communicationsStation: {

  },







}