let firstFormSelect = document.querySelector(".container-fluid .form:nth-of-type(1) select"),
  secondFormSelect = document.querySelector(".container-fluid .form:nth-of-type(2) select"),
  firstFormInput = document.querySelector(".container-fluid .form:nth-of-type(1) input"),
  secondFormInput = document.querySelector(".container-fluid .form:nth-of-type(2) input"),
  transfromButton = document.getElementById("submit")


transfromButton.onclick = getCurrency;

async function getCurrency() {
  let currency = await fetch("https://api.currencyfreaks.com/latest?apikey=75cd6e99fe31446ca86cc0e8498e2c86"),
    responseText = await currency.json()
  if (firstFormSelect.value == 'USD' && secondFormSelect.value != 'USD') {
    secondFormInput.value = (firstFormInput.value * responseText.rates[secondFormSelect.value]).toFixed(4)
  } else if (firstFormSelect.value != 'USD' && secondFormSelect.value == 'USD') {
    secondFormInput.value = (firstFormInput.value / responseText.rates[firstFormSelect.value]).toFixed(4)
  } else {
    let dollar = firstFormInput.value / responseText.rates[firstFormSelect.value]
    secondFormInput.value = (dollar * responseText.rates[secondFormSelect.value]).toFixed(4)
  }
}