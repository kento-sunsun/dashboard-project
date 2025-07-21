export function setupConverter() {
  // DOM要素を取得
  const converterForm = document.querySelector(".converter-form");
  const inputValue = document.querySelector(".converter-input");
  const fromUnit = document.querySelector(".converter-from");
  const toUnit = document.querySelector(".converter-to");
  const result = document.querySelector(".converter-result");

  // 単位の定義
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

  // 単位選択肢を動的に生成
  function populateUnitOptions() {
    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    for (const unit of lengthUnits) {
      const optionFrom = `<option value="${unit.base}">${unit.name}</option>`;
      const optionTo = `<option value="${unit.base}">${unit.name}</option>`;
      fromUnit.innerHTML += optionFrom;
      toUnit.innerHTML += optionTo;
    }

    // デフォルト選択を設定
    fromUnit.selectedIndex = 0; // 最初の単位
    toUnit.selectedIndex = 1; // 2つ目の単位
  }

  // 変換ロジック
  function convert() {
    const value = parseFloat(inputValue.value);
    const fromBase = parseFloat(fromUnit.value);
    const toBase = parseFloat(toUnit.value);

    if (isNaN(value)) {
      result.textContent = "Please enter a valid number";
      return;
    }

    const convertedValue = (value * fromBase) / toBase;
    const fromName = lengthUnits[fromUnit.selectedIndex].name;
    const toName = lengthUnits[toUnit.selectedIndex].name;

    // 結果を表示
    result.textContent = `${value} ${fromName} = ${convertedValue.toFixed(3)} ${toName}`;
  }

  // イベントリスナーを設定
  converterForm.addEventListener("input", convert);

  // 初期化
  populateUnitOptions();
  convert(); // 初期値で計算を実行
}
