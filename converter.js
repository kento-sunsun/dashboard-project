const lengthUnits = [
  { name: "meter", base: 1 },
  { name: "kilometer", base: 1000 },
  { name: "centimeter", base: 0.01 },
  { name: "millimeter", base: 0.001 },
  { name: "inch", base: 0.0254 },
  { name: "foot", base: 0.3048 },
  { name: "yard", base: 0.9144 },
  { name: "mile", base: 1609.344 },
];

export function setupConverter() {
  const converterForm = document.querySelector(".converter-form");
  const input = document.querySelector(".converter-input");
  const fromSelect = document.querySelector(".converter-from");
  const toSelect = document.querySelector(".converter-to");
  const resultDiv = document.querySelector(".converter-result");

  for (const unit of lengthUnits) {
    const option = document.createElement("option");
    option.value = unit.base;
    option.textContent = unit.name;
    fromSelect.appendChild(option.cloneNode(true));
    toSelect.appendChild(option);
  }

  fromSelect.selectedIndex = 0; // meter
  toSelect.selectedIndex = 1;   // kilometer

  function convert() {
    const inputValue = parseFloat(input.value);
    if (isNaN(inputValue)) {
      resultDiv.textContent = "Please enter a valid number";
      return;
    }
    const fromBase = parseFloat(fromSelect.value);
    const toBase = parseFloat(toSelect.value);
    const convertedValue = (inputValue * fromBase) / toBase;
    const fromName = fromSelect.options[fromSelect.selectedIndex].textContent;
    const toName = toSelect.options[toSelect.selectedIndex].textContent;
    resultDiv.textContent = `${inputValue} ${fromName} = ${convertedValue.toFixed(3)} ${toName}`;
  }

  converterForm.addEventListener("input", convert);
  convert();
}