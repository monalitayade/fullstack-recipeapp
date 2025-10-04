export interface createRecipe {
    recipe_name:string,
    recipe_rate:number,
    author_name:string,
    calories:number,
    category:string,
    prep_time:string,
    people_count:number,
    ingredients:string[],
    steps:string[]
}

// recipe_name,recipe_rate,author_name,calories,category,prep_time,people_count,ingredients,steps