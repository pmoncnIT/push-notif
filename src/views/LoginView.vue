<template>
    <v-main class="white" :style="{ width: '100%', height: '100%', padding: '1em 0em' }">
      <v-container class="grid-container"
        :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%', width:'100%'}">
        <!-- Left side panel -->
        <div class="" :style="{ borderRadius: '2em', background:'#1569b6'}"></div>
 
        <!-- Right side -->
        <div class=""
          :style="{ padding: '10em 10em', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }">
          <span :style="{ margin: '1em 0em', fontWeight: 'bolder', fontSize: '50px' }">Let's login to your PPA account first</span>
          <!-- Input username -->
          <v-text-field label="Email" outlined class="no-margin-top" :style="{ width: '100%', flex:'0 0 auto',borderRadius:'1em'}"></v-text-field>
          <!-- Input password -->
          <v-text-field label="Password" type="password" outlined class="no-margin-top" :style="{ width: '100%',flex:'0 0 auto', borderRadius:'1em'}"></v-text-field>
          <!-- Login Buttton -->
          <v-btn color="#1569b6" class="white--text" :style="{ width: '100%', padding: '2em 0em', borderRadius: '1em'}">Login</v-btn>
        </div>
      </v-container>
    </v-main>
  </template>
  