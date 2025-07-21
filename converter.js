export function setupConverter() {
  const valueInput = document.querySelector('.converter-input');
  const fromSelect = document.querySelector('.converter-from');
  const toSelect = document.querySelector('.converter-to');
  const resultDisplay = document.querySelector('.converter-result');

  const units = {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    millimeter: 0.001,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.34,
  };

  function populateUnits() {
    for (const unit in units) {
      const optionFrom = document.createElement('option');
      const optionTo = document.createElement('option');
      optionFrom.value = unit;
      optionFrom.textContent = unit;
      optionTo.value = unit;
      optionTo.textContent = unit;
      fromSelect.appendChild(optionFrom);
      toSelect.appendChild(optionTo);
    }
    fromSelect.value = 'meter';
    toSelect.value = 'kilometer';
  }

  function convert() {
    const value = parseFloat(valueInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;

    if (isNaN(value) || !units[from] || !units[to]) {
      resultDisplay.textContent = 'Invalid input';
      return;
    }

    const base = value * units[from];
    const converted = base / units[to];

    resultDisplay.textContent = `= ${converted.toFixed(4)} ${to}`;
  }

  valueInput.addEventListener('input', convert);
  fromSelect.addEventListener('change', convert);
  toSelect.addEventListener('change', convert);

  populateUnits();
  convert();
}
