document.getElementById('encrypt').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const output = encrypt(input);
    document.getElementById('output').value = output;
});

document.getElementById('decrypt').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const output = decrypt(input);
    document.getElementById('output').value = output;
});

const plainAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!"#€%&/()=?",.-<>1234567890';
const cipherAlphabet = 'Q1E2T3U4O5A6D7G8J9L0XCVBNM!"#€%&/()=?",.-<>SRPNMKIHFE';

function encrypt(text) {
    let encryptedText = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();
        const index = plainAlphabet.indexOf(char);

        if (index >= 0) {
            encryptedText += cipherAlphabet[index];
        } else {
            encryptedText += text[i];
        }
    }

    return encryptedText;
}

function decrypt(text) {
    let decryptedText = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();
        const index = cipherAlphabet.indexOf(char);

        if (index >= 0) {
            decryptedText += plainAlphabet[index];
        } else {
            decryptedText += text[i];
        }
    }

    return decryptedText;
}
