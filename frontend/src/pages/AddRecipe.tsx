import react, { useState } from "react";
import { useRecipeCreate } from "../context/AddRecipeContext";

const AddRecipe:React.FC = () => {

    const {postRecipe,loading,error} = useRecipeCreate();

    // recipe_name,recipe_rate,author_name,calories,category,prep_time,people_count,ingredients,steps
    const [formData, setFormData] = useState({
        recipe_name:"",
        recipe_rate:"",
        author_name:"",
        calories:"",
        category:"",
        preparation_time:"",
        people_count:"",
        ingredients:"",
        steps:""
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        let isArrayField = ['ingredients','steps'].includes(name);
        setFormData(prev => ({...prev,[name]:isArrayField ? value.split(/[\n,]+/).map(item => item.trim()) : value}));
    } 

    const handleSubmit = async(e:React.FormEvent) => {
        e.preventDefault();
        // console.log("formData==>",formData);
        // await postRecipe(formData);
        // try{
        //     const res = await postRecipe({
        //         recipe_name:formData?.recipe_name,
        //         recipe_rate:formData?.recipe_rate,
        //         author_name:formData?.author_name,
        //         calories:formData?.author_name,
        //         category:formData?.author_name || "",,
        //         preparation_time:"",
        //         people_count:"",
        //         ingredients:"",
        //         steps:""
        //     })
        // }
        
    }
 return ( 
    <div className="flex flex-col items-center mt-24">
        <h1 className="w-auto text-5xl font-semibold font-sans text-amber-900">Add recipe</h1>
        <form onClick={handleSubmit} className="w-1/2 flex flex-col justify-center items-center">
            <div className="w-full flex flex-col mb-6">
                <label className="flex font-sans font-semibold text-lg text-amber-950 capitalize mb-2">Recipe Name</label>
                <input type="text" name="recipe_name" className="w-full border border-amber-900 rounded-md p-2 focus:outline-none" value={formData.recipe_name} onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-col mb-6">
                <label className="flex font-sans font-semibold text-lg text-amber-950 capitalize mb-2"> calories</label>
                <input type="text" name="calories" className="w-full border border-amber-900 rounded-md p-2 focus:outline-none" value={formData?.calories} onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-col mb-6">
                <label className="flex font-sans font-semibold text-lg text-amber-950 capitalize mb-2">Category</label>               
                <input type="text" name="category" className="w-full border border-amber-900 rounded-md p-2 focus:outline-none" value={formData?.category} onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-col mb-6">
                <label className="flex font-sans font-semibold text-lg text-amber-950 capitalize mb-2">preparation time</label>               
                <input type="text" name="preparation_time" className="w-full border border-amber-900 rounded-md p-2 focus:outline-none" value={formData?.preparation_time} onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-col mb-6">
                <label className="flex font-sans font-semibold text-lg text-amber-950 capitalize mb-2">Serving people count</label>               
                <input type="text" name="people_count" className="w-full border border-amber-900 rounded-md p-2 focus:outline-none" value={formData?.people_count} onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-col mb-6">
                <label className="flex font-sans font-semibold text-lg text-amber-950 capitalize mb-2">Ingredients</label>               
                <textarea name="ingredients" rows={1} className="w-full border border-amber-900 rounded-md p-2 focus:outline-none" value={formData.ingredients} onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-col mb-6">
                <label className="flex font-sans font-semibold text-lg text-amber-950 capitalize mb-2">Steps</label>               
                <textarea name="steps" rows={10} className="w-full border border-amber-900 rounded-md p-2 focus:outline-none" value={formData.steps} onChange={handleChange}/>
            </div>

            <div className="w-full flex flex-col mb-6">
                <button className=" bg-amber-800 text-white py-2 rounded-md cursor-pointer">Upload</button>
            </div>
        </form>
    </div>
    
 )
}

export default AddRecipe;