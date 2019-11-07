# vue-object-trafic 0.1.0

## Project setup
```
npm install vue-object-trafic
```

###  Import and use
In your main.js 
```javascript
import Vue from 'vue';
import ObjectTrafic from 'vue-object-trafic'

Vue.use(ObjectTrafic , {
  lang: 'pt' ,
  api:{
      baseUrl: '',
      headers: {}
    }
})
```
In your component
```vue
 <object-trafic-lite model="user" label="Users"></object-trafic-lite>
```
### Licence
MIT
