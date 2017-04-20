import card00 from './cards/00/00.vue'
import card01 from './cards/01/01.vue'
import card02 from './cards/02/02.vue'
import card03 from './cards/03/03.vue'
import card10 from './cards/10/10.vue'
import card20 from './cards/20/20.vue'
import card21 from './cards/21/21.vue'
import card40 from './cards/40/40.vue'
import {Popup, Field, Button} from 'mint-ui'
export default {
  data () {
    return {
      popupVisible: false,
      musicSelectVisible: false,
      className: 'play',
      holidayId: this.$route.query.holidayId,
      cardId: this.$route.query.cardId,
      cardsToggle: [
        [false, false, false, false],
        [false],
        [false, false],
        [false, false, false, false],
        [false]
      ],
      greets: [
        { text: '凯歌辞旧岁，骏羊迎新春。丰年飞瑞雪，盛世展宏图。万象换新颜，神州共欢腾。合家欢喜忙，齐心酬壮志。只愿诸事顺，一年都欢畅。鸡年到了，恭祝你鸡年实现所有抱负。' },
        { text: '元旦到来恭喜你，发个短信祝福你，成功事业属于你，开心笑容常伴你，健康长寿想着你，最后还要通知你，财神爷爷也要拜访你!元旦快乐!' },
        { text: '无数个圣诞的祝福，那友谊，厚厚积累的愉快记忆，人间的亲情，天堂的温馨，终于带给了我们大家。' },
        { text: '元旦到来恭喜你，发个短信祝福你，成功事业属于你，开心笑容常伴你，健康长寿想着你，最后还要通知你，财神爷爷也要拜访你!元旦快乐!' },
        { text: '洪亮的钟声荡气回荡，璀璨的烟花美丽绽放，潺潺的溪水叮咚回生日的歌曲为你歌唱。祝你生日快乐，人生路上平安吉祥，好运永远伴你身旁！' }
      ],
      music: [
        [
          { url: '../../static/music/00.mp3', name: '新年快乐1', isActive: false },
          { url: '../../static/music/01.mp3', name: '新年快乐2', isActive: false },
          { url: '../../static/music/02.mp3', name: '新年快乐3', isActive: false },
          { url: '../../static/music/03.mp3', name: '新年快乐4', isActive: false }
        ],
        [
          { url: '../../static/music/10.mp3', name: '元旦快乐', isActive: false }
        ],
        [
          { url: '../../static/music/20.mp3', name: '圣诞快乐', isActive: false }
        ],
        [
          { url: '../../static/music/00.mp3', name: '新年快乐', isActive: false },
          { url: '../../static/music/01.mp3', name: '欢心', isActive: false },
          { url: '../../static/music/02.mp3', name: '终曲', isActive: false },
          { url: '../../static/music/03.mp3', name: 'sfag', isActive: false }
        ],
        [
          { url: '../../static/music/40.mp3', name: '生日快乐', isActive: false }
        ]
      ],
      currentGreet: '',
      currentMusicUrl: ''
    }
  },
  components: {
    mtPopup: Popup,
    mtField: Field,
    mtButton: Button,
    card00,
    card01,
    card02,
    card03,
    card10,
    card20,
    card21,
    card40
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
    },
    changeMusic () {
      this.musicSelectVisible = true
    },
    selectMusic (gIndex, mIndex) {
      this.currentMusicUrl = this.music[gIndex][mIndex].url
      for (let i = 0; i < this.music.length; i++) {
        for (let j = 0; j < this.music[i].length; j++) {
          this.music[i][j].isActive = false
        }
      }
      this.music[gIndex][mIndex].isActive = true
    },
    sureMusic () {
      this.musicSelectVisible = false
    },
    share () {
      // window.plugins.socialsharing.share
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
    this.music[this.holidayId][this.cardId].isActive = true
  },
  mounted () {
    document.getElementById('myAudio').play()
  }
}
