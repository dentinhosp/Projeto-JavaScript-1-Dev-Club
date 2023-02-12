const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 6.2
const bitcoin = 8.3

const converValues = () => {
    const inputReal = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text");
    const currencyValueText = document.getElementById("currency-value-text");

    //realvaluetext.innerHTML = inputReal

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReal)

    if (select.value === "U$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReal / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReal / euro)
    }

    if (select.value === "₿ Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("bc-BC", {
            style: "currency",
            currency: "BTC",
        }).format(inputReal / bitcoin)
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyimg = document.getElementById("currency-img")

    if (select.value === 'U$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyimg.src = "./img/estados-unidos.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "EURO";
        currencyimg.src = "./img/Euro.png";
    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "BITCOIN";
        currencyimg.src = "./img/Bitcon.png";
    }

    converValues()
}

button.addEventListener("click", converValues)
select.addEventListener("change", changeCurrency)