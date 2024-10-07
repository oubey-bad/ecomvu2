import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/admin/Dashboard.vue";
import Show from "../views/admin/Show.vue";
import ClientLayout from "../components/ClientLayout.vue";
import AdminLayout from "../components/AdminLayout.vue";
import Login from "../views/auth/Login.vue";
import Home from "../views/client/Home.vue";
import RequestPassword from "../views/auth/RequestPassword.vue";
import ResetNewPassword from "../views/auth/ResetNewPassword.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Products from "../views/admin/Products.vue";
import Register from "../views/auth/Register.vue";

const routes = [
    {
        path: "/",
        
        component: ClientLayout,
        children:[
            {
                path:'/home',
                name:'home',
                component:Home,
            },
        ]
    },
    {
        path: "/admin",
        component: AdminLayout,

        children:[
            {
                path:'/admin/products',
                name:'products',
                component:Products,
                meta:{title:"Products"}
            },
            {
                path:'/admin/show',
                name:'show',
                component:Show,
            },
            {
                path:'',
                name:'dashboard',
                component:Dashboard,

            },
        ]
    },
    {
        path: "/login",
        
        component: GuestLayout,  
        children:[
            {
                path:'',
                name:'login',
                component:Login,
            },
            {
                path:'/register',
                name:'register',
                component:Register,
            },
            {
                path: "/request-password",
                name: "request-password",
                component: RequestPassword,
            },
            {
                path: "/reset-new-password",
                name: "reset-new-password",
                component: ResetNewPassword,
            },
        ]
    },
    
    
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
