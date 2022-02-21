import './App.css';
import React from 'react';
import Product from './components/Product';
import Loader from './components/Loader';
import Search from './components/Search';




function App() {
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        fetch('https:fakestoreapi.com/products')
            .then(results => results.json())
            .then(data => setProducts(data))
            .catch((error) => console.log(error))
    }, []);

    return (
      

        <div>

            <div className='max-w-2xl mx-auto lg:max-w-7xl'>
                 

                {
                    products.length === 0 ? (
                        <div className='text-center mt-5'>
                            <Loader />
                        </div>
                    ) : (
                        <div className="flex flex-wrap -mx-3 overflow-hidden">

                            <div className="my-3 px-3 overflow-hidden sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
                                <Search/>
                           </div>

                            <div className="my-3 px-3 overflow-hidden sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3">
                                <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8'>
                                    {
                                        products.map((product) => (
                                            <Product
                                                key={product.id}
                                                name={product.title}
                                                price={product.price}
                                                image={product.image} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>  



    );
}


export default App;








