//import createRouter, createWebHistory and Type RouteRecordRaw from vue-router
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// Define route type with explicit type annotations
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
    },
    {
        path: '/product',
        name: 'product',
        component: () => import(/* webpackChunkName: "products" */ '../views/products/index.vue')
    },
    {
        path: '/product/create',
        name: 'product-create',
        component: () => import(/* webpackChunkName: "products-create" */ '../views/products/create.vue')
    },
    {
        path: '/product/edit/:id',
        name: 'product-edit',
        component: () => import(/* webpackChunkName: "products-edit" */ '../views/products/edit.vue')
    },
]

// Create router with explicit type annotations
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
