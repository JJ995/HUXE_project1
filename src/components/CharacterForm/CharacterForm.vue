<template>
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
                        <h2 class="character-form__headline">Races</h2>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat @click.native="stepper = 1">Back</v-btn>
                            <v-btn color="primary" @click.native="stepper = 2">Continue</v-btn>
                        </v-card-actions>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <h2 class="character-form__headline">Classes</h2>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat @click.native="stepper = 1">Back</v-btn>
                            <v-btn color="primary" @click.native="stepper = 3">Continue</v-btn>
                        </v-card-actions>
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <h2 class="character-form__headline">Values</h2>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat @click.native="stepper = 2">Back</v-btn>
                            <v-btn color="primary" @click.native="">Finish</v-btn>
                        </v-card-actions>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </div>
    </div>
</template>

<script src="./CharacterForm.js"></script>
<style src="./CharacterForm.less" lang="less"></style>
