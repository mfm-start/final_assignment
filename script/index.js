var pictures = [
  {
    "id" : 1,
    "source" :"https://live.staticflickr.com/8158/7478326438_4bf2dcf908_b.jpg",
  },
  {
    "id" : 2,
    "source" :"https://c1.peakpx.com/wallpaper/228/595/766/holiday-island-palm-summer-wallpaper-preview.jpg",
  },
  {
    "id" : 3,
    "source" :"https://upload.wikimedia.org/wikipedia/commons/e/e2/Puncak_Dewi_Anjani%2C_Gunung_Rinjani.jpg",
  },
  {
    "id" : 4,
    "source" :"https://img.goodfon.com/wallpaper/nbig/7/a6/kelingking-sunset-nusa-penida-bali.webp",
  },
  {
    "id" : 5,
    "source" :"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pantai_Tanjung_Lesung_03.jpg/1200px-Pantai_Tanjung_Lesung_03.jpg?20170630061620",
  },
  {
    "id" : 6,
    "source" :"https://live.staticflickr.com/2755/4249150734_59ffb34b20_b.jpg",
  },
  {
    "id" : 7,
    "source" :"https://i1.wp.com/pattayathailand.ru/images/DSCN6622.JPG",
  },
  {
    "id" : 8,
    "source" :"https://img.goodfon.com/wallpaper/nbig/7/a6/kelingking-sunset-nusa-penida-bali.webp",
  },
  {
    "id" : 9,
    "source" :"https://upload.wikimedia.org/wikipedia/commons/e/e2/Puncak_Dewi_Anjani%2C_Gunung_Rinjani.jpg",
  },
  {
    "id" : 10,
    "source" :"https://live.staticflickr.com/2755/4249150734_59ffb34b20_b.jpg",
  },
  {
    "id" : 11,
    "source" :"https://c1.peakpx.com/wallpaper/228/595/766/holiday-island-palm-summer-wallpaper-preview.jpg",
  },
  {
    "id" : 12,
    "source" :"https://c1.peakpx.com/wallpaper/228/595/766/holiday-island-palm-summer-wallpaper-preview.jpg",
  },
  {
    "id" : 13,
    "source" :"https://c1.peakpx.com/wallpaper/228/595/766/holiday-island-palm-summer-wallpaper-preview.jpg",
  },
  {
    "id" : 14,
    "source" :"https://c1.peakpx.com/wallpaper/228/595/766/holiday-island-palm-summer-wallpaper-preview.jpg",
  },
  {
    "id" : 15,
    "source" :"https://img.goodfon.com/wallpaper/nbig/7/a6/kelingking-sunset-nusa-penida-bali.webp",
  },
  {
    "id" : 16,
    "source" :"https://upload.wikimedia.org/wikipedia/commons/e/e2/Puncak_Dewi_Anjani%2C_Gunung_Rinjani.jpg",
  },
  {
    "id" : 17,
    "source" :"https://c1.peakpx.com/wallpaper/228/595/766/holiday-island-palm-summer-wallpaper-preview.jpg",
  },
  {
    "id" : 18,
    "source" :"https://live.staticflickr.com/8158/7478326438_4bf2dcf908_b.jpg",
  }
]

var j=3;
let konten=document.getElementById("row"+j);


function isi_gambar(n){
  let c=3;
  let el_konten=document.getElementById("row"+n);
  el_konten.innerHTML="";
  for (let index = c*(n-1); index < c*n; index++) {
    el_konten.innerHTML+=`
    <img class="img-fluid" src="${pictures[index].source}" alt=${pictures[index].id}>   
    `
  }
}

function load_gambar(){
  isi_gambar(1);
  isi_gambar(2);
  isi_gambar(3);
  isi_gambar(4);
  isi_gambar(5);
  isi_gambar(6);
}