const breaking = document.querySelector('.break');

if (window.innerWidth < 768) {
    breaking.remove();
    
  }

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const rzelek = { lat: 50.033249, lng: 22.034834 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: rzelek,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: rzelek,
    map: map,
  });
}