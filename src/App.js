import './App.css';
import Header from './Header';
import Product from './Product';
import React, { useEffect, useState } from 'react';


const App = () => {

    let products = []

    useEffect(() => {
        const url = 'https://fakestoreapi.com/products'

        const fetchData = async() => {
            try {
                const response = await fetch(url)
                const json = await response.json()

                products = json
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()

    }, [])

    return (
        <div>
                <Header />

                <div className="flex flex-wrap -mx-4 overflow-hidden p-5">
                    <div className="my-4 px-4 w-1/3 overflow-hidden" >
                        <Product name="Fjallraven - Foldsack No. 1 Backpack" price="10" image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                    </div>
                    <div className="my-4 px-4 w-1/3 overflow-hidden" >
                        <Product name="Mens Casual Premium Slim Fit T-Shirts" price="20" image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
                    </div>
                    <div className="my-4 px-4 w-1/3 overflow-hidden">
                        <Product name="Mens Cotton Jacket" price="30" image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
                    </div>
                </div>
        </div>
    );
}

export default App;
