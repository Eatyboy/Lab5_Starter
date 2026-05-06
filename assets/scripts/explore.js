// explore.js

window.addEventListener('DOMContentLoaded', init);

function populateVoiceList(synth, voice_select) {
  const voices = synth.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.value = voice.name;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voice_select.appendChild(option);
  }
}

function init() {
  const synth = window.speechSynthesis;

  const face = document.querySelector("img");
  const text_to_speak = document.getElementById("text-to-speak");
  const voice_select = document.getElementById("voice-select");
  const press_to_talk = document.querySelector("button");

  synth.onvoiceschanged = () => {
    populateVoiceList(synth, voice_select);
  };

  press_to_talk.onclick = () => {
    const voice = voice_select.value;
    const text = text_to_speak.value;

    if (text === "") return;

    const utter_this = new SpeechSynthesisUtterance(text);

    for (const v of synth.getVoices()) {
      if (v.name === voice) {
        utter_this.voice = v;
      }
    }

    synth.speak(utter_this)
    face.setAttribute("src", "assets/images/smiling-open.png");
  }

  synth.onend = () => {
    face.setAttribute("src", "assets/images/smiling.png");
  }
}
