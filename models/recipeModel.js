const mongoose = require('mongoose');


const recipeSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String,
    },
    difficultyLevel: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
    },
    preparationTime: {
        type: String,
    },
    cookingTime: {
        type: String,
    },
    ingredients: [
        {
            name: {
                type: String,
            },
            quantity: {
                type: String,
            },
            unit: {
                type: String
            }
        }
    ],
    tags: [
        {
            type: String
        }
    ],
    categories: [
        {
            type: String
        }
    ],
    recipeImage: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: [
        {
            type: String
        }
    ],
    rating: {
        type: Number
    },
    savedByUsers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;