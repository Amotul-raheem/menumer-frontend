
export const RecipeList = [
    {
        index: 1,
        RecipeImage:"/img/recipe1.jpg",
        RecipeName:"Strawberry cheese cake",
        RecipeDescription: "Harira is a classic Moroccan comfort soup made with tomatoes",
        CookTime: "1hr 10mins"
    },
    {
        index: 2,
        RecipeImage:"/img/recipe3.jpg",
        RecipeName:"English breakfast with bananas with",
        RecipeDescription: "Harira is a classic Moroccan comfort soup made with tomatoes",
        CookTime: "1hr 10mins"
    },
    {
        index: 3,
        RecipeImage:"/img/recipe2.jpg",
        RecipeName:"Strawberry cheese cake",
        RecipeDescription: "Harira is a classic Moroccan comfort soup made with tomatoes",
        CookTime: "1hr 10mins"
    },
    {
        index: 4,
        RecipeImage:"/img/recipe1.jpg",
        RecipeName:"English breakfast with bananas with",
        RecipeDescription: "Harira is a classic Moroccan comfort soup made with tomatoes",
        CookTime: "1hr 10mins"
    },
    {
        index: 5,
        RecipeImage:"/img/recipe4.jpg",
        RecipeName:"English breakfast with bananas with",
        RecipeDescription: "Harira is a classic Moroccan comfort soup made with tomatoes",
        CookTime: "1hr 10mins"
    },
    {
        index: 5,
        RecipeImage:"/img/recipe2.jpg",
        RecipeName:"English breakfast with bananas with",
        RecipeDescription: "Harira is a classic Moroccan comfort soup made with tomatoes",
        CookTime: "1hr 10mins"
    },
    {
        index: 6,
        RecipeImage:"/img/recipe3.jpg",
        RecipeName:"Strawberry cheese cake",
        RecipeDescription: "Harira is a classic Moroccan comfort soup made with tomatoes",
        CookTime: "1hr 10mins"
    },
    {
        index: 7,
        RecipeImage:"/img/recipe1.jpg",
        RecipeName:"Brocolli Onion salad",
        RecipeDescription: "Harira is a classic Moroccan comfort soup made with tomatoes",
        CookTime: "1hr 10mins"
    },
    {
        index: 8,
        RecipeImage:"/img/recipe2.jpg",
        RecipeName:"English breakfast with bananas with",
        RecipeDescription: "Harira is a classic Moroccan comfort soup made with tomatoes",
        CookTime: "1hr 10mins"
    },
    {
        index: 9,
        RecipeImage:"/img/recipe3.jpg",
        RecipeName:"Brocolli Onion salad",
        RecipeDescription: "Harira is a classic Moroccan comfort soup made with tomatoes",
        CookTime: "1hr 10mins"
    },
    {
        index: 10,
        RecipeImage:"/img/recipe4.jpg",
        RecipeName:"Strawberry cheese cake",
        RecipeDescription: "Harira is a classic Moroccan comfort soup made with tomatoes",
        CookTime: "1hr 10mins"
    },
    {
        index: 11,
        RecipeImage:"/img/recipe4.jpg",
        RecipeName:"Brocolli Onion salad",
        RecipeDescription: "Harira is a classic Moroccan comfort soup made with tomatoes",
        CookTime: "1hr 10mins"
    },
]

export const RecipeList2 = RecipeList.reverse()
export const RecipeList3 = RecipeList2.filter((x,index) => index % 2 !== 0);
export const RecipeList4 = RecipeList.filter((x,index) => index % 2 === 0);