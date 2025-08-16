const adviceBtn = document.getElementById('adviceBtn');
const adviceBox = document.getElementById('adviceBox');

const advices = [
    "Используй длинные и сложные пароли 🛡️",
    "Не используй один пароль для разных аккаунтов 🔑",
    "Включи двухфакторную аутентификацию 📲",
    "Регулярно обновляй свои пароли 🔄",
    "Не оставляй пароли на бумаге или в заметках 📝"
];

adviceBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * advices.length);
    adviceBox.textContent = advices[randomIndex];
});
