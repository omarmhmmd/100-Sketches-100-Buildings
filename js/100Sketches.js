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
    }
  },
  mounted() {
    $.getJSON('./json/buildings.json', json => {
      this.buildings = json
    })
  },
  beforeMount() {
    this.setImages()
  },
  watch: {
    'value': function(val, oldVal) {
      var body = document.querySelector('body')
      if (this.buildings[val - 1].continent == "North America") {
        this.country = "NorthAmerica.svg"
        body.style.setProperty('--main-bg-color', '#ff0000')
      }
      else if (this.buildings[val - 1].continent == "Europe") {
        this.country = "Europe.svg"
        body.style.setProperty('--main-bg-color', '#ffd700')
      }
      else if (this.buildings[val - 1].continent == "Asia") {
        this.country = "Asia.svg"
        body.style.setProperty('--main-bg-color', '#DDFF6B')
      }
      else if (this.buildings[val - 1].continent == "Australia") {
        this.country = "Australia.svg"
        body.style.setProperty('--main-bg-color', '#FA4B8B')
      }
      else if (this.buildings[val - 1].continent == "South America") {
        this.country = "SouthAmerica.svg"
        body.style.setProperty('--main-bg-color', '#93C8CF')
      }
      if (val < 10) {
        this.value = String(this.value).padStart(2, 0);
      }
      if (val == 100) {
        this.images.building = 'building' + this.value + '.jpg'
      } else {
        this.images.building = 'building0' + this.value + '.jpg'
      }
    }
  }
})
