import { useState } from 'react'
import { CategoryAdd } from '../Hijos/CategoryAdd'
import { GiftGrid } from '../Hijos/GiftGrid'

export const GiftExpertDApp = () =>{
    const [categories, setCategories] = useState(['Zodiac'])

    const onAddCategory = (category) =>{
        setCategories(list => [...list, category])
    }

    return (
        <>
            <h1>Gift Expert</h1>

            <CategoryAdd onAddCategory={onAddCategory}/>
            {
                categories.map(
                    (category,key) =>
                    {
                        return <GiftGrid  category={category} key={key}/>
                    }
                )
            }
        </>
    )
}
