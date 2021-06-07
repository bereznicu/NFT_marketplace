import firebase from "firebase";

class FirebaseProvider{
    storageRef; file; itemName; description; externalURL;
    constructor(file, itemName, description, externalURL){
        this.storageRef = firebase.storage().ref();
        this.file = file;
        this.itemName = itemName;
        this.description = description;
        this.externalURL = externalURL;
    };
}

export default FirebaseProvider;