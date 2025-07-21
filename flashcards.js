async function fetchFlashcards() {
  try {
    const response = await fetch("/api/flashcards");
    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// flashcards.js
export function setupFlashcards() {
  const openModalBtn = document.querySelector('.add-word-btn');
  const closeModalBtn = document.querySelector('.cancel-word-btn');
  const modal = document.querySelector('#word-modal');
  const wordForm = document.querySelector('#word-form');
  const flashcardsList = document.getElementById('#flashcards-list');

  if (!openModalBtn) return; // 要素がなければ何もしない

  let cards = [
    { id: 1, question: 'happy', answer: 'feeling or showing pleasure or contentment' },
    { id: 2, question: 'book', answer: 'a written or printed work' },
  ];

  function renderCards() {
    flashcardsList.innerHTML = ''; // 一旦リストを空にする
    cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = 'flashcard-item'; // CSSでスタイルを当てるためのクラス
      cardElement.textContent = card.question;
      flashcardsList.appendChild(cardElement);
    });
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
  async function readFlashcards() {
    const wordList = await fetchFlashcards();
    renderFlashcards(wordList);
  }

  async function renderFlashcards(wordList) {
    flashcardsList.innerHTML = "";
    wordList.forEach((word) => {
      const flashcard = `
      <div class="flashcard">
        <div class="flashcard-content">
          <p class="flashcard-title">${word.word}</p>
          <div class="flashcard-icons">
            <button data-toggle="${word.id}" class="flashcard-meaning">
              <span class="ri-eye-line"></span>
            </button>
          </div>
        </div>
        <div data-meaning="${word.id}" class="hidden">
          <p class="flashcard-toggle">${word.meaning}</p>
        </div>
      </div>
      `;
      flashcardsList.innerHTML += flashcard;
    });
  }

  function toggleMeaning(id) {
    const meaningElement = document.querySelector(`[data-meaning="${id}"]`);

    if (meaningElement.classList.contains("hidden")) {
      meaningElement.classList.remove("hidden");
    } else {
      meaningElement.classList.add("hidden");
    }
  }

  const flashcardsList = document.getElementById("flashcards-list");

flashcardsList.addEventListener("click", event => {
  const btn = event.target.closest(".flashcard-meaning");
  if (btn) {
    const id = btn.getAttribute("data-toggle");
    toggleMeaning(id);
  }
});


  await readFlashcards();
