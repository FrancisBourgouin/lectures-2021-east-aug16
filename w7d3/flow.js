let bob = {a:1}

const changeBob = (newValue) => {
  bob = newValue
}

setTimeout(() => changeBob({a:2}), 1000)
setTimeout(() => changeBob({...bob, b:2}), 1000)

// {a:2,b:2}


setNumber(6) // pending number is 6
setNumber(5) // pending number is 5
setNumber(prev => prev + 7) // pending number is 7