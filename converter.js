export function setupConverter() {
  const converterForm = document.querySelector(".converter-form");
  const inputValue = document.querySelector(".converter-input");
  const fromUnit = document.querySelector(".converter-from");
  const toUnit = document.querySelector(".converter-to");
  const result = document.querySelector(".converter-result");

  // ユニットデータを定義
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

  // 選択肢を追加
  function populateOptions() {
    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    lengthUnits.forEach((unit) => {
      const option = `<option value="${unit.base}">${unit.name}</option>`;
      fromUnit.innerHTML += option;
      toUnit.innerHTML += option;
    });

    fromUnit.selectedIndex = 0; // 初期値
    toUnit.selectedIndex = 1; // 初期値
  }

  // 変換を実行
  function convert() {
    const value = parseFloat(inputValue.value);
    const fromValue = parseFloat(fromUnit.value);
    const toValue = parseFloat(toUnit.value);

    if (isNaN(value)) {
      result.textContent = "有効な数値を入力してください";
      return;
    }

    const convertedValue = (value * fromValue) / toValue;
    result.textContent = `${value} ${lengthUnits[fromUnit.selectedIndex].name} = ${convertedValue.toFixed(3)} ${lengthUnits[toUnit.selectedIndex].name}`;
  }

  // イベントリスナーを設定
  inputValue.addEventListener("input", convert);
  fromUnit.addEventListener("change", convert);
  toUnit.addEventListener("change", convert);

  // 初期化
  populateOptions();
  convert(); // 初期計算を実行
}
