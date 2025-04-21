const API_KEY = '23edc1c534c216e8777cbf61';
const url_currancy = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;
const selects = document.querySelectorAll('#selectList1, #selectList2');
const btnConvert = document.querySelector('.btn');
const spanDisplayResult = document.getElementById('div')


let firstCurrency;
let secondCurrency;
let inputValue

fetch(url_currancy)
  .then(response => response.json())
  .then(result => {
    const data = result.supported_codes;

    data.forEach((contr) => {
      const option = document.createElement('option');
      option.textContent = `${contr[0]} - ${contr[1]}`;
      option.value = contr[0];

      selects.forEach(select => {
        const clonedOption = option.cloneNode(true);
        select.append(clonedOption);
      });
    });
  })
  .catch(error => console.log('error', error));

selects[0].addEventListener('change', (e) => {
  const selectedValue = e.target.value;
  firstCurrency = selectedValue;
  console.log("Selected from: ", selectedValue);
});

selects[1].addEventListener('change', (e) => {
  const selectedValue = e.target.value;
  secondCurrency = selectedValue;
  console.log("Selected to: ", selectedValue);
});

async function convertCurrency(first, second, value) {
  if (!first || !second) {
    console.log('Please select both currencies!');
    return;
  }

  const url_converter = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${first}/${second}`;

  await fetch(url_converter)
    .then(response => response.json())
    .then(result => {
      const conversionRate = result.conversion_rate;
      if (conversionRate) {
        console.log(`Conversion Rate from ${first} to ${second}: ${conversionRate * value}`);
        console.log(spanDisplayResult);
        spanDisplayResult.innerHTML = `${conversionRate * value} ${second}`
      } else {
        console.log('Error: Could not retrieve conversion rate.');
      }
    })
    .catch(error => {
      console.log('error', error)
      spanDisplayResult.textContent = 'Error, try again or refresh the page!'
      spanDisplayResult.style.color = 'red'
      spanDisplayResult.style.textDecoration = 'line-through'
    }
    );
}

btnConvert.addEventListener('click', (e) => {
  e.preventDefault()
  const input = document.querySelector('#input').value



  console.log('Input value:', input);
  console.log(firstCurrency);
  console.log(secondCurrency);

  if (firstCurrency && secondCurrency) {
    convertCurrency(firstCurrency, secondCurrency, input);
  } else {
    console.log('Please select both currencies before converting!');
    alert('Please select both currencies before converting!')
  }
});


btnConvert.addEventListener('click',fetchconver())