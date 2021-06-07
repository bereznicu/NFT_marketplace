import React from 'react'
import CreateItemsSection from '../../components/GallerySection'
import { CreateItemsProvider } from '../../providers/GalleryProviders/CreateItemsContext'

const Gallery = () => {
    return (
        <>
            <CreateItemsProvider>
                <CreateItemsSection />
            </CreateItemsProvider>
        </>
    )
}

export default Gallery;
