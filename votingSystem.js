const poll = new Map()

const addOption=(option)=>{
  if (option===''){
    return 'Option cannot be empty.'
  }
  if (!poll.has(option)){
    poll.set(option,new Set())
    return `Option "${option}" added to the poll.`
  }
  return `Option "${option}" already exists.`
}

const vote = (option,voterId)=>{
  if (!poll.has(option)){
    return `Option "${option}" does not exist.`
  }
  const voters = poll.get(option)
  if (voters.has(voterId)){
    return `Voter ${voterId} has already voted for "${option}".`
  }
  voters.add(voterId)
  return `Voter ${voterId} voted for "${option}".`
}

console.log(addOption('Turkey'))
console.log(addOption('Morocco'))
console.log(addOption('Spain'))
console.log(addOption('Malaysia'))
console.log(vote('Turkey',345))
console.log(vote('Turkey',3425))
console.log(vote('Morocco',345))
console.log(vote('Massa',345))
console.log(vote("Malaysia", "traveler1"))

const displayResults = ()=>{
  let result = `Poll Results:\n`
  poll.forEach((value,key)=>{
    result += `${key}: ${value.size} votes\n`
  })
  return result.trim()
}

console.log(displayResults())