export function generateRandomNumber(size) {
  return Math.floor(Math.random() * size);
}

export function generateRandomString(size) {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substring(0, size);
}

export function generateRandomEmail() {
  return `test+${generateRandomString(5)}+${generateRandomNumber(
    100000
  )}@gmail.com`;
}
