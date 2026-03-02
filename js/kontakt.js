const breaking = document.querySelector('.break');

if (window.innerWidth < 768) {
    breaking.remove();
    
  }

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const rzelek = { lat: 50.03361, lng: 22.03726 };
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

//Email 1 obfuscation
  var user1 = 'kontakt';
  var domain1 = 'psychologdzieciecy';
  var tld1 = 'eu';
  
  var user2 = 'chaberpsycholog';
  var domain2 = 'gmail';
  var tld2 = 'com';

  var email1 = user1 + '@' + domain1 + '.' + tld1;
  var email2 = user2 + '@' + domain2 + '.' + tld2;
  
  var container1 = document.getElementById('contact-children');
  var container2 = document.getElementById('contact-adults');

  if (container1) {
    var link1 = document.createElement('a');
    link1.href = 'mailto:' + email1;
    link1.textContent = email1;
    container1.textContent = '';
    container1.appendChild(link1);
  }

  if (container2) {
    var link2 = document.createElement('a');
    link2.href = 'mailto:' + email2;
    link2.textContent = email2;
    container2.textContent = '';
    container2.appendChild(link2);
  }