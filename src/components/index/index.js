export default {
  name: 'index',
  data () {
    return {
      holidayLists: [
        {
          img: '../../../static/imgs/index-bg-newYear.jpg',
          text: '新年送祝福，就得玩点特别哒！'
        },
        {
          img: '../../../static/imgs/index-bg-yuandan.jpg',
          text: '元旦贺卡'
        },
        {
          img: '../../../static/imgs/index-bg-christmas.jpg',
          text: '圣诞节贺卡'
        },
        {
          img: '../../../static/imgs/index-bg-dongzhi.jpg',
          text: '冬至贺卡'
        },
        {
          img: '../../../static/imgs/index-bg-birthday.jpg',
          text: '生日贺卡'
        },
        {
          img: '../../../static/imgs/index-bg-thank.jpg',
          text: '感恩节贺卡'
        },
        {
          img: '../../../static/imgs/index-bg-love.jpg',
          text: '情人节贺卡'
        },
        {
          img: '../../../static/imgs/index-bg-midAutumn.jpg',
          text: '中秋节贺卡'
        }
      ]
    }
  },
  methods: {
    selectTemplate (index) {
      this.$router.push({
        path: 'cardDetails',
        query: {
          holidayId: index
        }
      })
    }
  }
}
