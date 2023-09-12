import { useState } from 'react'
import { AddCategory } from './Hijos/AddCategory'
import { GiftGrid } from './Hijos/GiftGrid'

export const GiftExpertDApp = () =>{
    const [categories, setCategories] = useState(['Zodiac'])

    const onAddCategory = (category) =>{
        setCategories(list => [...list, category])
    }

    return (
        <>
            <h1>Gift Expert</h1>

            <AddCategory onAddCategory={onAddCategory}/>
            {
                categories.map(
                    (category,key) =>
                    {
                        return <GiftGrid category={category} key={key}/>
                    }
                )
            }
        </>
    )
}
