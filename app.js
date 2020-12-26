var footer = document.getElementById("footer");
const fetchData = async () => {
  footer.innerHTML = "";
  var name = document.getElementById("input");

  if(name.value != ""){footer.insertAdjacentHTML(
    "afterbegin",
    `<div class="spinner-border text-primary" id="role" role="status">
      <span class="sr-only">Loading...</span>
      </div>`
  );

  var api = await fetch(`https://api.github.com/users/${name.value}/repos`);
  var data = await api.json();
  document.getElementById("role").classList.add("d-none");
  
if (data.length>0) {
    
    var map = data.map(({ full_name }) => {
      
      var x = full_name.split("/");
      
      footer.insertAdjacentHTML(
        "afterbegin",
        `<div class="card"><div class="card-body"><h5 class="card-title">${x[1]}</h5><a href="https://github.com/${name.value}/${x[1]}" target="_blank" class="alert-link">visit</a></div></div>`
      );
      
    });
}
  else if (data.length == 0) {
    footer.insertAdjacentHTML(
      "afterbegin",
      `<div class="card"><div class="card-body"><h5 class="card-title">Sorry! Invalid username</h5></div></div>`
    );
    name.value=""
  }
  
  }
  else{
      alert("Enter username")
  }
};
