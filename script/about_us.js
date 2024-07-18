var members=[{
        "id":1,
        "role": "Team Manager"
    },{
        "id":2,
        "role": "Logistic Master"
    },{
        "id":3,
        "role": "Navigator"
    },{
        "id":4,
        "role": "Navigator"
    },{
        "id":5,
        "role": "Porter"
    },{
        "id":6,
        "role": "Porter"
    },{
        "id":7,
        "role": "Fullstack Dev"
    },{
        "id":8,
        "role": "Web Designer"
    },{
        "id":9,
        "role": "Web Designer"
    },{
        "id":10,
        "role": "Tour Manager"
    }]

function show_members(){
    let konten=document.getElementById("about_us_members");
    konten.innerHTML="";
    for (let index = 0; index < members.length; index++) {
        konten.innerHTML+=`
        <div class="col-lg-2 col-md-3 col-sm-4 rounded-circle">
          <img  src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          class="img-fluid img-thumbnail rounded-cirlce" alt="pp1">
          <div class="text-center bg-light">
            <h5>${members[index].role}</h5>
          </div>
        </div>
`
        
    }
}
