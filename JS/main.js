let firstFormSelect = document.querySelector(".container-fluid .form:nth-of-type(1) select"),
  secondFormSelect = document.querySelector(".container-fluid .form:nth-of-type(2) select"),
  firstFormInput = document.querySelector(".container-fluid .form:nth-of-type(1) input"),
  secondFormInput = document.querySelector(".container-fluid .form:nth-of-type(2) input"),
  transfromButton = document.getElementById("submit")


transfromButton.onclick = getCurrency;

async function getCurrency() {
  let responseText = await fetch("https://api.currencyfreaks.com/latest?apikey=75cd6e99fe31446ca86cc0e8498e2c86"),
    currency = await responseText.json()

  if (+firstFormSelect.value === +secondFormSelect.value) {
    secondFormSelect.value = firstFormSelect.value
  } else if (firstFormSelect.value == 'USD' && secondFormSelect.value != 'USD') {
    secondFormInput.value = (firstFormInput.value * currency.rates[secondFormSelect.value]).toFixed(3)
  } else if (firstFormSelect.value != 'USD' && secondFormSelect.value == 'USD') {
    secondFormInput.value = (firstFormInput.value / currency.rates[firstFormSelect.value]).toFixed(3)
  } else {
    let dollar = firstFormInput.value / currency.rates[firstFormSelect.value]
    secondFormInput.value = (dollar * currency.rates[secondFormSelect.value]).toFixed(3)
  }

  console.log(currency)
}

console.log(Array.from(firstFormSelect.children).length)
console.log(Array.from(secondFormSelect.children).length)