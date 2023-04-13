let memeBtn = document.querySelector("#getMeme");

let image = document.querySelector(".memescontainer img");

let downloadLink = document.querySelector("button a");

async function generateMeme() {
   let res = await fetch("https://meme-api.com/gimme");
   let data = await res.json();
   
   image.src = data.url;
   image.alt = data.title;
   downloadLink.href = data.url;
   downloadLink.download = `${data.title}.jpg`;
}

memeBtn.addEventListener("click", generateMeme);
