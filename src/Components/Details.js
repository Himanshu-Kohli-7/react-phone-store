import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id,title,price,company,img,info,inCart}
                    = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* product title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text -slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* product image */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="product" className="img-fluid" />
                                </div>
                            {/* product info */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h1>model : {title}</h1>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    made by : {company}
                                </h4>
                                <h2 className="text-blue mt-3 mb-3">
                                    <strong>
                                        price : ${price}
                                    </strong>
                                </h2>
                                <p className="text-capitalize  mt-2 mb-0">
                                    <strong>
                                    info about the product:
                                    </strong>
                                </p>
                                <p className="text-muted lead">{info}</p>
                                <div>
                                    <Link to="/">

                                    <ButtonContainer>
                                        back to products
                                    </ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                    cart
                                    disabled={inCart? true : false }
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                    >
                                        {inCart ? "in cart" : "add to cart"}
                                    </ButtonContainer>
                                    

                                </div>
                            </div>
                            </div>
                        </div>
                    )
                }}
            
            </ProductConsumer>
        )
    }
}
