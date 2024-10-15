function printFullName(firstName, lastName) {
  return firstName + ' ' + lastName
}

console.log(printFullName('Somay', 'Maan'))

setTimeout(function () {
  console.log('Will be logged after 3 seconds')
}, 3000)