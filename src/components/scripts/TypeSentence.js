async function typeSentence(sentence, setSentence, delay = 100) {
    let typedSentence = '';
    for (const letter of sentence.split('')) {
      await waitForMs(delay);
      typedSentence += letter;
      setSentence(typedSentence);
    }
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  export { waitForMs };
  export default typeSentence;