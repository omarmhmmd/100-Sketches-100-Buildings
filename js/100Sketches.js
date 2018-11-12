// NO SCROLL ON MOBILE //
// $(document).bind("touchmove", function(e) {
//   e.preventDefault();
// });
// END NO SCROLL ON MOBILE //

var num = 1;
new Vue({
  el: "#main-container",
  data: {
    value: num,
    country: 'Europe.svg',
    images: {
      building: ''
    },
    buildings :[]
  },
  methods: {
    setImages: function() {
      if (this.value < 10) {
        this.value = String(this.value).padStart(2, 0);
      }
      if (this.value == 100) {
        this.images.building = 'building' + this.value + '.jpg'
      }
      else {
        this.images.building = 'building0' + this.value + '.jpg'
      }
    },
    setColor: function() {
      // var colors = ['#bfff00', '#ffd700']
      // var body = document.querySelector('body')
      //
      // var randomColor =  Math.floor(Math.random() * 2);
      // console.log(colors[0]);
      //
      // if (randomColor == 0) {
      //   body.style.setProperty('--main-bg-color',colors[0])
      // }
      // else if (randomColor == 1) {
      //   body.style.setProperty('--main-bg-color', colors[1])
      // }
    }
  },
  mounted() {
    $.getJSON('./json/buildings.json', json => {
      this.buildings = json
    })
  },
  beforeMount() {
    this.setImages()
    // this.setColor()
  },
  watch: {
    'value': function(val, oldVal) {
      var body = document.querySelector('body')
      if (this.buildings[val - 1].continent == "North America") {
        this.country = "NorthAmerica.svg"
        // body.style.setProperty('--main-bg-color', '#ff0000')
      }
      else if (this.buildings[val - 1].continent == "Europe") {
        this.country = "Europe.svg"
        // body.style.setProperty('--main-bg-color', '#ffd700')
      }
      else if (this.buildings[val - 1].continent == "Asia") {
        this.country = "Asia.svg"
        // body.style.setProperty('--main-bg-color', '#DDFF6B')
      }
      else if (this.buildings[val - 1].continent == "Australia") {
        this.country = "Australia.svg"
        // body.style.setProperty('--main-bg-color', '#FA4B8B')
      }
      else if (this.buildings[val - 1].continent == "South America") {
        this.country = "SouthAmerica.svg"
        // body.style.setProperty('--main-bg-color', '#93C8CF')
      }
      else  {
        this.country = "Africa.svg"
        // body.style.setProperty('--main-bg-color', '#93C8CF')
      }
      if (val < 10) {
        this.value = String(this.value).padStart(2, 0);
      }
      if (val == 100) {
        this.images.building = 'building' + this.value + '.jpg'
      }
      else if (val == 101) {
        this.images.building = 'building101.jpg'
      }
      else {
        this.images.building = 'building0' + this.value + '.jpg'
      }
    }
  }
})
