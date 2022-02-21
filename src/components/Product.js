

function Product(props) {
    return (
        <div>
            <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                        src={`${props.image}`}
                        alt="Front of men&#039;s Basic Tee in black."
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href="#">
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                { props.name }
                            </a>
                        </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$ { props.price } </p>
                </div>
                <p className="text-center mt-3">
                    <button type="button" className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add item</button>
                </p>
            </div>
        </div>
    )
}

export default Product;
