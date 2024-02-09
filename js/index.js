let cash = _cashier(db_cash);
let products = _products(db_product);
let purchase = _purchase(db_purchase);
let sales = _sales(db_sales)

const getCash = () => {
    let cashText = document.getElementById("cash");
    cashText.innerHTML = `Capital disponible: Q${cash.getStoredCash()}`
};

const newProductEvent = () => {
    const name = document.getElementById("np_name").value;
    const stored = new Number(document.getElementById("np_stored").value);
    const purchasePrice = new Number(document.getElementById("np_p_price").value);
    const salePrice = new Number(document.getElementById("np_s_price").value);

    try{
        cash.purchase(stored + purchasePrice);
        const newProd = products.addNewProduct(name, stored, salePrice);
        purchase.new(newProd.id, stored, purchasePrice)
    }
    catch(err){
        alert(err.error)
    }

    buildTable();
    getCash();
    document.getElementById("addProduct").reset();
    addProductEventEnd();
}

const buildTable = () => {
    let table = document.getElementById("productTable");
    let lista = table.getElementsByTagName('tbody')[0];

    products.getAllProduct().forEach((element) => {
        let row = document.createElement("tr");
        const sellButton = `sale-${element}`;
        const purchaseButton = `purchase-${element}`;

        row.innerHTML = `
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.stored}</td>
            <td>${element.price}</td>
            <td><button type="button" class="btn btn-primary" id="${sellButton}">Vender</button></td>
            <td><button type="button" class="btn btn-primary" id="${purchaseButton}">Comprar</button></td>
        `;
        lista.appendChild(row);

        document.getElementById(sellButton).addEventListener('click', (e) => {
            sellButtonEvent(element.id)
        });
        document.getElementById(purchaseButton).addEventListener('click', );
    });
}

const sellButtonEvent = (id) => {
    let container = document.getElementById("sellContainer");
    let producto = products.getProduct(id);

    container.innerHTML = `
        <div class="col">
            <h5>${producto.name}</h5>
        </div>
        <div class="col">
            <h6>Existe: ${producto.stored} kg</h6>
        </div>
        <div class="col">
            <label for"sellItem">Cantidad a vender (kg)</label>
            <input type="text" class="form-control" id="sellItem">
            <button type="button" class="btn btn-success" id"btnSellItem">Vender</button>
        </div>
        <div class="col">
            <button type="button" class="btn btn-danger" id="cancelSell">Cancelar</button>
        </div>
    `;
    document.getElementById('btnSellItem').addEventListener('click', (e) => {
        const amount = document.getElementById("sellItem").value;
        sellProductAction(producto, new Number(amount))
    })

    document.getElementById("cancelSell").addEventListener("click", cancelOp);
}

const sellProductAction = (producto, amount) => {
    try{
        const totalSale = amount * producto.price;
        producto.sale(producto.id, amount);
        cash.sale(totalSale);
        sales.new(producto.id, amount, producto.price);
    }
    catch(err){
        alert(err.error);
    }

    buildTable();
    getCash();
    cancelOp();
}

const cancelOp = () => {
    document.getElementById("sellContainer").innerHTML="";
}

const submitEvent = (e) => {
    e.preventDefault();

    switch(e.target.id){
        case 'addProduct':
            newProductEvent();
            break;
        default:
            break;
    }
}

const addProductEventStart = () => {
    document.getElementById('addProduct').style.display="block";
    document.getElementById('addProductBtn').style.display="none";

}

const addProductEventEnd = () => {
    document.getElementById('addProduct').style.display="none";
    document.getElementById('addProductBtn').style.display="block";

}

addEventListener('load', getCash);
addEventListener('load', buildTable);
addEventListener('submit', submitEvent);
document.getElementById('addProductBtn').addEventListener('click', addProductEventStart);
document.getElementById('addProductBtn').addEventListener('click', addProductEventEnd);
