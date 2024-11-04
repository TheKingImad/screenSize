function getScreenSize() {
  const width = window.window.screen.width;
  const height = window.window.screen.height;

  // Create a new paragraph element
  const displayElement = document.createElement('p');
  displayElement.textContent = `${width} X ${height} px`;
  displayElement.style.textAlign = 'center'; // Center the text
  displayElement.style.fontSize = '45px'; // Center the text
  displayElement.style.margin = '100px auto'; // Center the text

  // Append the element to the body
  document.body.appendChild(displayElement);
}

getScreenSize();