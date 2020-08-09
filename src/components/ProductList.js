import React, { Component } from 'react'
import Title from './Title'
import { storeProducts } from '../data'

class ProductList extends Component {
    state={
        products: storeProducts
    }

    render() {
        console.log(this.state.products)

        return (
            <>
                <div className="py-5">
                    <div className="container">
                        <Title name="our " title="products" />
                        <div className="row" />
                    </div>
                </div>
            </>
        )
    }
}

export default ProductList