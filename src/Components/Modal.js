import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import  styled  from 'styled-components';
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img,title,price,} =  value.modalProduct;

                    if(!modalOpen){
                        return null;
                    } else {
                        return (
                            <ModelContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5 ">
                                            <h5> 
                                            <strong>
                                                item added to a cart
                                                </strong>
                                                </h5>
                                                <img src={img} className="img-fluid" alt="product" />
                                                <h5><strong>{title}</strong></h5>
                                                <h5 className="text-muted">price: $ {price}</h5>
                                                <Link to="/">
                                                    <ButtonContainer onClick={() => closeModal()}>
                                                        continue shopping
                                                    </ButtonContainer>
                                                </Link>
                                                <Link to="/cart">
                                                    <ButtonContainer cart onClick={() => closeModal()}>
                                                        go to cart
                                                    </ButtonContainer>
                                                </Link>
                                                
                                        </div>
                                    </div>
                                </div>
                            </ModelContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModelContainer = styled.div`
  position: fixed;
  top: 0;  
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  #modal {
        background: var(--mainWhite);
  }
`;
