const pokemonInfo = {
  "Cyndaquil": {
    name: "Cyndaquil",
    desc: "A timid Fire-type Pokémon that flares up its back flames when startled.",
    img: "./Pokemons/1.jpeg",
    type: "Fire",
    skill: "Flame Wheel",
    weakness: "Water",
    cry: "./Sound/cyndaquil.mp3",
    chart: "./Radar/1.png",

  },
  "Charmander": {
    name: "Charmander",
    desc: "It has a flame at the tip of its tail that shows its emotional state.",
    img: "./Pokemons/2.jpeg",
    type: "Fire",
    skill: "Ember",
    weakness: "Water",
    cry: "./Sound/charmander.mp3",
    chart: "./Radar/2.png",
  },
  "Magby": {
    name: "Magby",
    desc: "Its body temperature is around 1,100 degrees F. It is constantly spouting flames.",
    img: "./Pokemons/3.jpeg",
    type: "Fire",
    skill: "Smog",
    weakness: "Water",
    cry: "./Sound/magby.mp3",
    chart: "./Radar/3.png",
  },
  "Arcanine": {
    name: "Arcanine",
    desc: "A legendary Pokémon known for its bravery and regal movements.",
    img: "./Pokemons/4.jpeg",
    type: "Fire",
    skill: "Extreme Speed",
    weakness: "Water",
    cry: "./Sound/arcanine.mp3",
    chart: "./Radar/4.png",
  },
  "Totodile": {
    name: "Totodile",
    desc: "Its powerful jaws can crush anything. It often plays rough with others.",
    img: "./Pokemons/5.jpeg",
    type: "Water",
    skill: "Water Gun",
    weakness: "Electric",
    cry: "./Sound/totodile.mp3",
    chart: "./Radar/5.png",
  },
  "Psyduck": {
    name: "Psyduck",
    desc: "Always looks dazed. It uses strong psychic powers when headaches worsen.",
    img: "./Pokemons/6.jpeg",
    type: "Water",
    skill: "Confusion",
    weakness: "Electric",
    cry: "./Sound/psyduck.mp3",
    chart: "./Radar/6.png",
  },
  "Squirtle": {
    name: "Squirtle",
    desc: "It hides in its shell and sprays water at its foe for defense.",
    img: "./Pokemons/7.jpeg",
    type: "Water",
    skill: "Bubble",
    weakness: "Electric",
    cry: "./Sound/squirtle.mp3",
    chart: "./Radar/7.png",
  },
  "Piplup": {
    name: "Piplup",
    desc: "Proud and stubborn, it doesn't like to accept food from people.",
    img: "./Pokemons/8.jpeg",
    type: "Water",
    skill: "Peck",
    weakness: "Electric",
    cry: "./Sound/piplup.mp3",
    chart: "./Radar/8.png",
  },
  "Walrein": {
    name: "Walrein",
    desc: "Its thick blubber protects it from even the fiercest attacks.",
    img: "./Pokemons/9.jpeg",
    type: "Water",
    skill: "Ice Fang",
    weakness: "Electric",
    cry: "./Sound/walrein.mp3",
    chart: "./Radar/9.png",
  },
  "Meganium": {
    name: "Meganium",
    desc: "The fragrance of its flower calms emotions. It can revive dead grass.",
    img: "./Pokemons/10.jpeg",
    type: "Grass",
    skill: "Petal Dance",
    weakness: "Fire",
    cry: "./Sound/meganium.mp3",
    chart: "./Radar/10.png",
  },
  "Bulbasaur": {
    name: "Bulbasaur",
    desc: "The seed on its back grows by drawing energy from sunlight.",
    img: "./Pokemons/11.jpeg",
    type: "Grass",
    skill: "Vine Whip",
    weakness: "Fire",
    cry: "./Sound/bulbasaur.mp3",
    chart: "./Radar/11.png",
  },
  "Gloom": {
    name: "Gloom",
    desc: "It emits a foul odor from the pistil of its flower.",
    img: "./Pokemons/12.jpeg",
    type: "Grass",
    skill: "Stun Spore",
    weakness: "Fire",
    cry: "./Sound/gloom.mp3",
    chart: "./Radar/12.png",
  },
  "Gravyle": {
    name: "Gravyle",
    desc: "Lives in dense forests. It uses its speed and agility to outmaneuver foes.",
    img: "./Pokemons/13.jpeg",
    type: "Grass",
    skill: "Leaf Blade",
    weakness: "Fire",
    cry: "./Sound/grovyle.mp3",
    chart: "./Radar/13.png",
  },
  "Victreebel": {
    name: "Victreebel",
    desc: "It lures prey with a sweet aroma and then dissolves it with acid.",
    img: "./Pokemons/14.jpeg",
    type: "Grass",
    skill: "Acid",
    weakness: "Fire",
    cry: "./Sound/victreebel.mp3",
    chart: "./Radar/14.png",
  },
  "Electrivire": {
    name: "Electrivire",
    desc: "It pushes the tips of its tails against foes to shock them with over 20,000 volts.",
    img: "./Pokemons/15.jpeg",
    type: "Electric",
    skill: "Thunder Punch",
    weakness: "Ground",
    cry: "./Sound/electrivire.mp3",
    chart: "./Radar/15.png",
  },
  "Pikachu": {
    name: "Pikachu",
    desc: "It stores electricity in its cheeks and releases it when threatened.",
    img: "./Pokemons/16.jpeg",
    type: "Electric",
    skill: "Thunderbolt",
    weakness: "Ground",
    cry: "./Sound/pikachu.mp3",
    chart: "./Radar/16.png",
  },
  "Luxray": {
    name: "Luxray",
    desc: "Its gleaming eyes can see through anything. It uses this power to track prey.",
    img: "./Pokemons/17.jpeg",
    type: "Electric",
    skill: "Spark",
    weakness: "Ground",
    cry: "./Sound/luxray.mp3",
    chart: "./Radar/17.png",
  },
  "Magnemite": {
    name: "Magnemite",
    desc: "Uses electromagnetic waves to float. Often seen in power plants.",
    img: "./Pokemons/18.jpeg",
    type: "Electric",
    skill: "Thunder Shock",
    weakness: "Ground",
    cry: "./Sound/magnemite.mp3",
    chart: "./Radar/18.png",
  },
  "Gible": {
    name: "Gible",
    desc: "It nests in horizontal holes warmed by geothermal heat.",
    img: "./Pokemons/19.jpeg",
    type: "Dragon",
    skill: "Dragon Rage",
    weakness: "Ice",
    cry: "./Sound/gible.mp3",
    chart: "./Radar/19.png",
  },
  "Flygon": {
    name: "Flygon",
    desc: "Known as the Desert Spirit. Its wings whip up sandstorms.",
    img: "./Pokemons/20.jpeg",
    type: "Dragon",
    skill: "Earth Power",
    weakness: "Ice",
    cry: "./Sound/flygon.mp3",
    chart: "./Radar/20.png",
  },
  "Hydreigon": {
    name: "Hydreigon",
    desc: "A brutal Pokémon that destroys everything with its six wings and three heads.",
    img: "./Pokemons/21.jpeg",
    type: "Dragon",
    skill: "Dark Pulse",
    weakness: "Ice",
    cry: "./Sound/hydreigon.mp3",
    chart: "./Radar/21.png",
  },
  "Haxorus": {
    name: "Haxorus",
    desc: "Its tusks can cut through steel. Despite its looks, it is very gentle.",
    img: "./Pokemons/22.jpeg",
    type: "Dragon",
    skill: "Dragon Claw",
    weakness: "Ice",
    cry: "./Sound/haxorus.mp3",
    chart: "./Radar/22.png",
  },
  "Bagon": {
    name: "Bagon",
    desc: "It dreams of flying and repeatedly jumps off cliffs to train.",
    img: "./Pokemons/23.jpeg",
    type: "Dragon",
    skill: "Headbutt",
    weakness: "Ice",
    cry: "./Sound/bagon.mp3",
    chart: "./Radar/23.png",
  },
  "Lapras": {
    name: "Lapras",
    desc: "An intelligent and gentle Pokémon that ferries people across water.",
    img: "./Pokemons/24.jpeg",
    type: "Dragon",
    skill: "Ice Beam",
    weakness: "Electric",
    cry: "./Sound/lapras.mp3",
    chart: "./Radar/24.png",
  }
};

const images = document.querySelectorAll(".item .img img");

function handleImageClick(event) {
  const imgSrc = event.currentTarget.src;
  const name = event.currentTarget.alt;
  const imgNumber = imgSrc.match(/(\d+)\.jpeg/)[1];

  // --- Preview 动画 ---
  const newImgSrc = `./Pokemons/${imgNumber}.jpeg`;
  const previewContainer = document.querySelector(".preview-container");

  //清空旧图
  previewContainer.innerHTML = "";

  //创建新图
  const newImg = document.createElement("img");
  newImg.src = newImgSrc;
  newImg.style.position = "absolute";
  newImg.style.right = "-100%";
  newImg.style.opacity = "0";
  newImg.style.transform = "scale(1.2)";
  previewContainer.appendChild(newImg);

  gsap.to(newImg, { 
    duration: 1, 
    right: "0%",
    opacity: 1, 
    scale: 1,
    ease: "power2.out"
  });

  // --- Modal 弹窗 ---
  const data = pokemonInfo[name];

  if (data) {
    document.getElementById("modal-name").innerText = data.name;
    document.getElementById("modal-desc").innerText = data.desc;
    document.getElementById("modal-img").src = data.img;
    document.getElementById("modal-type").innerHTML = `<strong>Type:</strong> ${data.type}`;
    document.getElementById("modal-skill").innerHTML = `<strong>Skill:</strong> ${data.skill}`;
    document.getElementById("modal-weakness").innerHTML = `<strong>Weakness:</strong> ${data.weakness || 'Unknown'}`;
    document.getElementById("modal-chart").src = data.chart || "";
  
    //bg change according to type 
    document.querySelector('.modal-content').style.backgroundColor =
    data.type === "Fire" ? "#ffdfd3" :
    data.type === "Water" ? "#d0f0ff" :
    data.type === "Grass" ? "#dcfdd3" :
    data.type === "Electric" ? "#fffbc1" :
    data.type === "Dragon" ? "#e3d4ff" : "white";

    //play sound function
    const playButton = document.getElementById("play-cry");
if (playButton && data.cry) {
  playButton.onclick = () => {
    const cry = new Audio(data.cry);
    cry.play();
  };
}

  } else {
    document.getElementById("modal-name").innerText = name;
    document.getElementById("modal-desc").innerText = "No data found.";
    document.getElementById("modal-img").src = imgSrc;
  }

  document.getElementById("pokemonModal").style.display = "block";
}

// 注册点击事件
images.forEach((img) => {
  img.addEventListener("click", handleImageClick);
});

// ✨ Modal 关闭按钮
document.querySelector(".close-button").addEventListener("click", () => {
  document.getElementById("pokemonModal").style.display = "none";
});

// ✨ 点击 modal 背景关闭
window.addEventListener("click", (e) => {
  const modal = document.getElementById("pokemonModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
