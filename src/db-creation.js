import { dmzMissionsS3 } from './dmz-mission-list-objects';

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