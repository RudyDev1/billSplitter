const priceInput = document.querySelector('#price')
const peopleInput = document.querySelector('#people')
const tipSelect = document.querySelector('#tip-select')
const btn = document.querySelector('.count')
const errorInfo = document.querySelector('.error')
const tipInfo = document.querySelector('.tip-info')
const tip = document.querySelector('.tip-info .tip')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const removeClassShow = () => {
	costInfo.classList.remove('show')
	tipInfo.classList.remove('show')
}

const checkInputs = () => {
	if (priceInput.value == '' || peopleInput.value == '' || tipSelect.value == -1) {
		removeClassShow()
		errorInfo.textContent = 'Uzupełnij wszystkie pola!'
	} else if (priceInput.value <= 0 || peopleInput.value <= 0) {
		removeClassShow()
		errorInfo.textContent = 'Wartości muszą być dodatnie!'
	} else if (Number.isInteger(!peopleInput)) {
		removeClassShow()
		errorInfo.textContent = 'Liczba osób musi być całkowita!'
	} else {
		errorInfo.textContent = ''
		countBill()
	}
}

const countBill = () => {
	const price = Number(priceInput.value)
	const people = Number(peopleInput.value)
	const tipAmount = Number(tipSelect.value)

	const tipToPay = price * tipAmount
	const amountToPay = (price + tipToPay) / people

	costInfo.classList.add('show')
	cost.textContent = amountToPay.toFixed(2)

	tipInfo.classList.add('show')
	tip.textContent = tipToPay.toFixed(2)
}

btn.addEventListener('click', checkInputs)
