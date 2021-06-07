import React, {useState, useEffect, createContext} from 'react';

export const CreateItemsContext = createContext();

export const CreateItemsProvider = props => {
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({"name": "", "file": ""});

    const loadFile = file => {
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log(errors.file);
            setFile(reader.result);
        }
    }

    return <CreateItemsContext.Provider value= {[file, loadFile]}>{props.children}</CreateItemsContext.Provider>;
}