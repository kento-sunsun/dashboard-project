// main.js
import { setupTabs } from './tabs.js';
import { setupConverter } from './converter.js';
import { setupFlashcards } from './flashcards.js';

// DOM（HTML）の読み込みが完了したら、各機能を初期化する
document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  setupConverter();
  setupFlashcards();
});