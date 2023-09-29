// Add a property called: maps. 
// In maps, create object with 5 (6?) properties. Each property is a map, and then true or false. Then I can match up missions that work with other missions. Also run a program to spit out the whole list .

// maybe do 6 properties. Have an allMaps property set to true or false. If true, works with all.

// Standard Missions Templates
const templateDataStandardMissionsObject = {
// Example const name = dataS6DMZStandardMissions

    // Need to change the way I create these object "numbers", but this is what I'm doing for now.
    10101: {
        id: 10101, // Later, I want to make these a random generated ID.  When I create a form to create these missions.
        title: "",
        faction: "", // What faction is this mission in?  Helps put mission where it needs to be.
        tier: 0, // 1-5.  What tier is this mission in?
        positionInTier: 0, // 1-7 (7 is Story Mission) - Helps to organize mission tiers, instead of needing sequencial mission id's.
        complete: false,
        unlocked: true,
        description: "",
        maps: {
            allMaps: false,
            alMazrah: false,
            ashikaIsland: false,
            building21: false,
            koscheiComplex: false,
            vondel: false,
        },
        objectives: {
            objective1: {
                objectiveText: "",
                complete: false,
                exists: false,
                progress: {
                progressCurrent: 0,
                progressTotal: 0,
                },
            },
            objective2: {
                objectiveText: "",
                complete: false,
                exists: false,
                progress: {
                progressCurrent: 0,
                progressTotal: 0,
                },
            },
            objective3: {
                objectiveText: "",
                complete: false,
                exists: false,
                progress: {
                progressCurrent: 0,
                progressTotal: 0,
                },
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
            faction: "", // Faction that earns the faction points.
        },
        },
    },

}

// FOB Missions Templates
const templateDataFOBMissionsObject = { // Stash, Weapons Locker, Bounty Board, Communications Station
// Example Name:  dataS6DMZFOB
templateNameOfFOBPage: {
    templateNameOfFOBMissionsSection: {
        templateNameOfFOBMissionObject: { // Example:  firstInsuredSlotCooldownReduction1
            title: "",
            complete: false, // true/false complete/incomplete
            unlocked: false, // true/false.  Will need:  correct amount of faction, and to have completed the previous mission.
            faction: "", // Shadow Company, Black Mous, etc.
            factionRequirement: 0, // Amount of Faction Needed to "Unlock" - Using a Number, not a "string"
            reward: "",
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
                    progressTotal: 4,
                    complete: false, // true/false complete/incomplete
                },
                task2: {
                    task: "",
                    progressCurrent: 0,
                    progressTotal: 3,
                    complete: false, // true/false complete/incomplete
                },
                task3: {
                    task: "",
                    progressCurrent: 0,
                    progressTotal: 400,
                    complete: false, // true/false complete/incomplete
                },
            },
        },
    },
},


}