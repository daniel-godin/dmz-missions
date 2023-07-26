// This is the Call of Duty: Modern Warefare II: DMZ Foward Operating Base (FOB) Object with all data.


// Should I break this apart into 4 different objects?  Probably...
export const dataDMZFOBS4 = { // Stash, Weapons Locker, Bounty Board, Communications Station
  
  // !!!!  I need to re-do this whole object.
  
  
  
  
  wallet: {
    unlockWallet: {
      title: "Unlock Wallet",
      complete: false, // true/false complete/incomplete
      factionRequirement: "Black Mous Level 2", // Amount of Faction Needed to "Unlock"
      tasks: {
        task1: {
          task: "Extract 100k in Cash",
          complete: false, // true/false complete/incomplete
        },
        task2: {
          task: "",
          complete: false, // true/false complete/incomplete
        },
        task3: {
          task: "",
          complete: false, // true/false complete/incomplete
        },
      },
      walletExpansion1: {
        title: "Wallet Expansion 1",
        complete: false, // true/false complete/incomplete
        factionRequirement: "White Lotus Level 3", // Amount of Faction Needed to "Unlock"
        tasks: {
          task1: {
            task: "Extract 10 bottles of liquor.",
            complete: false, // true/false complete/incomplete
          },
          task2: {
            task: "Extract 6 wine bottles.",
            complete: false, // true/false complete/incomplete
          },
          task3: {
            task: "Extract 2 aged or vintage wine bottles.",
            complete: false, // true/false complete/incomplete
          },
        },
      },
    }
  }
}