fetch('./script/obj.json')
.then(res => res.json())
.then(data => console.log(data))

var destinasi=[
    {
        "id" :1,
        "category" : "pantai",
        "img_src" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pantai_Tanjung_Lesung_03.jpg/1200px-Pantai_Tanjung_Lesung_03.jpg?20170630061620",
        "description" : "tanjung lesung",
        "like_count" :103,
        "date" : "28 September 2024"
    },
    {
        "id" :2,
        "category" : "gunung",
        "img_src" : "https://live.staticflickr.com/3092/2564067897_8d17df6972_b.jpg",
        "description" : "gunung bromo",
        "like_count" :52,
        "date" : "24 September 2024"
    },
    {
        "id" :3,
        "category" : "pantai",
        "img_src" : "https://img.goodfon.com/wallpaper/nbig/7/a6/kelingking-sunset-nusa-penida-bali.webp",
        "description" : "pantai kelingking",
        "like_count" :93,
        "date" : "2 October 2024"
    },
    {
        "id" :4,
        "category" : "gunung",
        "img_src" : "https://upload.wikimedia.org/wikipedia/commons/e/e2/Puncak_Dewi_Anjani%2C_Gunung_Rinjani.jpg",
        "description" : "gunung rinjani",
        "like_count" :29,
        "date" : "30 September 2024"
    },
    {
        "id" :5,
        "category" : "LN",
        "img_src" : "https://live.staticflickr.com/8158/7478326438_4bf2dcf908_b.jpg",
        "description" : "masjidil haram",
        "like_count" :144,
        "date" : "24 October 2024"
    }]

var konten_el = document.getElementById("isi_konten");


function append_konten(obj){
    konten_el.innerHTML += `
        <div class="col-3 col-lg-3 col-md-4 col-sm-6 p-2">
          <div>
            <div class="bg-light">
              <img class="img-fluid" src="${obj.img_src}" alt="beach_1">
            </div>
            <div class="bg-light p-2 position-relative">
              <h5>${obj.description}</h5>
              <p>${obj.date}</p>
              <div class="position-absolute top-0 end-0 me-3" id="porto_like_div${obj.id}">
                <i class="fa-solid fa-thumbs-up porto_like me-1" onclick="add_like(${obj.id})" ></i>${obj.like_count}
              </div>
            </div>
          </div>
      </div>
  `
}

function show_pantai() {
    let filtered_dest = destinasi.filter(dest => dest.category == "pantai");
  
    konten_el.innerHTML = "";
  
    filtered_dest.forEach(dest => {
        append_konten(dest)
    })
  }
function show_gunung() {
    let filtered_dest = destinasi.filter(dest => dest.category == "gunung");
  
    konten_el.innerHTML = "";
  
    filtered_dest.forEach(dest => {
        append_konten(dest)
    })
  }
function show_LN() {
    let filtered_dest = destinasi.filter(dest => dest.category == "LN");
  
    konten_el.innerHTML = "";
  
    filtered_dest.forEach(dest => {
        append_konten(dest)
    })
  }
function show_all() {
  
    konten_el.innerHTML = "";
    destinasi.forEach(dest => {
        append_konten(dest)
    })
  }
