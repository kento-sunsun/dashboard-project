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
