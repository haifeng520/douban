import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import home from './home';
import broadcast from './broadcast';
import mine from './mine';
import audio from './audio';
import group from './group';

export default new Router({
  routes: [
    home,broadcast,mine,audio,group
  ]
});
