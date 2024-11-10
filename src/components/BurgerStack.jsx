// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return (
        <ul>
            {
                props.stack.length ?
                    displayStack()
                    :
                    <li><h3>No Ingredients.</h3></li> // استخدام `<li>` للحفاظ على هيكل القائمة
            }
        </ul>
    );

    // function to list all ingredients in stack
    function displayStack() {
        return props.stack.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
                {ingredient.name}
                <button onClick={() => props.removeFromBurger(index)}>-</button>
            </li>
        ));
    }
};

export default BurgerStack;
