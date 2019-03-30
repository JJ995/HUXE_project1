<template>
    <div class="header">
        <div class="header__logo">
            <router-link to="/" class="header__logo-link">
                <img src="../../assets/logo.svg" alt="DJCC Logo">
                <h1 class="header__title">DJCC</h1>
            </router-link>
        </div>
        <span v-if="isAuthenticated" class="header__profile">
            <span class="header__profile-name">{{ profile.name }}</span>
            <a href="#" class="standard-link" @click.prevent="logout">Log out</a>
        </span>
    </div>
</template>

<script src="./Header.js"></script>
<style src="./Header.less" lang="less"></style>
