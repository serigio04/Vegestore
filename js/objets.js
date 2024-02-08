const _cashier = (start) => {
    let cash = start;
    return {
        sale: (total) =>{
            cash += total;
        },
        purchase: (total) =>{
            if(total>cash){
                cash -= total;
            }else{
                throw{
                    error: "Fondos insuficientes"
                }
            }
        },
        getStoredCash: () => {
            return cash;
        }
    }
};

const _products = (start) => {
    let products = start;
    return{
        sale: (id, amount) => {
            const id_p = products.finIndex((item) => item.id == id);
            if (id_p > -1){
                if( products[id_p].stored >= amount ){
                    products.id_p.stored -= amount;
                }else{
                    throw{
                        error: "Productos insuficientes"
                    }
                }
            }else{
                throw{
                    error: "No hay coincidencias con el producto"
                }
            }
        },
        buy: (id, amount) => {
            const id_p = products.finIndex((item) => item.id == id);
            if (id_p > -1){
                products[id_p].stored += amount;
            }else{
                throw{
                    error: "Producto no encontrado"
                }
            }
        },
        getAllProduct: () => {
            return products;
        },
        getProduct: (id) => {
            const id_p = products.finIndex((item) => item.id == id);
            return products[id_p]
        },
        addNewProduct: (name, stored, price) => {
            const lastProduct = products[products.length - 1];
            const newProd = {
                id: lastProduct.id + 1,
                name: name,
                stored: stored,
                price: price
            };
            products.push(newProd);
            return newProd;
        },
    };
}

const _sales = (start) => {
    let sales = start;
    return{
        new: (id, quantity, price) => {
            sales.push({
                productId: id,
                date: new Date(),
                quantity: quantity,
                totalPrice: quantity * price
            });
        },
        getAllSales: () => {
            return sales;
        }
    };
};

const _purchase = (start) => {
    let pruchase = start;
    return{
        new: (id, quantity, price) => {
            pruchase.push({
                productId: id,
                date: new Date(),
                quantity: quantity,
                totalPrice: quantity * price,
                price: price
            });
        },
        getAllPruchase: () => {
            return pruchase;
        }
    };
};