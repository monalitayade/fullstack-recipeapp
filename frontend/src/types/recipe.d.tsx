// export interface Ingredient {
//   name: string;
//   quantity: string;
// }
export interface Recipe {
    recipe_id:number,
    recipe_name:string,
    author_name:string,
    // description:String,
    ingredients: string[],
    steps:string[],
    calories:number,
    serving_people_count:number,
    prep_time:number,
    recipe_rate:number;
}