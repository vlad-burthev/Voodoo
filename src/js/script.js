function select(){
    let selectHeader = document.querySelectorAll('.select-header');

    let selectItem = document.querySelectorAll('.select-item');

    selectHeader.forEach(item=>{
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item=>{
        item.addEventListener('click', selectChoose)
    })

    function selectToggle(){
        this.parentElement.classList.toggle('active');
    }

    function selectChoose() {
        let text = this.innerText;
        select = this.closest('.select'),
        currentText = this.closest('.select').querySelector('.select-current');
        currentText.innerText = text;
        select.classList.remove('active');

    }
};

select();


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.44495066142482, lng: -80.5154170275382 },
    zoom: 16,
  });

  var myMap = new google.maps.Map(element, options); 

  var Marker = new google.maps.Marker({
      position: {element, options},
      map: myMap,
  });

  var InfoWindow = new google.maps.InfoWindow({
      content: '<h1>Title</h1>'
  });


}

window.initMap = initMap;