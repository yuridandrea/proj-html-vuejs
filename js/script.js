Vue.config.devtools = true;
var app = new Vue ({
  el:'#app',
  data: {
    logoNav: 'img/construction_logo.png',
    navMenu: ['Home', 'About', 'Services', 'Work', 'Articles', 'Get Quote'],
    // footer 
    logoFooter: "img/footer-logo.png",
    latestTweet: "tweets by Theme_Fusion", 
    contactUs: ['Corporate Location 1600 Amphitheatre Parkway London WC1 1BA',
      "Residential Location 9521 Broadsberry Avenue Paddington RC7 9ZA",
      "1.800.458.556 / 1.800.532.2112",
      "info@your-domain.com",
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday - Sunday: 9:00 AM - 12:00 PM"],
    map: "img/construction_map_pin.png-Notti",
    socialMedia: [
      "fab fa-facebook-square",
      "fab fa-twitter-square",
      "fab fa-youtube",
      "fab fa-instagram"
    ]
  } 
})