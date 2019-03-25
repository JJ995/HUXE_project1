<template>
    <div class="character-select">
        <h2 class="character-select__headline">Select an existing character... </h2>
        <ul class="character-select__list">
            <li v-for="character in characters" class="character-select__list-item">
                <button type="button"
                        class="character-select__button border-button"
                        :title="character.name">
                    <div class="character-select__button-text">{{ character.name }}</div>
                </button>
            </li>
        </ul>
    </div>
</template>

<script src="./CharacterSelect.js"></script>
<style src="./CharacterSelect.less" lang="less"></style>
