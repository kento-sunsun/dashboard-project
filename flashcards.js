let cards = [
  { id: 1, question: 'happy', answer: 'feeling or showing pleasure or contentment' },
  { id: 2, question: 'book', answer: 'a written or printed work' },
  { id: 3, question: 'code', answer: 'a system of symbols used for secrecy or communication' }
];

export async function setupFlashcards() {
  const openModalBtn = document.querySelector('.add-word-btn');
  const closeModalBtn = document.querySelector('.cancel-word-btn');
  const modal = document.querySelector('#word-modal');
  const wordForm = document.querySelector('#word-form');
  const flashcardsList = document.getElementById('flashcards-list-secondary');

  if (!flashcardsList || !openModalBtn || !closeModalBtn || !wordForm) {
    console.error("Flashcard elements not found!");
    return;
  }

  // --- カード描画関数 ---
  function renderCards() {
    flashcardsList.innerHTML = '';
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

  // --- 意味の表示切り替え ---
  function toggleMeaning(id) {
    const meaningElement = document.querySelector(`[data-meaning="${id}"]`);
    if (meaningElement) {
      meaningElement.classList.toggle('hidden');
    }
  }

  // --- クリックイベント（意味表示） ---
  flashcardsList.addEventListener('click', event => {
    const btn = event.target.closest('.flashcard-meaning');
    if (btn) {
      const id = btn.getAttribute('data-toggle');
      toggleMeaning(id);
    }
  });

  // --- モーダル操作 ---
  openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // --- カード追加 ---
  wordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const questionInput = document.querySelector('#word-input');
    const answerInput = document.querySelector('#meaning-input');

    if (!questionInput.value.trim() || !answerInput.value.trim()) return;

    const newCard = {
      id: Date.now(),
      question: questionInput.value.trim(),
      answer: answerInput.value.trim(),
    };

    cards.push(newCard);
    questionInput.value = '';
    answerInput.value = '';
    modal.classList.add('hidden');
    renderCards();
  });

  // --- 初期表示 ---
  renderCards();
}
