
import { Line } from './BaseCharts'
import { makeDictionary } from '../lang/dictionary'


export default {
  name: 'CustomObjectTraficLite',
  extends: Line,
  props:{
    background: {
      type: String,
      default: '#eff9fcb3'
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
          let lb = el.split("-")
          return `${this.dictionary.translate('days', 'abreviation', lb[0])} ${lb[1]}`
        }
        if (this.interval === 'month'){
          let lb = el.split("-")
          return `${this.dictionary.translate('months', 'abreviation', lb[0])} ${lb[1]}`
        }
      })
    },
    getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
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
              borderColor: '#23a8d878',
              pointHoverBackgroundColor: '#fff',
              data: value
            },
          ]
        },
        {
          maintainAspectRatio: false,
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              gridLines: {
                drawOnChartArea: false
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                stepSize: Math.ceil(this.getMaxOfArray(value)),
                max: this.getMaxOfArray(value) + this.getMaxOfArray(value) / 2
              },
              gridLines: {
                display: true
              }
            }]
          },
          elements: {
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3
            }
          }
        }
      )
    }
  }
}
