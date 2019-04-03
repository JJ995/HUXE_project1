<template>
    <div class="home__split-container character-create">
        <h2 class="character-create__headline">... or create a new one!</h2>
        <div class="character-create__button-container">
            <router-link to="/create"
                         class="character-create__button border-button border-button--dark"
                         title="Create character">
                <div class="character-create__button-text">Create character</div>
            </router-link>
        </div>
    </div>
</template>

<script src="./CharacterCreate.js"></script>
<style src="./CharacterCreate.less" lang="less"></style>
