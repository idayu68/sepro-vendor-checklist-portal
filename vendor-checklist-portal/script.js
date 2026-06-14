function resetChecklist() {
  const inputs = document.querySelectorAll('input[type="checkbox"], textarea');

  inputs.forEach(input => {
    if (input.type === "checkbox") {
      input.checked = false;
    } else {
      input.value = "";
    }
  });
}

function savePDF() {
  window.print();
}
