let cash = _cashier(db_cash);
let product = _productos(db_product);

const getCash = () => {
    let cashText = document.getElementById("cash");
    cashText.innerHTML = `Capital disponible: Q${cash.getStoredCash()}`
};

const buildTable = () => {
    const Table = document.getElementById("")
}

addEventListener('load', getCash)