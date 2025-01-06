const copyCodeButton = document.querySelector(".copy-code-button");

  copyCodeButton.addEventListener('mouseover', () => {
    circle.setAttributeNS(null, "fill", "red");
  });
  
  circle.addEventListener('mouseout', () => {
    circle.setAttributeNS(null, "fill", "blue");
  });
