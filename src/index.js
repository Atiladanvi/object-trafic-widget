
import ObjectTraficLite from './components/ObjectTraficLite'

const ObjectTrafic = {

  install(Vue, options) {

    const { lang, api } = options

    Vue.prototype.$otLang = lang

    Vue.prototype.$otBaseUrl = api.baseUrl
    Vue.prototype.$otHeaders = api.headers

    Vue.component('object-trafic-lite', ObjectTraficLite);
  }
};

export default ObjectTrafic;
