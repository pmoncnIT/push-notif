<template>
  <v-app>
    <v-app-bar app height="100px" class="search-bar-app-bar">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-text-field v-model="searchQuery" outlined placeholder="Search..." append-icon="mdi-magnify"
        @keydown.enter="search" :style="{ marginTop: '2em', borderRadius: '1.5em', marginLeft: '15em' }"></v-text-field>
      <v-spacer></v-spacer>

      <div :style="{ display: 'flex', alignItems: 'center', padding: '0em 10em' }">

        <v-image class="text-none" flat :style="{ marginRight: '5em' }">
          <v-badge content="9+" color="error">
            <v-icon>mdi-store-outline</v-icon>
          </v-badge>
        </v-image>
        <v-menu v-model="menuOpen" offset-y>
          <template v-slot:activator="{ on }">
            <v-avatar v-on="on">
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
              </v-img>

            </v-avatar>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in dropdownItems" :key="index" @click="selectItem(item)">
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-img cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" :height="200">
        <div class="image-text-overlay">
                  Admin Panel
                </div></v-img>
      
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link :style="{ marginBottom: drawer ? '1em' : '0' }"
          @click="navigateTo(item)">
          <v-list-item-icon v-if="drawer">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="title">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style>
.search-bar-app-bar .v-input__control {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.image-text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

</style>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import AboutView from '../views/AboutView.vue';
import MainView from '../views/MainView.vue';
import ProjectOverview from '../views/ProjectOverviewView.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },  
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/project_overview',
      name: 'projectOverview',
      component: ProjectOverview,
    },
  ],
});

export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/' },
        { title: 'Project Overview', icon: 'mdi-stack-overflow', route: '/project_overview' },
        { title: 'Manage Account', icon: 'mdi-briefcase-account-outline', route: '/ManageAccount' },
        { title: 'Manage Tasks', icon: 'mdi-calendar-check', route: '/ManageTasks' },
        { title: 'Setting', icon: 'mdi-cog-outline', route: '/Settings' },
      ],

      selectedItem: null,
      dropdownItems: ['Settings', 'Change Password', 'Logout'],
      menuOpen: false,
    };
  },
  methods: {
    navigateTo(item) {
      if (item.route !== this.$route.path) {
        this.$router.push(item.route);
      }
    },
    selectItem(item) {
      this.selectedItem = item;
      this.menuOpen = false;
    },
    search() {
      // Perform search functionality here
      console.log('Search query:', this.searchQuery);
    },
  },
  router, // Use the Vue Router instance as a plugin
};
</script>


