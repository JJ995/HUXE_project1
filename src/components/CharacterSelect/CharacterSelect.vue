<template>
    <div class="home__split-container character-select">
        <h2 class="character-select__headline">Select an existing character ... </h2>
        <div class="spinner" :class="{'spinner--hidden': !loading}"></div>
        <ul class="character-select__list">
            <li v-for="(character, index) in characters" class="character-select__list-item" :key=index>
                <button type="button"
                        class="character-select__button border-button"
                        :title="character.name">
                    <div class="character-select__button-text">{{ character.name }}</div>
                </button>
            </li>
        </ul>
        <div v-if="!loading && !characters.length"
             class="character-select__empty">
            It's empty in here :(
        </div>
    </div>
</template>

<script src="./CharacterSelect.js"></script>
<style src="./CharacterSelect.less" lang="less"></style>
