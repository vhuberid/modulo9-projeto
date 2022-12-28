const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")
const dolar = 5.27
const euro = 5.60

const convertValues = () => {
    const inputReais = document.getElementById("input-Real").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")

    realValueText.innerHTML= new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "US§ Dólar Americano") {
        currencyValueText.innerHTML= new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais/dolar)
    }
    if (select.value === "€ Euro") {
    currencyValueText.innerHTML= new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(inputReais/euro)
}
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")
    if (select.value === "€ Euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./images/euro.svg"
    }
    if (select.value === "US§ Dólar Americano"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./images/eua.svg"
    }
    convertValues()
}
button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)