// "Standard" Missions in DMZ mode for Season 4 - Last Updated:  2023.06.16
export const dmzMissionsS4 = {
  // Code = First Number is Faction, 2nd/3rd are Tier, 4th/5th are missions
  // 10304 = Redacted, Tier 3, Mission 4
  // 1 = Redacted, 2 = White Lotus, 3 = Legion, 4 = Black Mous, 5 = Crown
  // New Code?  Redacted and Legion have been deleted.  Black Mous is now first, wl second, phalanx 3rd, crown 4th.
// Black Mous:
  10101: {
    id: 10101,
    title: "Make Contact",
    complete: false,
    unlocked: true,
    description: "Al-Qatala is using burner phones to coordinate attacks against us.  Intel was able to track some that are still active, but we need to secure them fast.  Locate a phone and download its contents.  Once decrypted, we can use the data to take on contracts for a payout.",
    objectives: {
      objective1: {
        objectiveText: "Use your Tac-Map with "KEYBINDING" and ping a contract phone.",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "Find a contract phone and download the intel to start the contract.",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "Contraband Gun",
        item: "RAPP H",
      },
      rewardXP: 5000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },
  },
  10102: {
    id: 10102,
    title: "Hostiles Located",
    complete: false,
    unlocked: true,
    description: "",
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10103: {
    id: 10103,
    title: "Exfiltration",
    complete: false,
    unlocked: true,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },
  },
  10104: {
    id: 10104,
    title: "Information Seeker",
    complete: false,
    unlocked: true,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10105: {
    id: 10105,
    title: "Convenience",
    complete: false,
    unlocked: true,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10106: {
    id: 10106,
    title: "Committed Shopper",
    complete: false,
    unlocked: true,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10107: {
    id: 10107,
    title: "Laswell's Story (STORY)",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 200, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },  
  10201: {
    id: 10201,
    title: "Hostage Rescue",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 200, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10202: {
    id: 10202,
    title: "Team Player",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 200, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10203: {
    id: 10203,
    title: "Anti-Air",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10204: {
    id: 10204,
    title: "Down and Out",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 200, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10205: {
    id: 10205,
    title: "Badge of Honor",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 200, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10206: {
    id: 10206,
    title: "Close-Quarters",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 200, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10207: {
    id: 10207,
    title: "Icebreaker (STORY)",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 400, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },  
  10301: {
    id: 10301,
    title: "Operators In Need",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10302: {
    id: 10302,
    title: "Bedrock",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10303: {
    id: 10303,
    title: "Unarmed and Dangerous",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10304: {
    id: 10304,
    title: "Double Crossed",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10305: {
    id: 10305,
    title: "Substantial Findings",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10306: {
    id: 10306,
    title: "Researcher's Dilemma",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },
  10307: {
    id: 10307,
    title: "Spetnaz Exposed (STORY)",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Black Mous", // Faction that earns the faction points.
      },
    },

  },  
  // Current Limit Of My Progress: 2023.06.16 (8:00am)
  10401: {
    id: 10401,
    title: "",
    complete: false,
    unlocked: false,
  },
  10402: {
    id: 10402,
    title: "",
    complete: false,
    unlocked: false,
  },
  10403: {
    id: 10403,
    title: "",
    complete: false,
    unlocked: false,
  },
  10404: {
    id: 10404,
    title: " ",
    complete: false,
    unlocked: false,
  },
  10405: {
    id: 10405,
    title: "  ",
    complete: false,
    unlocked: false,
  },
  10406: {
    id: 10406,
    title: " ",
    complete: false,
    unlocked: false,
  },
  10407: {
    id: 10407,
    title: " ()",
    complete: false,
    unlocked: false,
  },  
  10501: {
    id: 10501,
    title: "",
    complete: false,
    unlocked: false,
  },
  10502: {
    id: 10502,
    title: "",
    complete: false,
    unlocked: false,
  },
  10503: {
    id: 10503,
    title: " ",
    complete: false,
    unlocked: false,
  },
  10504: {
    id: 10504,
    title: " ",
    complete: false,
    unlocked: false,
  },
  10505: {
    id: 10505,
    title: " ",
    complete: false,
    unlocked: false,
  },
  10506: {
    id: 10506,
    title: " ",
    complete: false,
    unlocked: false,
  },
  10507: {
    id: 10507,
    title: "  ()",
    complete: false,
    unlocked: false,
  },

// White Lotus:
  20101: {
    id: 20101,
    title: "Ashika Recon",
    complete: false,
    unlocked: true,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "White Lotus", // Faction that earns the faction points.
      },
    },
  },
  20102: {
    id: 20102,
    title: "Fuel Shortage",
    complete: false,
    unlocked: true,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "White Lotus", // Faction that earns the faction points.
      },
    },
  },
  20103: {
    id: 20103,
    title: "Shadow Company Intel",
    complete: false,
    unlocked: true,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "White Lotus", // Faction that earns the faction points.
      },
    },
  },
  20104: {
    id: 20104,
    title: "Air Support",
    complete: false,
    unlocked: true,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "White Lotus", // Faction that earns the faction points.
      },
    },
  },
  20105: {
    id: 20105,
    title: "Upgraded Arsenal",
    complete: false,
    unlocked: true,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "White Lotus", // Faction that earns the faction points.
      },
    },
  },
  20106: {
    id: 20106,
    title: "Commanding Intel",
    complete: false,
    unlocked: true,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "White Lotus", // Faction that earns the faction points.
      },
    },
  },
  20107: {
    id: 20107,
    title: "Look Out (STORY)",
    complete: false,
    unlocked: false,
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "White Lotus", // Faction that earns the faction points.
      },
    },

  },  

  // Current Faction Limit.  2023.06.16 (8:00am)
  20201: {
    id: 20201,
    title: " ",
    complete: false,
    unlocked: false,
  },
  20202: {
    id: 20202,
    title: " ",
    complete: false,
    unlocked: false,
  },
  20203: {
    id: 20203,
    title: "  ",
    complete: false,
    unlocked: false,
  },
  20204: {
    id: 20204,
    title: " ",
    complete: false,
    unlocked: false,
  },
  20205: {
    id: 20205,
    title: " ",
    complete: false,
    unlocked: false,
  },
  20206: {
    id: 20206,
    title: "",
    complete: false,
    unlocked: false,
  },
  20207: {
    id: 20207,
    title: "",
    complete: false,
    unlocked: false,
  },  
  20301: {
    id: 20301,
    title: "",
    complete: false,
    unlocked: false,
  },
  20302: {
    id: 20302,
    title: "",
    complete: false,
    unlocked: false,
  },
  20303: {
    id: 20303,
    title: "",
    complete: false,
    unlocked: false,
  },
  20304: {
    id: 20304,
    title: "",
    complete: false,
    unlocked: false,
  },
  20305: {
    id: 20305,
    title: "",
    complete: false,
    unlocked: false,
  },
  20306: {
    id: 20306,
    title: "",
    complete: false,
    unlocked: false,
  },
  20307: {
    id: 20307,
    title: "",
    complete: false,
    unlocked: false,
  },  
  20401: {
    id: 20401,
    title: "",
    complete: false,
    unlocked: false,
  },
  20402: {
    id: 20402,
    title: "",
    complete: false,
    unlocked: false,
  },
  20403: {
    id: 20403,
    title: "",
    complete: false,
    unlocked: false,
  },
  20404: {
    id: 20404,
    title: "",
    complete: false,
    unlocked: false,
  },
  20405: {
    id: 20405,
    title: "",
    complete: false,
    unlocked: false,
  },
  20406: {
    id: 20406,
    title: "",
    complete: false,
    unlocked: false,
  },
  20407: {
    id: 20407,
    title: "",
    complete: false,
    unlocked: false,
  },  
  20501: {
    id: 20501,
    title: "",
    complete: false,
    unlocked: false,
  },
  20502: {
    id: 20502,
    title: "",
    complete: false,
    unlocked: false,
  },
  20503: {
    id: 20503,
    title: "",
    complete: false,
    unlocked: false,
  },
  20504: {
    id: 20504,
    title: "",
    complete: false,
    unlocked: false,
  },
  20505: {
    id: 20505,
    title: "",
    complete: false,
    unlocked: false,
  },
  20506: {
    id: 20506,
    title: "",
    complete: false,
    unlocked: false,
  },
  20507: {
    id: 20507,
    title: "",
    complete: false,
    unlocked: false,
  },


// Phalanx Faction:
  30101: {
    id: 30101,
    title: "Welcome to Vondel",
    complete: false,
    unlocked: true,
    description: "",
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Phalanx", // Faction that earns the faction points.
      },
    },

  },
  30102: {
    id: 30102,
    title: "Ready to Rock",
    complete: false,
    unlocked: true,
    description: "",
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Phalanx", // Faction that earns the faction points.
      },
    },

  },
  30103: {
    id: 30103,
    title: "Cargo Keeper",
    complete: false,
    unlocked: true,
    description: "",
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Phalanx", // Faction that earns the faction points.
      },
    },

  },
  30104: {
    id: 30104,
    title: "Cross Town",
    complete: false,
    unlocked: true,
    description: "",
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Phalanx", // Faction that earns the faction points.
      },
    },

  },
  30105: {
    id: 30105,
    title: "Day at the Zoo",
    complete: false,
    unlocked: true,
    description: "",
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Phalanx", // Faction that earns the faction points.
      },
    },

  },
  30106: {
    id: 30106,
    title: "Well Supplied Soldier",
    complete: false,
    unlocked: true,
    description: "",
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Phalanx", // Faction that earns the faction points.
      },
    },

  },
  30107: {
    id: 30107,
    title: "Disarming Presence (STORY)",
    complete: false,
    unlocked: false,
    description: "",
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Phalanx", // Faction that earns the faction points.
      },
    },
  },  

  // Current Phalanx Faction Limit.  2023.06.16 (8:00am)
  30201: {
    id: 30201,
    title: "",
    complete: false,
    unlocked: false,
  },
  30202: {
    id: 30202,
    title: "",
    complete: false,
    unlocked: false,
  },
  30203: {
    id: 30203,
    title: "",
    complete: false,
    unlocked: false,
  },
  30204: {
    id: 30204,
    title: "",
    complete: false,
    unlocked: false,
  },
  30205: {
    id: 30205,
    title: "",
    complete: false,
    unlocked: false,
  },
  30206: {
    id: 30206,
    title: "",
    complete: false,
    unlocked: false,
  },
  30207: {
    id: 30207,
    title: "",
    complete: false,
    unlocked: false,
  },  
  30301: {
    id: 30301,
    title: "",
    complete: false,
    unlocked: false,
  },
  30302: {
    id: 30302,
    title: "",
    complete: false,
    unlocked: false,
  },
  30303: {
    id: 30303,
    title: "",
    complete: false,
    unlocked: false,
  },
  30304: {
    id: 30304,
    title: "",
    complete: false,
    unlocked: false,
  },
  30305: {
    id: 30305,
    title: "",
    complete: false,
    unlocked: false,
  },
  30306: {
    id: 30306,
    title: "",
    complete: false,
    unlocked: false,
  },
  30307: {
    id: 30307,
    title: "",
    complete: false,
    unlocked: false,
  },  
  30401: {
    id: 30401,
    title: "",
    complete: false,
    unlocked: false,
  },
  30402: {
    id: 30402,
    title: "",
    complete: false,
    unlocked: false,
  },
  30403: {
    id: 30403,
    title: "",
    complete: false,
    unlocked: false,
  },
  30404: {
    id: 30404,
    title: "",
    complete: false,
    unlocked: false,
  },
  30405: {
    id: 30405,
    title: "",
    complete: false,
    unlocked: false,
  },
  30406: {
    id: 30406,
    title: "",
    complete: false,
    unlocked: false,
  },
  30407: {
    id: 30407,
    title: "",
    complete: false,
    unlocked: false,
  },  
  30501: {
    id: 30501,
    title: "",
    complete: false,
    unlocked: false,
  },
  30502: {
    id: 30502,
    title: "",
    complete: false,
    unlocked: false,
  },
  30503: {
    id: 30503,
    title: "",
    complete: false,
    unlocked: false,
  },
  30504: {
    id: 30504,
    title: "",
    complete: false,
    unlocked: false,
  },
  30505: {
    id: 30505,
    title: "",
    complete: false,
    unlocked: false,
  },
  30506: {
    id: 30506,
    title: "",
    complete: false,
    unlocked: false,
  },
  30507: {
    id: 30507,
    title: "",
    complete: false,
    unlocked: false,
  },

  
// Crown Faction:
  40101: {
    id: 40101,
    title: "Al Mazrah's Threat",
    complete: false,
    unlocked: true,
    description: "",
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Crown", // Faction that earns the faction points.
      },
    },
  },
  40102: {
    id: 40102,
    title: "Vondel Recon",
    complete: false,
    unlocked: true,
    description: "",
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Crown", // Faction that earns the faction points.
      },
    },
  },
  40103: {
    id: 40103,
    title: "Vehicular Homicide",
    complete: false,
    unlocked: true,
    description: "",
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Crown", // Faction that earns the faction points.
      },
    },
  },
  40104: {
    id: 40104,
    title: "Koschei Clearing",
    complete: false,
    unlocked: true,
    description: "",
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Crown", // Faction that earns the faction points.
      },
    },
  },
  40105: {
    id: 40105,
    title: "Chemist's Whereabouts",
    complete: false,
    unlocked: true,
    description: "",
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Crown", // Faction that earns the faction points.
      },
    },
  },
  40106: {
    id: 40106,
    title: "Tactique-Verte Testing",
    complete: false,
    unlocked: true,
    description: "",
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Crown", // Faction that earns the faction points.
      },
    },
  },
  40107: {
    id: 40107,
    title: "Humanitarian Operation (STORY)",
    complete: false,
    unlocked: false,
    description: "",
    objectives: {
      objective1: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective2: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
      objective3: {
        objectiveText: "",
        complete: false,
        // exists:  true/false to add later, not exactly sure how to handle this.  Basically, some missions only have 1 or 2 objectives, and some have 3.  Max is 3.
        // progress: For Later:  Ability to keep track of your progress in the objective.  Some objectives are long.  Example:  Extract 15 super rare item.
      },
    },
    rewards: {
      rewardItem: {
        itemType: "",
        item: "",
      },
      rewardXP: 1000, // Number:  Amount of XP rewarded.
      rewardFaction: {
        amount: 100, // Number:  Amount of faction points awarded
        faction: "Crown", // Faction that earns the faction points.
      },
    },
  },  

  // Current Crown Faction Limit.  2023.06.16 (8:00am)
  40201: {
    id: 40201,
    title: "",
    complete: false,
    unlocked: false,
  },
  40202: {
    id: 40202,
    title: "",
    complete: false,
    unlocked: false,
  },
  40203: {
    id: 40203,
    title: "",
    complete: false,
    unlocked: false,
  },
  40204: {
    id: 40204,
    title: "",
    complete: false,
    unlocked: false,
  },
  40205: {
    id: 40205,
    title: "",
    complete: false,
    unlocked: false,
  },
  40206: {
    id: 40206,
    title: "",
    complete: false,
    unlocked: false,
  },
  40207: {
    id: 40207,
    title: "",
    complete: false,
    unlocked: false,
  },  
  40301: {
    id: 40301,
    title: "",
    complete: false,
    unlocked: false,
  },
  40302: {
    id: 40302,
    title: "",
    complete: false,
    unlocked: false,
  },
  40303: {
    id: 40303,
    title: "",
    complete: false,
    unlocked: false,
  },
  40304: {
    id: 40304,
    title: "",
    complete: false,
    unlocked: false,
  },
  40305: {
    id: 40305,
    title: "",
    complete: false,
    unlocked: false,
  },
  40306: {
    id: 40306,
    title: "",
    complete: false,
    unlocked: false,
  },
  40307: {
    id: 40307,
    title: "",
    complete: false,
    unlocked: false,
  },  
  40401: {
    id: 40401,
    title: "",
    complete: false,
    unlocked: false,
  },
  40402: {
    id: 40402,
    title: "",
    complete: false,
    unlocked: false,
  },
  40403: {
    id: 40403,
    title: "",
    complete: false,
    unlocked: false,
  },
  40404: {
    id: 40404,
    title: "",
    complete: false,
    unlocked: false,
  },
  40405: {  
    id: 40405,
    title: "",
    complete: false,
    unlocked: false,
  },
  40406: {
    id: 40406,
    title: "",
    complete: false,
    unlocked: false,
  },
  40407: {
    id: 40407,
    title: "",
    complete: false,
    unlocked: false,
  },  
  40501: {
    id: 40501,
    title: "",
    complete: false,
    unlocked: false,
  },
  40502: {
    id: 40502,
    title: "",
    complete: false,
    unlocked: false,
  },
  40503: {
    id: 40503,
    title: "",
    complete: false,
    unlocked: false,
  },
  40504: {
    id: 40504,
    title: "",
    complete: false,
    unlocked: false,
  },
  40505: {
    id: 40505,
    title: "",
    complete: false,
    unlocked: false,
  },
  40506: {
    id: 40506,
    title: "",
    complete: false,
    unlocked: false,
  },
  40507: {
    id: 40507,
    title: "",
    complete: false,
    unlocked: false,
  }, 
}