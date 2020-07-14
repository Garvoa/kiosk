export default {
  data() {
    return {
      isClose: 0,
      isShowIcon: false,
      iconIndex: ''
    }
  },
  mounted() {
    this.addEventIcon()

  },
  methods: {

    addEventIcon() {
      $('.wrap').each(
        (index, item) => {

          item.addEventListener('scroll', () => {

            if (
              item.scrollTop >
              $('.configlist')[index].offsetHeight - item.clientHeight - 10
            ) {
              this.isShowIcon = true
            } else {
              this.isShowIcon = false
            }
          })
        }
      )
    }
  },
  watch: {
    isClose(val) {
      this.$nextTick(() => {
        this.addEventIcon()
      })
    }
  }
}