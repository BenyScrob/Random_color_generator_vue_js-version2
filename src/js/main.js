import Vue from 'vue';
import App from'./App.vue';

const $ = require('jquery');

global.$ = global.jQuery = $;

require("../scss/main.scss");

require('bootstrap');
require('bootstrap/scss/bootstrap.scss');



new Vue({
    el: "#app",
    render: h => h(App)
});