# object-trafic-widget 0.1.0

## Project setup
```
npm install object-trafic-widget
```

###  Import and use
In your main.js 
```javascript
import Vue from 'vue';
import ObjectTrafic from 'object-trafic-widget'

Vue.use(ObjectTrafic , { lang: 'pt' })
```
In your component
```vue
 <graph-widget-simple :data="[1,2,3,4]"></graph-widget-simple>
```
### Licence
MIT
