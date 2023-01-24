import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {

    //Nunca usar condicionales con hooks    
    const [categories, setCategories] = useState(['One Punch Man'])

    const onAddCategory = (newCategory) => {

        const category = categories.find(c => {
            return c.toLowerCase() === newCategory.toLowerCase();
        })

        if (category) return

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}
