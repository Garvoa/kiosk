import { mapState, mapGetters } from "vuex"
export default {
  data() {
    return {
      isClose: 0,
      isShowIcon: false,
      iconIndex: '',
      // attrButeList: []
    }
  },
  mounted() {

    this.isClose = this.$route.query.attrBute ? this.$route.query.attrBute.page : 0
  },
  methods: {

    //添加配菜或者减少配菜
    addAttrBute(e, item, type, attrIndex, index, attrBute) {
      //阻止冒泡时间
      e.stopPropagation()
      //判断当前的num是否存在，不存在设置一个num属性
      if (!item.num) {

        this.$set(item, 'num', 0)
      }
      //如果num等于0且类型还是减得话 直接返回出去，
      if (item.num === 0 && type === '-') return
      //获取到Window缓存的数据，item指的是后台需要的数据，下标，每一次加一
      let storageItem = window.localStorage.getItem('item')
      window.localStorage.setItem('item', storageItem * 1 + 1)
      //判断当前类型
      if (type) {
        //如果为加的话
        if (type === '+') {
          item.num++
        } else if (type === '-') {
          item.num--
          //如果为1说明这个是一个固定的数量，则遍历当前这个数组给他们重置数量，为的就是只能选一个，
        } else if (type === '1') {

          attrBute.moddetails.forEach(element => {
            console.log(element.num)
            if (!element.num) {

              this.$set(element, 'num', 0)
            } else {
              element.num = 0
            }

          })
          item.num = 1

        }

        this.$bus.$emit('addAndDEL', {
          name: item.moditem.name,//属性名称
          num: item.num,//数量
          modid: attrBute.modid, // modid-ID
          price: item.price1, //单价
          page: attrIndex,// 当前的page页
          index,
          attrButeName: attrBute.name,
          maxsel: attrBute.maxsel,
          ordermodhisItem: { ...item.moditem.menuitem, qty: item.num, itemprice: item.price1, item: storageItem * 1 + 1, follow: window.localStorage.getItem('follow') * 1 }
        })
        return
      }
      if (!item.isActive) {
        this.$set(item, 'isActive', true)

      } else {
        item.isActive = !item.isActive
      }
      this.$bus.$emit('addAndDEL', {
        name: item.moditem.name, //属性名称
        num: 1,  //数量
        modid: attrBute.modid,  // modid-ID
        price: item.price1,  //单价
        page: attrIndex,  // 当前的page页
        index,  //下标
        isActive: item.isActive,  //是否选中状态
        attrButeName: attrBute.name,  //属性列表的名称
        maxsel: attrBute.maxsel,
        ordermodhisItem: { ...item.moditem.menuitem, qty: 1, itemprice: item.price1, item: storageItem * 1 + 1, follow: window.localStorage.getItem('follow') * 1 }
      })

    },
    toOrderdetails() {

      let requiredList = []  //必选项列表
      // 获取必选项的数组
      this.getModifiersList.forEach(element => {

        if (element.minsel >= 1) {

          requiredList.push(element.name)
        }
      });


      // 获取选中的属性、配菜，去重
      let attrButeDetailsList = this.delRepeat()

      //如果必选项的长度大于1且选中的属性长度等于0，提示用户必须要选必选项
      if (requiredList.length > 1 && attrButeDetailsList.length === 0) {

        this.$bus.$emit('isMsgFlag', `${requiredList}是必选项`)
        return
      }
      //过滤掉同类的属性，来判断长度，如果长度等于必选项的长度，说明用户都选了必选项的属性，则可以通过
      let attrButeList = attrButeDetailsList.filter(item => {

        if (requiredList.indexOf(item.attrButeName) !== -1) {
          return item
        }
      })
      //判断长度
      if (attrButeList.length >= requiredList.length) {
        if (this.$route.query.item) {
          this.$store.commit(
            'MODIFYATTRBUTEDETALSITEM',
            JSON.parse(window.localStorage.getItem('attrButeDetailsList'))
          )
        } else {
          this.$store.commit(
            'UPDATE_ATTRBUTEDETALSLIST',
            JSON.parse(window.localStorage.getItem('attrButeDetailsList'))
          )
        }

        this.$router.replace({
          path: '/categoryList'

        })

      } else {
        this.$bus.$emit('isMsgFlag', `${requiredList}是必选项`)


      }


    },
    //去重
    delRepeat() {
      let attrButeDetailsObj = {};
      let attrButeDetailsList = JSON.parse(window.localStorage.getItem('attrButeDetailsList')).attrButeDetails.reduce(function (item, next) {
        attrButeDetailsObj[next.modid] ? '' : attrButeDetailsObj[next.modid] = true && item.push(next);
        return item;
      }, []);
      return attrButeDetailsList
    }



  },

  computed: {
    ...mapState({ attrButeList: state => state.attrBute.attrButeList }),
    ...mapGetters(['getModifiersList'])
  },

}