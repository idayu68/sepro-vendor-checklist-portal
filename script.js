function resetChecklist() {
  const inputs = document.querySelectorAll('input[type="radio"], textarea');

  inputs.forEach(input => {
    if (input.type === "radio") {
      input.checked = false;
    } else {
      input.value = "";
    }
  });
}

function savePDF() {
  window.print();
}
