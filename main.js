import { setupTabs } from './tabs.js';
import { setupConverter } from './converter.js';
import { setupFlashcards } from './flashcards.js';

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();        // タブ切り替えを外部から呼び出し
  setupConverter();   // 単位変換機能の初期化
  setupFlashcards();  // 暗記カードの初期化
});
