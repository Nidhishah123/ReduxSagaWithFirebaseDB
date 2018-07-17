import firebase from "firebase";

export const getData = (key, id) => {
  return new Promise((resolve, reject) => {
    firebase.database()
      .ref(`data/${key}/${id}`)
      .on('value', snapshot => {
        return resolve(snapshot.val());
      });
  });
};

export const saveData = (data, key) => {
  return firebase.database().ref(`data/${key}`).push(data);
};

export const editData = (data, key, id) => {
  return firebase.database().ref(`data/${key}/${id}`).update(data);
};