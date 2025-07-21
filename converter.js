export function setupConverter() {
  const converterForm = document.querySelector(".converter-form");
  const inputValue = document.querySelector(".converter-input");
  const fromUnit = document.querySelector(".converter-from");
  const toUnit = document.querySelector(".converter-to");
  const result = document.querySelector(".converter-result");

  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 }, 
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 }
  ];

  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  for (const unit of lengthUnit) {
    fromUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
    toUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
  }

  // 最初のオプションを選択
  if (fromUnit.options.length > 0) {
    fromUnit.selectedIndex = 0;
  }
  if (toUnit.options.length > 0) {
    toUnit.selectedIndex = 1;
  }

  // 変換を実行
  function convert() {
    const value = parseFloat(inputValue.value);

    if (isNaN(value)) {
      result.textContent = "Please enter a valid number";
      return;
    }

    const fromBase = fromUnit.value;
    const toBase = toUnit.value;
    const converted = (value * fromBase) / toBase;

    // 結果を3桁まで丸める
    result.textContent = `${value} ${lengthUnit[fromUnit.selectedIndex].name} = ${converted.toFixed(3)} ${lengthUnit[toUnit.selectedIndex].name}`;
  }

  converterForm.addEventListener("input", convert);

  // 初期化
  convert(); // 初期値で変換を実行
}
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

    const base = value * units[from];      // meter換算
    const result = base / units[to];       // 変換後の値
    resultDisplay.textContent = `= ${result.toFixed(4)} ${to}`;
  }

  valueInput.addEventListener('input', convert);
  fromSelect.addEventListener('change', convert);
  toSelect.addEventListener('change', convert);

  populateUnits();
  convert();
}
