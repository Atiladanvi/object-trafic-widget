
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

  translate: function (type, customCase, name) {
    let t = this.getLang().labels[type][customCase].filter(el => {
      return el[name]
    })
   return t[0][name]
  },

}

export const makeDictionary = function(obj = {}){
  return Object.assign({
    lang : obj.lang,
  }, Dictionary );
}
