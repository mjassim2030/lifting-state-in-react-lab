// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    stack.length > 0 ? (
      <ul>
        <li className="topBun"></li>
        {stack.map((ingredient, index) => (
          <Ingredient
            key={`${ingredient.name}_${index}`}
            ingredient={ingredient}
            onClick={removeFromBurger}
            type="remove"
          />
        ))}
        <li className="bottomBun"></li>
      </ul>
    ) : (
      <h2>No Ingredients</h2>
    )
  );
};

export default BurgerStack;