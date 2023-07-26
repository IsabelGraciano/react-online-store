export type isActiveType = {
    isActive: boolean;
};

export type layoutProps = {
    children: JSX.Element | JSX.Element[] | string
}

export type product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    quantity: number,
    rating: {
        rate: number,
        count: number,
    }
}

export type orderCardProps = {
    id: number,
    title: string, 
    imageURL: string,
    price: number,
    quantity: number,
    handleDeleteProduct?: Function
}

export type ordersCardProps = {
    totalPrice: number,
    totalProducts: number,
}

export type order = {
    id: number,
    date: string,
    products: product[],
    totalProducts: number,
    totalPrice: number
}