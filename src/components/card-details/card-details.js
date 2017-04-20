export default {
  data () {
    return {
      holidayId: this.$route.query.holidayId,
      cardTemplates: [
        {
          text: '新年来临，送你五星祝福，点击下方图片，把新年祝福统统装进会动会唱的贺卡里！',
          thumbnails: [
            '../../../static/imgs/newYear/thumb01.jpg',
            '../../../static/imgs/newYear/thumb02.jpg',
            '../../../static/imgs/newYear/thumb03.jpg',
            '../../../static/imgs/newYear/thumb04.jpg'
          ]
        },
        {
          text: '元旦小心机，贺卡送祝福。“元旦”一词系中国“土产”，在中国农历中已沿用4000多年，但现行公历“元旦”为1949年所定，随着2017年的到来，它只有“68岁”',
          thumbnails: [
            '../../../static/imgs/yuandan/thumb01.jpg'
          ]
        },
        {
          text: '圣诞节是西方庆祝耶稣诞生的日子，又叫“基督弥撒”，类似于我们的春节。这个圣诞，我们为大家准备了几款简单好玩的小贺卡，让你的节日祝福更有格调~',
          thumbnails: [
            '../../../static/imgs/Christmas/thumb01.jpg',
            '../../../static/imgs/Christmas/thumb02.jpg',
            '../../../static/imgs/Christmas/thumb03.jpg',
            '../../../static/imgs/Christmas/thumb04.jpg'
          ]
        },
        {
          text: '冬至又名“一阳生”，是中国农历中一个重要的节气，冬至俗称“东节”、“长至节”、“亚岁”等，古人认为自冬至起，白昼一天比一天长，阳气回升，天地阳气开始兴做渐强，代表下一个循环开始，是大吉之日',
          thumbnails: [
            '../../../static/imgs/dongzhi/thumb01.jpg',
            '../../../static/imgs/dongzhi/thumb02.jpg'
          ]
        },
        {
          text: '亲爱的朋友，祝你生日快乐！谢谢你在过去的日子和我同行。',
          thumbnails: [
            '../../../static/imgs/birthday/thumb01.jpg'
          ]
        },
        {
          text: '心怀感恩，感谢彼此！',
          thumbnails: [
            '../../../static/imgs/thanks/thumb01.jpg',
            '../../../static/imgs/thanks/thumb02.jpg'
          ]
        },
        {
          text: '爱不是三言两语能说清的，要用高大上的贺卡来表示一份心意！',
          thumbnails: [
            '../../../static/imgs/love/thumb01.jpg',
            '../../../static/imgs/love/thumb02.jpg',
            '../../../static/imgs/love/thumb03.jpg',
            '../../../static/imgs/love/thumb04.jpg'
          ]
        },
        {
          text: '但愿人长久，千里共婵娟！',
          thumbnails: [
            '../../../static/imgs/zhongqiu/thumb01.jpg',
            '../../../static/imgs/zhongqiu/thumb02.jpg'
          ]
        }
      ]
    }
  },
  methods: {
    showCard (index) {
      this.$router.push({
        path: '/showCard',
        query: {
          holidayId: this.holidayId,
          cardId: index
        }
      })
    }
  }
}
