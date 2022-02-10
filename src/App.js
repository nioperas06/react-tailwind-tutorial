import './App.css';
import React from 'react';
import Header from './components/Header';
import Product from './components/Product';


function App() {
    const [loading, setLoading] = React.useState(true);
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(results => results.json())
            .then(data => {
                setProducts(data)
            })
            .catch((error) => console.log(error));
    }, []);

    React.useEffect(() => {
        if (products.length !== 0) {
            setLoading(false);
        }
    }, [products]);

    return (
        <div>
            <Header />
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {
                            loading ?
                            (
                                <h1>Loading...</h1>
                            ) :
                            (
                                products.map((product) => (
                                    <div key={product.id}>
                                        <Product
                                            name={product.title}
                                            price={product.price}
                                            image={product.image} />
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
