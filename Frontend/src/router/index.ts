import { createRouter, createWebHashHistory} from 'vue-router'
import Menu from '../views/Menu.vue'
import Game from '../views/Game.vue'

const routes = [
    {name: 'Menu', path: '/', component: Menu},
    {name: 'Game', path: '/game', component: Game}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router