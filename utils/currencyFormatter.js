const currencyFormatter = new Intl.NumberFormat("sv-SE", {
    currency: "sek",
    style: "currency",
    minimumFractionDigits: 2
})

module.exports = currencyFormatter;