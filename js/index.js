let cash = _cashier(db_cash);
let products = _products(db_product);

const SubmitEvent = (e) => {
    e.preventDefault();
    switch(e.target.id){
        case 'addProduct':
            newProductEvent();
            break;
        default:
            break;
    }
}

const getCash = () => {
    let cashText = document.getElementById("cash");
    cashText.innerHTML = `Capital disponible: Q${cash.getStoredCash()}`
};

const newProductEvent = () => {
    
}

const buildTable = () => {
    let table = document.getElementById("productTable");
    let lista = table.getElementsByTagName('tbody')[0];

    products.getAllProduct().forEach((element) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.stored}</td>
            <td>${element.price}</td>
            <td></td>
            <td></td>
        `;
        lista.appendChild(row);
    });
}

const addProductEventStart = () => {
    document.getElementById('addProduct').style.display="block";
    document.getElementById('addProductBtn').style.display="none";

}

addEventListener('load', getCash);
addEventListener('load', buildTable);
addEventListener('submit', SubmitEvent);
document.getElementById('addProductBtn').addEventListener('click', addProductEventStart)