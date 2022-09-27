import Item from '../Item/Item.js'

const ItemList = ({info}) => {
    return(
      info.map(products => <Item key={products.id} info={products}/>)
    );
}

export default ItemList;