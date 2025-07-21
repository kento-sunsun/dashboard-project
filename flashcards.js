// flashcards.js
export function setupFlashcards() {
  const openModalBtn = document.querySelector('.add-word-btn');
  const closeModalBtn = document.querySelector('.cancel-word-btn');
  const modal = document.querySelector('#word-modal');
  const wordForm = document.querySelector('#word-form');
  const flashcardsList = document.querySelector('#flashcards-list');

  // If the flashcard elements don't exist, do nothing.
  if (!openModalBtn) return;

  // Initial data for the cards. New cards will be added to this array.
  let cards = [
    { id: 1, question: 'happy', answer: 'feeling or showing pleasure or contentment' },
    { id: 2, question: 'book', answer: 'a written or printed work' },
  ];

  // Toggles the visibility of a card's meaning.
  function toggleMeaning(id) {
    const meaningElement = document.querySelector(`[data-meaning="${id}"]`);
    if (meaningElement) {
      meaningElement.classList.toggle('hidden');
    }
  }

  // Renders all cards in the 'cards' array to the page.
  function renderCards() {
    flashcardsList.innerHTML = ''; // Clear the list first.
    cards.forEach(card => {
      const cardHTML = `
        <div class="flashcard-item" style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <p style="margin: 0;">${card.question}</p>
            <button data-toggle-id="${card.id}" class="flashcard-meaning-btn" style="background: none; border: none; cursor: pointer; font-size: 1.2rem;">
              <span class="ri-eye-line"></span>
            </button>
          </div>
          <div data-meaning="${card.id}" class="hidden" style="margin-top: 0.5rem; color: #555;">
            <p style="margin: 0;">${card.answer}</p>
          </div>
        </div>
      `;
      flashcardsList.innerHTML += cardHTML;
    });
  }

  // --- Event Listeners ---

  // For opening the "Add New Card" modal.
  openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  // For closing the modal.
  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // For submitting the new card form.
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

  // For clicking the "eye" icon to toggle the meaning.
  flashcardsList.addEventListener('click', event => {
    const btn = event.target.closest(".flashcard-meaning-btn");
    if (btn) {
      const id = btn.dataset.toggleId;
      toggleMeaning(id);
    }
  });

  // --- Initial Render ---
  renderCards();
}