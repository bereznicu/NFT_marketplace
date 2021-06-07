import React, { useContext } from 'react';
import { CreateItemsContext } from '../../providers/GalleryProviders/CreateItemsContext';
import {useForm} from 'react-hook-form';
import { CreateItemsContainer, NftForm, StyledInput, CreateItemButton, PreviewFile, StyledImg } from './CreateItemsElements';
import FirebaseProvider from '../../providers/Firebase/firebaseProvider';

const CreateItemsForm = () => {
    const fields = new Map([["External Link (optional)", "e.g.: http://yoursite.com/item"], ["Description (optional)", "Some words about the item"]]);
    const [file, loadFile] = useContext(CreateItemsContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) => console.log(data);
    const db = new FirebaseProvider();
    console.log(db.storageRef);

    return (
            <NftForm onSubmit={handleSubmit(onSubmit)}>
                <h1 style={{ "marginBottom": "40px" }}> Create your item</h1>
                <h3 style={{ "marginBottom": "20px" }}> Upload file</h3>
                <PreviewFile file={file}>
                    <StyledImg src={file} />
                </PreviewFile>
                <input style={{ "marginBottom": "20px" }} type="file" {...register("file", { required: true })} onChange={e => {
                    loadFile(e.target.files[0]);
                }} />
                {errors.file && <span style={{ "color": "red" }}>Upload a file</span>}
                <h4>Item Name</h4>
                <StyledInput type="text" placeholder="e.g.: Blue Sneakers" {...register("ItemName", { required: true })} />
                {errors.ItemName && <span style={{ "color": "red" }}>Item name can't be empty</span>}
                {
                    Array.from(fields.keys()).map((key) => (
                        <>
                            <h4 > {key} </h4>
                            <StyledInput type="text" name={key} placeholder={fields.get(key)} {...register(key)} />
                        </>
                    ))
                }
                <CreateItemButton type="submit" value="Create Item" />
            </NftForm>
    )
}

export default CreateItemsForm;