<template>
    <v-app id="character-form" dark>
        <div class="character-form">
            <div class="character-form__container">
                <v-stepper v-model="stepper" dark>
                    <v-stepper-header>

                        <div class="step" v-for="(step, index) in steps" :key=index>
                            <v-stepper-step
                                :edit-icon="'check'"
                                :complete-icon="'edit'"
                                :color:="'#e1b405'"
                                :step="index + 1"
                                :complete="(index + 1 ) <= stepper"
                                :editable="(index + 1) < stepper">{{ step.label }}
                            </v-stepper-step>
                        </div>

                    </v-stepper-header>
                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <h2 class="character-form__headline">Race</h2>

                            <!-- BEGIN Form step one -->
                            <div class="character-form__step-container">
                                <div class="character-form__step-left">
                                    <div class="character-form__race-button-container"
                                         v-for="(race, index) in races" :key=index>
                                        <button type="button"
                                                class="character-form__race-button border-button"
                                                :class="{'character-form__race-button--selected': (race.name === selectedRace.name)}"
                                                :title="race.name"
                                                @click.prevent="setRace">
                                            {{ race.name }}
                                        </button>
                                    </div>
                                </div>
                                <div class="character-form__step-right">
                                    <div class="character-form__race-image-container">
                                        <img :src="require(`@/assets/races/${selectedRace.name}.png`)" :alt="selectedRace.name">
                                    </div>
                                    <div class="character-form__race-info">
                                        <p>{{ selectedRace.description }}</p>
                                        <span class="strong">Racial traits:</span><br />
                                        <span v-for="(trait, index) in selectedRace.mainTraits" :key=index>
                                            {{ trait.name }}: +{{ trait.value }}
                                        </span><br />
                                        <p>{{ selectedRace.additionalTraits }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- END Form step one -->

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <button type="button"
                                        class="character-form__step-button border-button"
                                        title="Continue"
                                        @click="stepper = 2">
                                    Continue
                                </button>
                            </v-card-actions>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <h2 class="character-form__headline">Class</h2>

                            <!-- BEGIN Form step two -->
                            <div class="character-form__step-container">
                                <div class="character-form__class-button-wrapper character-form__step-left">
                                    <div class="character-form__class-button-container"
                                         v-for="(classItem, index) in classes" :key=index>
                                        <button type="button"
                                                class="character-form__class-button"
                                                :class="{'character-form__class-button--selected': (classItem.name === selectedClass.name)}"
                                                :title="classItem.name"
                                                @click.prevent="setClass">
                                            <img :src="require(`@/assets/classes/${classItem.name}.jpeg`)" :alt="classItem.name" width="120" height="120">
                                        </button>
                                    </div>
                                </div>
                                <div class="character-form__step-right">
                                    <div class="character-form__class-info">
                                        <h3 class="character-form__class-header">{{ selectedClass.name }}</h3>
                                        <p>{{ selectedClass.description }}</p>
                                        <p>
                                            <span class="strong">Hit Die:</span> {{ selectedClass.hitDie }}<br />
                                            <span class="strong">Primary Ability:</span> {{ selectedClass.primaryAbility }}<br />
                                            <span class="strong">Saves:</span> {{ selectedClass.saves }}<br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- END Form step two -->

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn flat @click.native="stepper = 1">Back</v-btn>
                                <button type="button"
                                        class="character-form__step-button border-button"
                                        title="Continue"
                                        @click="stepper = 3">
                                    Continue
                                </button>
                            </v-card-actions>
                        </v-stepper-content>
                        <v-stepper-content step="3">
                            <h2 class="character-form__headline">Abilities</h2>
                            <button type="button"
                                    class="character-form__reset-abilities"
                                    title="Reset ability selection"
                                    @click="resetAbilities">
                                <img src="../../assets/close.svg" />
                            </button>

                            <!-- BEGIN Form step three -->
                            <div class="character-form__abilities-container">
                                <v-select
                                    v-for="(ability, index) in abilities" :key=index
                                    :items="abilityValues"
                                    :label="ability"
                                    :ref="ability"
                                    class="character-form__ability-select"
                                    @input="updateAbilities"></v-select>
                            </div>
                            <div class="character-form__abilities-container">
                                <div class="character-form__ability"
                                     v-for="(ability, index) in selectedAbilities" :key=index>
                                    <div class="character-form__ability-name">{{ ability.name }}</div>
                                    Total Score: <span class="character-form__ability-value">{{ ability.totalScore }}</span><br />
                                    Base Score: <span class="character-form__ability-value">{{ ability.baseScore }}</span><br />
                                    Modifier: <span class="character-form__ability-value">{{ ability.modifier }}</span><br />
                                    Racial Bonus: <span class="character-form__ability-value">+{{ ability.racialBonus }}</span><br />
                                </div>
                            </div>

                            <!-- END Form step three -->

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn flat @click.native="stepper = 2">Back</v-btn>
                                <button type="button"
                                        class="character-form__step-button character-form__step-button--finish border-button"
                                        title="Continue">
                                    Finish
                                </button>
                            </v-card-actions>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </div>
        </div>
    </v-app>
</template>

<script src="./CharacterForm.js"></script>
<style src="./CharacterForm.less" lang="less"></style>
