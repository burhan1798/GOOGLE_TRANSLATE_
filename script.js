// script.js

document.getElementById('translateBtn').addEventListener('click', function() {
  const inputText = document.getElementById('englishInput').value.trim();
  if (!inputText) {
    alert('Please enter some English text.');
    return;
  }
  // তৈরি করা API URL-এ q প্যারামিটারের মান হিসেবে ইনপুট পাঠানো হচ্ছে
  const apiUrl = `http://dark-x-community.my.id/apis/translator.php?lan=bn&q=${encodeURIComponent(inputText)}`;

  fetch(apiUrl)
    .then(response => response.text())
    .then(data => {
      document.getElementById('result').innerText = data;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('result').innerText = "Translation error. Please try again.";
    });
});
