import card00 from './cards/01/01.vue'
import card01 from './cards/02/02.vue'
import {Popup, Field} from 'mint-ui'
export default {
  data () {
    return {
      popupVisible: false,
      className: 'play',
      holidayId: this.$route.query.holidayId,
      cardId: this.$route.query.cardId,
      cardsToggle: [
        [false, false]
      ],
      greets: [
        { text: '凯歌辞旧岁，骏羊迎新春。丰年飞瑞雪，盛世展宏图。万象换新颜，神州共欢腾。合家欢喜忙，齐心酬壮志。只愿诸事顺，一年都欢畅。鸡年到了，恭祝你鸡年实现所有抱负。' }
      ],
      music: [
        [
          { url: '../../static/music/00.mp3' },
          { url: '../../static/music/00.mp3' }
        ]
      ],
      currentGreet: '',
      currentMusicUrl: ''
    }
  },
  components: {
    mtPopup: Popup,
    mtField: Field,
    card00,
    card01
  },
  methods: {
    modiText () {
      this.popupVisible = true
    },
    control (e) {
      if (this.className) {
        this.className = ''
        e.target.childNodes[0].pause()
      } else {
        this.className = 'play'
        e.target.childNodes[0].play()
      }
    }
  },
  computed: {
    backPath () {
      return `cardDetails?holidayId=${this.holidayId}`
    }
  },
  created () {
    this.cardsToggle[parseInt(this.holidayId)][parseInt(this.cardId)] = true
    this.currentGreet = this.greets[this.holidayId].text
    this.currentMusicUrl = this.music[this.holidayId][this.cardId].url
  }
}
