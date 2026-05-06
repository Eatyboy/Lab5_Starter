// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn_image = document.querySelector('img[alt="No image selected"]');
  const horn_select = document.getElementById("horn-select");
  const horn_audio = document.querySelector("audio");

  const volume_slider = document.getElementById("volume");
  const volume_icon = document.querySelector('img[alt="Volume level 2"]');

  const play_sound_button = document.querySelector("button");

  const js_confetti = new JSConfetti();

  horn_select.onchange = (event) => {
    const new_image_path = `assets/images/${event.target.value}.svg`;
    const new_sfx_path = `assets/audio/${event.target.value}.mp3`;

    horn_image.setAttribute("src", new_image_path);
    horn_audio.setAttribute("src", new_sfx_path);
  }

  volume_slider.oninput = (event) => {
    const new_volume = event.target.value;

    if (new_volume == 0) {
      volume_icon.setAttribute("src", "assets/icons/volume-level-0.svg")
    } else if (new_volume < 33) {
      volume_icon.setAttribute("src", "assets/icons/volume-level-1.svg")
    } else if (new_volume < 67) {
      volume_icon.setAttribute("src", "assets/icons/volume-level-2.svg")
    } else {
      volume_icon.setAttribute("src", "assets/icons/volume-level-3.svg")
    }

    horn_audio.volume = new_volume / 100;
  }

  play_sound_button.onclick = () => {
    if (horn_select.value == "") return;

    horn_audio.play();

    if (horn_select.value == "party-horn") {
      js_confetti.addConfetti();
    }
  }
}
