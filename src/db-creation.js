import { dmzMissionsS3, dataDmzStandardMissionsS4 } from './data/data-dmz-standard-missions-s4';

import { dataDMZToDoMissions, dataDMZToDoFOB } from './data/data-dmz-to-do-s4';

import { doc, getDoc, setDoc } from 'firebase/firestore';

export const addDMZMissionsS3ObjToDb = async (database) => {

  // If doc does NOT exist... MAKE IT.  If it DOES exist, do nothing.

  const docRef = doc(database, 'mw-info', 'dmzMissionsS3');
  let docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log('The S3 DMZ Object Doc Exists!')

  } else {
    // console.log('The S3 Doc DOES NOT EXIST.  MAKING IT NOW!');
    await setDoc(doc(database, 'mw2-info', 'dmzMissionsS3'), dmzMissionsS3);
  }
}

export const addDMZToDoDocs = async (database, uid) => {
  // If doc does NOT exist... MAKE IT.  If it DOES exist, do nothing.
  const docRef1 = doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoMissions') // DMZ To Do Missions Doc Reference.
  const docRef2 = doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoFOB') // DMZ To Do FOB Doc Reference.

  let docSnap1 = await getDoc(docRef1); // Grabbing DMZ To Do Missions Doc.
  let docSnap2 = await getDoc(docRef2); // Grabbing DMZ To Do FOB Doc.

  if (docSnap1.exists()) { // Checks to see if the Missions To-Do Doc exists.  If it does not, it creates it, if it does, it does nothing.  console.log's for testing.
    console.log('The DMZ To Do Missions Doc Exists');
  } else {
    console.log('The DMZ To Do Missions Doc Does Not Exist.  Creating Now.')
    await setDoc(doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoMissions'), dataDMZToDoMissions)
  };

  if (docSnap2.exists()) { // Checks to see if the FOB To-Do Doc exists.  If it does not, it creates it, if it does, it does nothing.  console.log's for testing.
    console.log('The DMZ To Do Missions Doc Exists');
  } else {
    console.log('The DMZ To Do Missions Doc Does Not Exist.  Creating Now.')
    await setDoc(doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoFOB'), dataDMZToDoFOB)
  };


}