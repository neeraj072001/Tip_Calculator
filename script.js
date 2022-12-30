const billValue = document.getElementById('billTotalInput')
const tipValue = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')
let numberOfPeople = Number(numberOfPeopleDiv.innerText)
const calculateBill = () => {
  const bill = Number(billValue.value)
  const tipAmount = Number(tipValue.value)
  const total = tipAmount + bill
  const perPersonTotal = total / numberOfPeople
  perPersonTotalDiv.innerText = `₹${perPersonTotal.toFixed(2)}`
}
const increasePeople = () => {
  numberOfPeople += 1
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
}
const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return
  }
  numberOfPeople -= 1
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
}
