import React from 'react'

function CartItem({item, value}) {
    const {id, img, price, total,title, count} = item;
    const {increment, decrement, removeItem} = value;

    return (
        <div className="row my-2 text-capitalize text-center mb-4">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width: "6rem", height: "6rem"}} className="img-fluid" alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2 mt-1 mt-lg-4">
                <span className="d-lg-none "><strong>product : </strong></span>
            {title}
            </div>
            <div className="col-10 mx-auto col-lg-2 mt-1 mt-lg-4">
                <span className="d-lg-none "><strong>price : </strong></span>
            $ {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 mt-2 mt-lg-4">
                <div className="d-flex justify-content-center">
                    {(count > 1) ? <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span> : <span className="cart-icon btn btn-black " onClick={() => removeItem(id)} >
                    <i className="fas fa-trash" />
                </span> }
                    
                    <span className="btn btn-black mx-1">{count}</span>
                    <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
                </div>
            </div>
            {/* <div className="col-10 mx-auto col-lg-2 mt-4">
                
            </div> */}
            <div className="col-10 mx-auto col-lg-2 mt-lg-4 mt-1" style={{"font-size": "1.3rem"}}>
                <strong>item total : $ {total}</strong>
            </div>
            <hr />
        </div>
    )
}

export default CartItem
