new Vue({
  el: '#app',
  data: {
    inputName: '',
    selected: '',
    names: []
  },
  methods: {
    addName() {
      this.names.push(this.inputName)
      this.inputName = ''
      this.$refs.content.focus()
    },
    choose() {
      this.selected = this.names[Math.floor(Math.random() * this.names.length)]
      this.names = []
    },
    playAgain(){
        this.selected = ''
    }
  }
})
