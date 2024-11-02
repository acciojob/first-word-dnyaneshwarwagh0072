function firstWord(s) {
  // Trim any leading and trailing spaces and split the string by spaces
  let trimmedStr = s.trim();
  
  // Check if the string is empty after trimming
  if (trimmedStr === '') {
    return '';
  }

  // Split the trimmed string by spaces and return the first part
  return trimmedStr.split(' ')[0];
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
