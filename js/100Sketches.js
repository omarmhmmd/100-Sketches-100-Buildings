var num = Math.round(Math.random() * 100);
new Vue({
  el: "#main-container",
  data: {
    value: num,
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
      } else {
        this.images.building = 'building0' + this.value + '.jpg'
      }
    }
  },
  mounted() {
    $.getJSON('./json/buildings.json', json => {
      this.buildings = json
    })
    console.log(buildings[0]);
  },
  beforeMount() {
    this.setImages()
  },
  watch: {
    'value': function(val, oldVal) {
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
