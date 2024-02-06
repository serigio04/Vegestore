let cash = _cashier(db_cash);
let product = _productos(db_product);

const getCash = () => {
    let cashText = document.getElementById("cash");
    cashText.innerHTML = `Capital disponible: Q${cash.getStoredCash()}`
};

const buildTable = () => {
    let table = document.getElementById("productTable");
    let lista = table.getElementsByTagName("tbody")[0];
    lista.innerHTML = "";

    product.getAllProduct().forEach(element => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.stored}</td>
            <td>${element.price}</td>
            <td></td>
            <td></td>
        `
        lista.appendChild(row);
    });
}

addEventListener('load', getCash);
addEventListener('load', buildTable);
