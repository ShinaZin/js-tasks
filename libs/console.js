// @ts-check
const { createInterface } = require('readline');

/**
 * Reads from `stdin` (console) some line.
 * @param `text` optional prompt string
 * @returns { Promise<string> } `Promise<string>`
 * @example const input = await console.prompt('enter something:');
 */
function consolePrompt(text = '') {
  const readInterface = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    readInterface.question(text, data => {
      resolve(data);
      readInterface.close();
    });
  });
}

/** @typedef {Console & { prompt: typeof consolePrompt }} ImprovedConsole */
/** @type {ImprovedConsole} */
const improvedConsole = { ...console, prompt: consolePrompt };

module.exports = { console: improvedConsole };