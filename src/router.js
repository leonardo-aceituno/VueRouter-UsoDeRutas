import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Sobremi from './components/SobreMi'
import Contacto from './components/Contacto'
import Post from './components/Post'
import Articulo from './components/Articulo'
import NotFound from './components/NotFound'



Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Inicio
        },
        {
            path: '/sobremi',
            component: Sobremi
        },
        {
            path: '/Contacto',
            component: Contacto
        },
        {
            path: '/post/:entrada',
            component: Post,
            children:[{
                path: '/articulo',
                component: Articulo,
                name: 'articulo'
            }]
        },
        {
            path: '*',
            component: NotFound
        },
    ]
})