// src/components/IngredientList/IngredientList.jsx

import Ingredient from "../Ingredient/Ingredient";

const IngredientList = ({ingredients, addToBurger}) => {
    return (
        <ul>
            {ingredients.map((ingredient, index) => (
                <Ingredient
                    key={`${ingredient.name}_add_${index}`}
                    ingredient={ingredient}
                    onClick={addToBurger}
                    type="add"
                />
            ))}

        </ul>
    );
};

export default IngredientList;