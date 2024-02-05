const db_cash = 1000;

const db_product = [
    {
        id: 1, 
        name: "apple",
        stored: 1500,
        price: 15
    },
    {
        id: 2, 
        name: "watermelon",
        stored: 800,
        price: 20
    },
    {
        id: 3, 
        name: "pineapple",
        stored: 1000,
        price: 12
    },
    {
        id: 4, 
        name: "strawberry",
        stored: 3000,
        price: 3
    },
];

const db_sales = [
    {
        producto_id: 1,
        date: new Date(2024,1,1),
        quantity: 80,
        totalPrice: 1200
    }
];

const db_purchase = [
    {
        producto_id: 2,
        date: new Date(2024,1,1),
        quantity: 100,
        price: 12,
        totalPrice: 1200
    }
];