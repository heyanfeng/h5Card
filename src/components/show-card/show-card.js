import card00 from './cards/01/01.vue'
import card01 from './cards/02/02.vue'
export default {
  data () {
    return {
      holidayId: this.$route.query.holidayId,
      cardId: this.$route.query.cardId,
      cardsToggle: [
        [false]
      ]
    }
  },
  components: {
    card00,
    card01
  },
  computed: {
    backPath () {
      return `cardDetails?holidayId=${this.holidayId}`
    },
    currentCard () {
    }
  },
  created () {
    this.cardsToggle[parseInt(this.holidayId)][parseInt(this.cardId)] = true
  }
}
