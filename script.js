document.addEventListener("DOMContentLoaded", () => {
  const musicsData = [
    {
      name: "The Dead Dance",
      artist: "Lady Gaga",
      image: "./img/lady-gaga-musica.jpg",
    },
    {
      name: "As Cowgirl",
      artist: "Ana Castela",
      image: "./img/ana-castela-musica.jpg",
    },
    { name: "Golden", artist: "Huntrix", image: "./img/huntrix-musica.jpg" },
    {
      name: "HEAVEN AND BACK",
      artist: "Chase Atlantic",
      image: "./img/chase-musica.jpg",
    },
    {
      name: "Feel Good Inc",
      artist: "Gorillaz",
      image: "./img/gorillaz-musica.jpg",
    },
    {
      name: "1001 Noites",
      artist: "Clarissa",
      image: "./img/clarissa-musica.jpg",
    },
  ];

  const artistsData = [
    { name: "Henrique & Juliano", image: "./img/artista-henrique-juliano.jpg" },
    { name: "Jorge & Mateus", image: "./img/artista-jorge-mateus.jpg" },
    { name: "Zé neto & Cristiano", image: "./img/artista-ze-neto.jpg" },
    { name: "Gustavo Lima", image: "./img/artista-gustavo-limma.jpg" },
    { name: "Luan Santana", image: "./img/artista-luan-santana.jpg" },
    { name: "Matheus & Kauan", image: "./img/artista-mateus-kauan.jpg" },
  ];

  const albumsData = [
    {
      name: "White Noise (Sleep & Relaxation Sounds)",
      artist: "Sleepy John",
      image: "./img/album-white-noise.jpg",
    },
    {
      name: "O Céu Explica Tudo (Ao Vivo)",
      artist: "Henrique & Juliano",
      image: "./img/album-ceu-explica.jpg",
    },
    {
      name: "Nada como um dia após o outro",
      artist: "Racionais",
      image: "./img/album-vida-loka.jpg",
    },
    {
      name: "HIT ME HARD AND SOFT",
      artist: "Billie Eilish",
      image: "./img/album-hit-me.jpg",
    },
    { name: "CAJU", artist: "Liniker", image: "./img/album-caju.jpg" },
    {
      name: "Escândalo Íntimo",
      artist: "Luísa Sonza",
      image: "./img/album-escandalo.jpg",
    },
  ];

  const radioData = [
    {
      name: "Com Teto, KayBlack, Veigh e mais",
      image: "./img/radio-matue.jpg",
    },
    {
      name: "Com Ed Sheeran, Katy Perry, Justin Bieber e mais",
      image: "./img/radio-bruno-mars.jpg",
    },
    {
      name: "Com Guilherme & Benuto, Murilo Huff,  Felipe e Rodrigo e mais",
      image: "./img/radio-ana-castela.jpg",
    },
    {
      name: "Com Harry Styles, Maroon 5, Oasis e mais",
      image: "./img/radio-coldplay.jpg",
    },
    {
      name: "Com Pixote, Vou Zuar, LUDMILLA e mais",
      image: "./img/radio-menos-e-mais.jpg",
    },
    {
      name: "Com Gloria Groove, Luísa Sonza, Anitta e mais",
      image: "./img/radio-pedro-sampaio.jpg",
    },
  ];

  const topData = [
    {
      name: "Brasil: seu relatório diário das faixas que viralizaram.",
      image: "./img/viral-brasil.jpg",
    },
    {
      name: "Mundo: seu relatório diário das faixas que viralizaram.",
      image: "./img/viral-mundo.jpg",
    },
    {
      name: "Brasil: seu relatório diário das faixas mais tocadas no momento.",
      image: "./img/top-brasil.jpg",
    },
    {
      name: "Mundo: seu relatório diário das faixas mais tocadas no momento.",
      image: "./img/top-mundo.jpg",
    },
    {
      name: "Brasil: seu relatório semanal das faixas mais tocadas no momento.",
      image: "./img/top-musicas-brasil.jpg",
    },
    {
      name: "Mundo: seu relatório semanal das faixas mais tocadas no momento.",
      image: "./img/top-musicas-mundo.jpg",
    },
  ];

  const musicsGrid = document.querySelector(".musics-grid");
  const artistGrid = document.querySelector(".artists-grid");
  const albumsGrid = document.querySelector(".albums-grid");
  const radioGrid = document.querySelector(".radio-grid");
  const topGrid = document.querySelector(".top-grid");

  musicsData.forEach((musics) => {
    const musicsCard = document.createElement("div");
    musicsCard.classList.add("musics-card");

    musicsCard.innerHTML = `
            <img src="${musics.image}"  alt="imagem do ${musics.name}">
            <div>
                <h3>${musics.name}</h3>
                 <p>${musics.artist}</p>
            </div>
        `;

    musicsGrid.appendChild(musicsCard);
  });

  artistsData.forEach((artist) => {
    const artistCard = document.createElement("div");
    artistCard.classList.add("artist-card");

    artistCard.innerHTML = `
            <img src="${artist.image}"  alt="imagem do ${artist.name}">
            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
        `;

    artistGrid.appendChild(artistCard);
  });

  albumsData.forEach((album) => {
    const albumCard = document.createElement("div");
    albumCard.classList.add("album-card");

    albumCard.innerHTML = `
            <img src="${album.image}"  alt="imagem do ${album.name}">
            <div>    
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `;

    albumsGrid.appendChild(albumCard);
  });

  radioData.forEach((radio) => {
    const radioCard = document.createElement("div");
    radioCard.classList.add("radio-card");

    radioCard.innerHTML = `
            <img src="${radio.image}"  alt="imagem do ${radio.name}">
            <div>
                <h3>${radio.name}</h3>
                 
            </div>
        `;

    radioGrid.appendChild(radioCard);
  });

  topData.forEach((top) => {
    const topCard = document.createElement("div");
    topCard.classList.add("top-card");

    topCard.innerHTML = `
            <img src="${top.image}"  alt="imagem do ${top.name}">
            <div>
                <h3>${top.name}</h3>
                 
            </div>
        `;

    topGrid.appendChild(topCard);
  });
});
