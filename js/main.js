new Vue({
  el: '#app',
  data: {
    inputName: '',
    selected: '',
    names: [],
    hasError: false
  },
  methods: {
    addName() {
      if (this.inputName === '') {
        this.hasError = true
      } else {
        this.hasError = false
        this.names.push(this.inputName)
        this.inputName = ''
        this.$refs.content.focus()
      }
    },
    removeName(index) {
      this.names.splice(index, 1)
    },
    choose() {
      this.selected = this.names[Math.floor(Math.random() * this.names.length)]
      this.names = []
    },
    playAgain() {
      this.selected = ''
    }
  }
})
