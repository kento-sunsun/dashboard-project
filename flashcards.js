export function setupFlashcards() {
  const openModalBtn = document.querySelector('.add-word-btn');
  const closeModalBtn = document.querySelector('.cancel-word-btn');
  const modal = document.querySelector('#word-modal');
  const wordForm = document.querySelector('#word-form');
  const flashcardsList = document.getElementById('flashcards-list-secondary');

  if (!flashcardsList || !openModalBtn || !closeModalBtn || !wordForm) return;

  let cards = [
    { id: 1, question: 'happy', answer: 'feeling or showing pleasure or contentment' },
    { id: 2, question: 'book', answer: 'a written or printed work' },
  ];

  function renderCards() {
    flashcardsList.innerHTML = ''; // リストをクリア
    cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = 'flashcard';
      cardElement.innerHTML = `
        <div class="flashcard-content">
          <p class="flashcard-title">${card.question}</p>
          <div class="flashcard-icons">
            <button data-toggle="${card.id}" class="flashcard-meaning">
              <span class="ri-eye-line"></span>
            </button>
          </div>
        </div>
        <div data-meaning="${card.id}" class="hidden">
          <p class="flashcard-toggle">${card.answer}</p>
        </div>
      `;
      flashcardsList.appendChild(cardElement);
    });
  }

  flashcardsList.addEventListener('click', event => {
    const btn = event.target.closest('.flashcard-meaning');
    if (btn) {
      const id = btn.getAttribute('data-toggle');
      toggleMeaning(id);
    }
  });

  function toggleMeaning(id) {
    const meaningElement = document.querySelector(`[data-meaning="${id}"]`);
    if (meaningElement) {
      meaningElement.classList.toggle('hidden');
    }
  }

  openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  wordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const questionInput = document.querySelector('#word-input');
    const answerInput = document.querySelector('#meaning-input');

    const newCard = {
      id: Date.now(),
      question: questionInput.value,
      answer: answerInput.value,
    };

    cards.push(newCard);
    questionInput.value = '';
    answerInput.value = '';
    modal.classList.add('hidden');
    renderCards();
  });

  renderCards(); // 初期表示
}
// flashcards.js

// カードデータを関数の外に出すことで、管理しやすくなります。
let cards = [
  { id: 1, question: 'happy', answer: 'feeling or showing pleasure or contentment' },
  { id: 2, question: 'book', answer: 'a written or printed work' },
  { id: 3, question: 'code', answer: 'a system of words, letters, figures, or other symbols substituted for other words, letters, etc., especially for the purposes of secrecy.'}
];

// この関数が呼ばれると、暗記カード機能の全てがセットアップされます。
export function setupFlashcards() {
  // --- 1. 必要なHTML要素を取得 ---
  const openModalBtn = document.querySelector('.add-word-btn');
  const closeModalBtn = document.querySelector('.cancel-word-btn');
  const modal = document.querySelector('#word-modal');
  const wordForm = document.querySelector('#word-form');
  // BUG FIX: IDを 'flashcards-list-secondary' から 'flashcards-list' に修正
  const flashcardsList = document.getElementById('flashcards-list');

  // もし必要な要素が見つからなければ、エラーを防ぐために処理を中断します。
  if (!flashcardsList || !openModalBtn || !closeModalBtn || !wordForm) {
    console.error("Flashcard elements not found!");
    return;
  }

  // --- 2. カードリストを表示する関数 ---
  function renderCards() {
    flashcardsList.innerHTML = ''; // リストを一度空にする
    cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = 'flashcard-item'; // CSSでスタイルを当てるためのクラス
      cardElement.textContent = card.question;
      // datasetを使って、HTML要素にデータを紐付けます
      cardElement.dataset.answer = card.answer;
      flashcardsList.appendChild(cardElement);
    });
  }
  
  // --- 3. イベントリスナー（クリックなどの操作）の設定 ---

  // カードリスト全体のクリックを監視（イベント移譲）
  flashcardsList.addEventListener('click', event => {
    const cardItem = event.target.closest('.flashcard-item');
    if (cardItem) {
      // クリックされたカードの答えを表示/非表示する
      alert(cardItem.dataset.answer);
    }
  });

  // 「Add New Card」ボタンがクリックされたらモーダルを表示
  openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  // 「Cancel」ボタンがクリックされたらモーダルを非表示
  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // フォームが送信されたら（Saveボタンがクリックされたら）
  wordForm.addEventListener('submit', (e) => {
    e.preventDefault(); // ページの再読み込みを防ぐ
    const questionInput = document.querySelector('#word-input');
    const answerInput = document.querySelector('#meaning-input');

    // 新しいカードのデータを作成
    const newCard = {
      id: Date.now(), // ユニークなIDを生成
      question: questionInput.value,
      answer: answerInput.value,
    };

    cards.push(newCard); // 配列に新しいカードを追加
    questionInput.value = ''; // 入力欄を空にする
    answerInput.value = '';
    modal.classList.add('hidden'); // モーダルを閉じる
    renderCards(); // カードリストを再表示して、新しいカードを反映させる
  });

  // --- 4. 初回実行 ---
  renderCards();
}