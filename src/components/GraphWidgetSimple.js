
import { Line } from './BaseCharts'
import { makeDictionary } from '../lang/dictionary'

export default {
  extends: Line,
  props:{
    background: {
      type: String,
      default: 'transparent'
    },
    zoomLabel: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    labels: {
      type: Array,
      default: function () {
        return []
      }
    },
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    labelsType: {
      type: String,
      default: 'months'
    }
  },
  data(){
    return {
      labelName: this.label,
      labelsValues: this.labels
    }
  },
  methods: {
    setDefaultValues: function () {
      if (this.label === null) {
        this.labelName = this.dictionary.translate('objects')
      }
      if (this.labels.length > 0){
        this.labelsValues = this.labels
      } else {
        this.labelsValues = this.dictionary.getLabels(this.labelsType)
      }
      if (this.zoomLabel){
        this.labelsValues = this.labelsValues.splice(0, this.data.length)
      }
    }
  },
  created(){
    this.dictionary = makeDictionary({
      lang: this.$otwLang
    })
    this.setDefaultValues()
  },
  mounted () {
    this.renderChart({
        labels: this.labelsValues,
        datasets: [
          {
            label: this.labelName,
            backgroundColor: this.background,
            data: this.data
          },
        ]
      },{
        responsive: true,
        maintainAspectRatio: false
      }
    )
  }
}
