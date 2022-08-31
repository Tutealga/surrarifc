import './ItemCount.css';
import { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial);

    const agregar = () => {
        (stock > contador) && setContador(contador + 1);
    }

    const quitar = () => {
     (contador > 1) && setContador(contador - 1);
    }

    return (
        <div id="agregarCarrito" className="mt-3">
            <InputGroup id="divAgregarCarrito" className="mb-3">
                <Button id="btnDecrementar" className="pt-0" onClick={quitar}>-</Button>
                <FormControl className="text-center" 
                    id="cantidadAgregarCarrito"
                    value={contador}
                />
                <Button id="btnIncrementar" className="pt-0" onClick={agregar}>+</Button>
            </InputGroup>
            <Button onClick={() => onAdd(contador)} id="btnAgregarCarrito" className="pt-1">
                Agregar al carrito
            </Button>
        </div>
    )
}

export default ItemCount