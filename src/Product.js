function Product(props) {
    return (
        <div
            className=""
            >
            <div className="group relative">
                <div
                className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
                >
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
            </div>
            </div>

    )
}

export default Product;
