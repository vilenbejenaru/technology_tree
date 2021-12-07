import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "./Pages/Home.vue";
import Tree from "./Pages/Tree.vue";
import About from "./Pages/About.vue";
import Frontend from "./Pages/Frontend.vue";
import Backend from "./Pages/Backend.vue";
import Login from "./Pages/Auth/Login.vue";
import Register from "./Pages/Auth/Register.vue";

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
        {
            path: "/register",
            name: "Register",
            component: Register,
        },
        {
            path: "/profile",
            name: "Profile",
            // lazy-loaded
            component: () => import("./Pages/Auth/Profile.vue"),
        },
        {
            path: "/admin",
            name: "Admin",
            // lazy-loaded
            component: () => import("./Pages/Admin/BoardAdmin.vue"),
        },
        {
            path: "/user",
            name: "User",
            // lazy-loaded
            component: () => import("./Pages/User/BoardUser.vue"),
        },
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/home",
            component: Home,
        },
        {
            path: "/tree",
            name: "Tree",
            component: Tree,
        },
        {
            path: "/about",
            name: "About",
            component: About,
        },
        {
            path: "/frontend",
            name: "Frontend",
            component: Frontend,
        },
        {
            path: "/backend",
            name: "Backend",
            component: Backend,
        },
        // {
        //   path: "/fullstack",
        //   name: "Fullstack",
        //   component: Fullstack
        // },
        // {
        //   path: "/faq",
        //   name: "Faq",
        //   component: Faq
        // },
        // {
        //   path: "/study",
        //   name: "Study",
        //   component: Study
        // },
        // {
        //   path: "/blog",
        //   name: "Blog",
        //   component: Blog
        // },

    ],
});

router.beforeEach((to, from, next) => {
    const publicPages = [
        "/",
        "/login",
        "/register",
        "/home",
        "/about",
        "/backend",
        "/frontend",
        "/tree",
    ];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem("user");

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next("/login");
    } else {
        next();
    }
});
