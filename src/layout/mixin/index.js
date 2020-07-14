export default {
  data() {
    return {
      isClose: 0,
      isShowIcon: false
    }
  },
  mounted() {
    this.addEventIcon()
  },
  methods: {
    openAndClose(index) {
      this.isClose = index

      setTimeout(() => {
        if (
          $('.wrap')[index].scrollTop >
          $('.configlist')[index].offsetHeight - $('.wrap')[index].clientHeight
        ) {
          this.isShowIcon = true
        } else {
          this.isShowIcon = false
        }
      }, 300);





    },
    addEventIcon() {
      $('.wrap').each(
        (index, item) => {
          item.addEventListener('scroll', () => {
            if (
              item.scrollTop >
              $('.configlist')[index].offsetHeight - item.clientHeight
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