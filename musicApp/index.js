var mysong1 = new Audio();
mysong1.src =
  "./sounds/3__Katrina_Kaif__Aamir_Khan__Sunidhi_Chauhan__Pritam__Amitabh_B(128k).mp3";

var mysong2 = new Audio();
mysong2.src =
  "./sounds/8_Parche__Baani_Sandhu__Gur_Sidhu__Gurneet_Dosanjh__New_Punjabi_Song_2019__White_Hill_Music(256k).mp3";

var mysong3 = new Audio();
mysong3.src =
  "./sounds/Aapka_Kya_Hoga_Janabe_Ali_(Dhanno)_Housefull_Full_Song__Akshay_Kumar__Mika_Singh(128k).mp3";

var mysong4 = new Audio();
mysong4.src =
  "./sounds/Afghan_Jalebi_(Ya_Baba)_FULL_VIDEO_Song__Phantom__Saif_Ali_Khan,_Katrina_Kaif__T-Series(128k).mp3";

var mysong5 = new Audio();
mysong5.src =
  "./sounds/Ajay_Hooda,_Anu_Kadyan_Superhit_Video__New_Haryanvi_Song__Bahu_Kale_Ki(128k).mp3";

var mysong6 = new Audio();
mysong6.src =
  "./sounds/Bom_Diggy_Diggy__(VIDEO)__Zack_Knight__Jasmin_Walia__Sonu_Ke_Titu_Ki_Sweety(128k).mp3";

let count = document.querySelectorAll(".box").length;
console.log(count);

for (let i = 0; i < count; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", playSong);
}

for (let i = 0; i < count; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", pauseSong);
}
function playSong() {
  let boxId = this.innerHTML;

  switch (boxId) {
    case "play1":
      mysong1.play();

      break;

    case "play2":
      mysong2.play();

      break;

    case "play3":
      mysong3.play();

      break;

    case "play4":
      mysong4.play();

      break;
    case "play5":
      mysong5.play();

      break;

    case "play6":
      mysong6.play();

      break;

    case "play7":
      mysong1.play();

      break;

    case "play8":
      mysong6.play();

      break;

    case "play9":
      mysong5.play();

      break;

    case "play10":
      mysong4.play();

      break;

    case "play11":
      mysong3.play();

      break;

    case "play12":
      mysong2.play();

      break;

    default:
      console.log("input wrong");
      break;
  }
}

function pauseSong() {
  let boxId = this.innerHTML;
  switch (boxId) {
    case "stop1":
      mysong1.pause();

      break;

    case "stop2":
      mysong2.pause();

      break;

    case "stop3":
      mysong3.pause();

      break;

    case "stop4":
      mysong4.pause();

      break;
    case "stop5":
      mysong5.pause();

      break;

    case "stop6":
      mysong6.pause();

      break;

    case "stop7":
      mysong1.pause();

      break;

    case "stop8":
      mysong6.pause();

      break;

    case "stop9":
      mysong5.pause();

      break;

    case "stop10":
      mysong4.pause();

      break;

    case "stop11":
      mysong3.pause();

      break;

    case "stop12":
      mysong2.pause();

      break;

    default:
      console.log("input wrong");
      break;
  }
}
