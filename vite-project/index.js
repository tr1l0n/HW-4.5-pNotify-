import { notice } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
let keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
let key = document.getElementById('key');
key.textContent = keys[0];
let currentKeyIndex = 0;
document.addEventListener('keydown', event => {
    if (event.key === keys[currentKeyIndex]) {
        if (currentKeyIndex === 9) {
            notice({ text: 'Вітаю,ви виграли!' });
            currentKeyIndex = 0;
            key.textContent = keys[currentKeyIndex];
            return;
        }
        else {
            currentKeyIndex++;
            key.textContent = keys[currentKeyIndex];
            return;
        }
    }
    else {
        notice({
            text: "ви натиснули не ту кнопку"
        });
        return;
    }
});