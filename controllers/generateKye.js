function generateUniqueNumber(existingNumbers) {
  
  console.log(existingNumbers, "code nomber");
  // Function to generate a random 8-digit number
  const generateRandomNumber = () => {
    return Math.floor(10000000 + Math.random() * 90000000);
  };
  let newNumber;
  // Generate a new number until a unique one is found
  do {
    newNumber = generateRandomNumber();
  } while (existingNumbers.includes(newNumber));

  // Return the unique number
  return newNumber;
}
module.exports = generateUniqueNumber;

