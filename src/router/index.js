import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import other from '@/components/other'

Vue.use(Router)

const first = { template: '<div>first的内容</div>' },
second = { template: '<div>second的内容</div>' },
Home = { template: '<div>Home的内容</div>' },
sayHei = { template: '<div>say helloworld. in up to date</div>'}
// firstOne = { template: `<div>first one page  {{ $route.params.id }}</div>` },
// firstTwo = { template: `<div>first two page</div>` }

// const Subrouting = {
//     template: `
//         <div class="subourting">
//             <h2>组件</h2>
//             <router-view class="subourting-view"></router-view>
//         </div>
//     `
// }

const router = new Router({
    mode: 'history',
    base: __dirname,
    routes:[
        { path: '/', components: {
            default: Home,
            left: first,
            right: second, 
        }},  //路由表的组件群
        // { path: '/first', component: Subrouting,
        //     children: [{ path: '/', name:'Home-first', component: first },{ path: 'first', name: 'Home-first-first', component: firstOne },{ path: 'second', name: 'Home-first-second', component: firstTwo }]
        // },
        { path: '/first',components: {
            default: sayHei,
            left: first,
            right: second
        }}
    ]
})

// new Vue({
//   router,
//   // components: { App },
//   template:`
//     <div id="r">
//     <h1>导航</h1>
//         <ul>
//             <li><router-link to="/">/</router-link></li>
//             <li><router-link to="/first">/first</router-link></li>
//             <li><router-link to="/second">/second</router-link></li>
//         </ul>
//         <router-view class="asas"></router-view>
//     </div>
//     `
// }).$mount("#app")


// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/other',
//       name: 'other',
//       component: other
//     }
//   ]
// })

export default router