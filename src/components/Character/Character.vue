<template>
    <div class="character__wrapper">
        <div class="spinner" :class="{'spinner--hidden': !loading}"></div>
        <div class="character__container" v-if="characters">
            <div class="character__container-left">
                <h1 class="character__name">{{ characters[0].name }}</h1>
                <p class="character__info">{{ characters[0].race }} | {{ characters[0].class }}</p>
                <div class="character__image">
                    <img :src="require(`@/assets/races/${characters[0].race}.png`)" :alt="characters[0].race">
                </div>
            </div>
            <div class="character__container-right">
                <div class="character__ability-wrapper">
                    <div class="character__ability">
                        <div class="character__ability-name">Strength</div>
                        <div class="character__ability-modifier">{{ modifier(characters[0].strength) }}</div>
                        <div class="character__ability-score">{{ characters[0].strength }}</div>
                    </div>
                    <div class="character__ability">
                        <div class="character__ability-name">Dexterity</div>
                        <div class="character__ability-modifier">{{ modifier(characters[0].dexterity) }}</div>
                        <div class="character__ability-score">{{ characters[0].dexterity }}</div>
                    </div>
                    <div class="character__ability">
                        <div class="character__ability-name">Constitution</div>
                        <div class="character__ability-modifier">{{ modifier(characters[0].constitution) }}</div>
                        <div class="character__ability-score">{{ characters[0].constitution }}</div>
                    </div>
                    <div class="character__ability">
                        <div class="character__ability-name">Intelligence</div>
                        <div class="character__ability-modifier">{{ modifier(characters[0].intelligence) }}</div>
                        <div class="character__ability-score">{{ characters[0].intelligence }}</div>
                    </div>
                    <div class="character__ability">
                        <div class="character__ability-name">Wisdom</div>
                        <div class="character__ability-modifier">{{ modifier(characters[0].wisdom) }}</div>
                        <div class="character__ability-score">{{ characters[0].wisdom }}</div>
                    </div>
                    <div class="character__ability">
                        <div class="character__ability-name">Charisma</div>
                        <div class="character__ability-modifier">{{ modifier(characters[0].charisma) }}</div>
                        <div class="character__ability-score">{{ characters[0].charisma }}</div>
                    </div>
                </div>
                <div class="character__description">
                    <p>{{ getRace(characters[0].race).description }}</p>
                    <p>{{ getClass(characters[0].class).description }}</p>
                    <p><span class="strong">Hit die: </span>{{ getClass(characters[0].class).hitDie }}</p>
                </div>
                <div class="character__delete">
                    <button type="button"
                            class="border-button"
                            title="Delete character"
                            v-if="!shouldDeleteCharacter"
                            @click.prevent="shouldDeleteCharacter = true">
                        Delete character
                    </button>
                    <p v-if="shouldDeleteCharacter" class="character__delete-question">Delete? Are you sure?</p>
                    <p v-if="shouldDeleteCharacter">
                        <button type="button"
                                class="character__delete-button border-button"
                                title="Yes"
                                @click.prevent="deleteCharacter">
                            Yes
                        </button>
                        <button type="button"
                                class="character__delete-button border-button"
                                title="No"
                                @click.prevent="shouldDeleteCharacter = false">
                            No
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./Character.js"></script>
<style src="./Character.less" lang="less"></style>
