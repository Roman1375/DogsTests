
import {makeOrder} from "./reusableFunctions/makeOrder.cy";
import {createNewUser} from "./reusableFunctions/createNewUser.cy";

describe('Перевірка додавання товарів в кошик та оформлення замовлення', () => {
    it('Додавання товару в кошик та оформлення замовлення', () => {
        createNewUser();
        makeOrder();
    })
})