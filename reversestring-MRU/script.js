const inputText = document.getElementById('inputText');
const result = document.getElementById('result');
const reverseBtn = document.getElementById('reverseBtn');
const copyBtn = document.getElementById('copyBtn');

inputText.addEventListener('input', () => {
    if (inputText.value.length > 3) {
        reverseBtn.style.display = 'inline-block';
    } else {
        reverseBtn.style.display = 'none';
    }
    // Clear the result when input changes
    result.textContent = '';
});

// Initial check on page load
if (inputText.value.length <= 3) {
    reverseBtn.style.display = 'none';
}

reverseBtn.addEventListener('click', () => {
    const text = inputText.value;
    const reversedText = text.split('').reverse().join('');
    result.textContent = reversedText;
});

copyBtn.addEventListener('click', () => {
    const textToCopy = result.textContent;
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Text copied to clipboard!');
        });
    }
});