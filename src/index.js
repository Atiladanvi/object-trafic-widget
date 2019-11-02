
import GraphWidgetSimple from './components/GraphWidgetSimple.js'

const ObjectTrafic = {

  install(Vue, options) {

    const { lang } = options

    Vue.prototype.$otwLang = lang

    Vue.component('graph-widget-simple', GraphWidgetSimple);
  }
};

export default ObjectTrafic;
