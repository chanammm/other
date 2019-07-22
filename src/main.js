// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  // components: { App },
  template:`
    <div id="r">
      <h1>导航1</h1>
        <ol>
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/first">/first</router-link></li>
        </ol>
        <router-view class="asas"></router-view>
        <router-view name="left" style="width:50%;float:left;background:red;height:300px;"></router-view>
        <router-view name="right" style="width:50%;float:left;background:yellow;height:300px;"></router-view>
    </div>
    `
}).$mount('#app')


/*
new Vue({
  router,
  // components: { App },
  template:`
    <div id="r">
      <h1>导航1</h1>
      <h3> {{ $route.name }} </h3>
        <ol>
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/first">/first</router-link></li>
              <ol>
                <li><router-link :to="{name: 'Home-first-first', params: {id: 'cnzmg'}}">/first/first</router-link></li>
                <li><router-link to="/first/second">/first/second</router-link></li>
            </ol>
            <li><router-link to="/first">/first</router-link></li>
        </ol>
        <router-view class="asas"></router-view>
        <router-view style="width:50%;float:left;background:red;height:300px;"></router-view>
        <router-view style="width:50%;float:left;background:yellow;height:300px;"></router-view>
    </div>
    `
}).$mount('#app')  */