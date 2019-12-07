import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
// import '@material-design-icons/iconfont/material-icons.css';
import '../../node_modules/material-design-icons/iconfont/material-icons.css';


export default new Vuetify({
  icons: {
    iconfont: 'mdi' || 'fa' || 'fa4', // default - only for display purposes
  },
  //   theme: {
  //     options: {
  //       customProperties: true,
  //     },
  //     themes: {
  //       light: {
  //         primary: '#db563f',
  //         secondary: '#FAFAFA',
  //         accent: '#14B9D6',
  //         error: '#D0021B',
  //         warning: '#FFC200',
  //         info: '#666666',
  //         success: '#5CB85C',
  //         black: '#000000',
  //         bloodred: '#af371f',
  //         darkGrey: '#4b4b4b',
  //       },
  //     },
  //   },
});
Vue.use(Vuetify);
