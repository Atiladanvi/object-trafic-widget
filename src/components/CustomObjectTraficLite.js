
import { Line } from './BaseCharts'
import { makeDictionary } from '../lang/dictionary'


export default {
  name: 'CustomObjectTraficLite',
  extends: Line,
  props:{
    background: {
      type: String,
      default: 'transparent'
    },
    model: {
      type: String,
      default: null
    },
    zoomLabel: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'object'
    },
    labels: {
      type: Array,
      default: function () {
        return []
      }
    },
    interval: {
      type: String,
      default: 'week'
    },
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
  },
  data(){
    return {
      labelName: this.label,
      labelsValues: this.labels
    }
  },
  created(){
    this.dictionary = makeDictionary({
      lang: this.$otLang
    })
  },
  methods:{
    translateLabels(){
      return this.labels.map(el =>{
        if (this.interval === 'week'){
          return this.dictionary.translate('days', 'abreviation', el )
        }
        if (this.interval === 'month'){
          let lb = el.split("-")
          return `${this.dictionary.translate('months', 'abreviation', lb[0])} ${lb[1]}`
        }
      })
    }
  },
  watch: {
    data:function (value) {
      this.renderChart({
          labels: this.translateLabels(),
          datasets: [
            {
              label: this.label,
              backgroundColor: this.background,
              data: value
            },
          ]
        },{
          responsive: true,
          maintainAspectRatio: false
        }
      )

    }
  }
}
