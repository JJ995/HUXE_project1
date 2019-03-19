<template>
    <div class="header">
        <h1>{{ msg }}</h1>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li v-if="isAuthenticated">
                <router-link to="/profile">Profile</router-link>
            </li>
            <li v-if="isAuthenticated">
                <a href="#" @click.prevent="logout">Log out</a>
            </li>
        </ul>
    </div>
</template>

<script src="./Header.js"></script>
<style src="./Header.less" lang="less"></style>
