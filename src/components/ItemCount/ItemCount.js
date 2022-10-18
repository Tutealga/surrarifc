import './ItemCount.css';
import { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(initial);

    const add = () => {
        (stock > counter) && setCounter(counter + 1);
    }

    const remove = () => {
     (counter > 1) && setCounter(counter - 1);
    }

    return (
        <div id="addCart" className="mt-3">
            <InputGroup id="divAddCart" className="mb-3">
                <Button id="btnDecrease" className="pt-0" onClick={remove}>-</Button>
                <FormControl className="text-center" 
                    id="quantityAddCart"
                    value={counter}
                />
                <Button id="btnIncrease" className="pt-0" onClick={add}>+</Button>
            </InputGroup>
            <Button onClick={() => onAdd(counter)} id="btnAddCart" className="pt-1">
                Agregar al carrito
            </Button>
        </div>
    )
}

export default ItemCount;