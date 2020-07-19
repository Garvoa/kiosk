import { mapState } from "vuex"
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
    },
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
      }, 300)
    },
    addAttrBute(item, type) {
      if (item.num === 0 && type === '-') return
      if (type === '+') {
        item.num++

        this.$bus.$emit('addAndDEL', {
          name: item.item,
          num: item.num,
          price: item.price
        })
      } else {
        item.num--
        this.$bus.$emit('addAndDEL', {
          name: item.item,
          num: item.num,
          price: item.price
        })
      }
    }
  },
  watch: {
    isClose(val) {
      this.$nextTick(() => {
        this.addEventIcon()
      })
    }
  },
  computed: {
    ...mapState({ attrButeList: state => state.attrBute.attrButeList })
  }
}