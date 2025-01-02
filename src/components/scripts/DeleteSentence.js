async function deleteSentence(sentence, setSentence, delay = 100) {
    const letters = sentence.split("");
    while (letters.length > 0) {
      await waitForMs(delay);
      letters.pop(); // Remove the last letter
      setSentence(letters.join("")); // Update the state, which triggers re-render
    }
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  export default deleteSentence;