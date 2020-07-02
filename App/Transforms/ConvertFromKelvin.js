// export default (kelvin: number) => {
//   const celsius = kelvin - 273.15
//   const fahrenheit = (celsius * 1.8000) + 32

//   return Math.round(fahrenheit)
// }

const email = text => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(text).toLowerCase())
}

const tenNumber = text => {
  return /^\d{10}$/.test(text)
}

const empty = text => {
  return !!text
}

const name = text => {
  return /^[a-zA-Z ]{2,30}$/.test(text)
}

export default ({
  email,
  tenNumber,
  name,
  empty
})
