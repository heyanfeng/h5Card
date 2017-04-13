import card00 from './cards/01/01.vue'
export default {
  data () {
    return {
      holidayId: this.$route.query.holidayId,
      cardId: this.$route.query.cardId,
      arr: [[card00]]
    }
  },
  components: {
    card: card00
  },
  computed: {
    backPath () {
      return `cardDetails?holidayId=${this.holidayId}`
    },
    currentCard () {
      return this.arr[parseInt(this.holidayId)][parseInt(this.cardId)]
    }
  }
}
