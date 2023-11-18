let speechSynth = window.speechSynthesis;
let voices: SpeechSynthesisVoice[];
let cachedVoice: SpeechSynthesisVoice | null;

/**
 * retries until there have been voices loaded. No stopper flag included in this example.
 * Note that this function assumes, that there are voices installed on the host system.
 */

// on document ready
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    voices = speechSynth.getVoices();
  });
});

/**
 * Returns the first found voice for a given language code.
 */
const getVoices = (locale: string) => {
  if (!speechSynth) {
    throw new Error("Browser does not support speech synthesis");
  }

  if (cachedVoice) return cachedVoice;

  cachedVoice = voices.find((v) => v.lang === locale) || null;
  return cachedVoice;
};

const speak = (locale: string, text: string) => {
  const selectedVoice = getVoices(locale);

  // @TODO load preference here, e.g. male / female etc.
  // @TODO but for now we just use the first occurrence
  let utterance = new SpeechSynthesisUtterance();
  utterance.voice = selectedVoice;
  utterance.volume = 1;
  utterance.text = text;
  utterance.lang = locale;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};

export default speak;
