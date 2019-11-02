
import pt from './pt'
import en from './en'

const Dictionary = {

  languages : {
    pt: pt,
    en: en,
  },

  getLang: function () {
    return eval(this.languages[this.lang])
  },

  getLabels: function (label, type = 'name') {
    return this.getLang().labels[label][type]
  },

  translate: function (word) {
    return this.getLang().words[word]
  },

}

export const makeDictionary = function(obj = {}){
  return Object.assign({
    lang : obj.lang,
  }, Dictionary );
}
