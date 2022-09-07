import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({info}) => {

  const onAdd = (cantidad) => {
    (info.stock > 0) && console.log(cantidad)
  }

    return(
      <div className="cardProductDetail">
<img src={info.pictureUrl}></img>
<div>
<h1 className="productTitleDetail">{info.title}</h1>
<p className="productPriceDetail">${info.price}</p>
<p className="productDescriptionDetail">{info.description}</p>
<ItemCount initial={info.initial} stock={info.stock} onAdd={onAdd}/>
      </div>
      </div>
    );
}

export default ItemDetail;