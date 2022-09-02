import Item from '../Item/Item.js'

const ItemList = ({info = []}) => {
    return(
      info.map(productos => <Item key={productos.id} info={productos}/>)
    );
}

export default ItemList;