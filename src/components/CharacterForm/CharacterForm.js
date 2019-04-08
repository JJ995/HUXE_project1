import races from './../../data/races.json';
import classes from './../../data/classes.json';
import gql from "graphql-tag";

export default {
    name: 'CharacterForm',
    data() {
        return {
            stepper: 0,
            steps: [
                {
                    completed: false,
                },
                {
                    completed: false,
                },
                {
                    completed: false,
                },
                {
                    completed: false,
                },
            ],
            races: races,
            classes: classes,
            abilities: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
            hasInvalidAbilities: false,
            abilityValues: [
                {
                    text: '-',
                    disabled: true
                },
                {
                    text: 8,
                    disabled: false
                },
                {
                    text: 10,
                    disabled: false
                },
                {
                    text: 12,
                    disabled: false
                },
                {
                    text: 13,
                    disabled: false
                },
                {
                    text: 14,
                    disabled: false
                },
                {
                    text: 15,
                    disabled: false
                }
            ],
            selectedRace: races[0],
            selectedClass: classes[0],
            selectedAbilities: [
                {
                    name: 'Strength',
                    totalScore: 0,
                    baseScore: 0,
                    modifier: 0,
                    racialBonus: 2,
                },
                {
                    name: 'Dexterity',
                    totalScore: 0,
                    baseScore: 0,
                    modifier: 0,
                    racialBonus: 0
                },
                {
                    name: 'Constitution',
                    totalScore: 0,
                    baseScore: 0,
                    modifier: 0,
                    racialBonus: 0
                },
                {
                    name: 'Intelligence',
                    totalScore: 0,
                    baseScore: 0,
                    modifier: 0,
                    racialBonus: 0
                },
                {
                    name: 'Wisdom',
                    totalScore: 0,
                    baseScore: 0,
                    modifier: 0,
                    racialBonus: 0
                },
                {
                    name: 'Charisma',
                    totalScore: 0,
                    baseScore: 0,
                    modifier: 0,
                    racialBonus: 1
                },
            ],
            characterName: '',
        };
    },
    created: function () {
        // Init total score
        this.updateTotalScore();
    },
    methods: {
        setRace (e) {
            for (let i = 0; i < this.races.length; i++) {
                if (this.races[i].name === e.currentTarget.title) {
                    this.selectedRace = this.races[i];
                    break;
                }
            }
            // Reset racial bonus
            for (let j = 0; j < this.selectedAbilities.length; j++) {
                this.selectedAbilities[j].racialBonus = 0;
            }
            // Set new racial bonus
            for (let i = 0; i < this.selectedRace.mainTraits.length; i++) {
                for (let j = 0; j < this.selectedAbilities.length; j++) {
                    if (this.selectedAbilities[j].name === this.selectedRace.mainTraits[i].name) {
                        this.selectedAbilities[j].racialBonus = this.selectedRace.mainTraits[i].value;
                    }
                }
            }
            this.updateTotalScore();
        },
        setClass (e) {
            for (let i = 0; i < this.classes.length; i++) {
                if (this.classes[i].name === e.currentTarget.title) {
                    this.selectedClass = this.classes[i];
                    break;
                }
            }
        },
        updateAbilities () {
            this.$nextTick(function () {
                for (let i = 1; i < this.abilityValues.length; i++) {
                    this.abilityValues[i].disabled = false;
                }
                for (let i = 0; i < this.abilities.length; i++) {
                    let selection = this.$refs[this.abilities[i]][0].selectedItems[0];
                    if (selection) {
                        for (let j = 0; j < this.abilityValues.length; j++) {
                            if (this.abilityValues[j].text === selection.text) {
                                this.abilityValues[j].disabled = true;
                            }
                        }
                        this.selectedAbilities[i].baseScore = selection.text !== '-' ? selection.text : 0;
                    }
                }
                this.updateTotalScore();
            });
        },
        resetAbilities () {
            for (let i = 1; i < this.abilityValues.length; i++) {
                this.abilityValues[i].disabled = false;
            }
            for (let i = 0; i < this.abilities.length; i++) {
                this.$refs[this.abilities[i]][0].selectedItems[0] = this.abilityValues[0];
                this.selectedAbilities[i].baseScore = 0;
            }
            this.updateTotalScore();
        },
        updateTotalScore () {
            for (let i = 0; i < this.selectedAbilities.length; i++) {
                this.selectedAbilities[i].totalScore = this.selectedAbilities[i].baseScore + this.selectedAbilities[i].racialBonus;
                this.updateModifier(i);
            }
        },
        updateModifier (i) {
            switch(this.selectedAbilities[i].totalScore) {
                case 8:
                case 9:
                    this.selectedAbilities[i].modifier = -1;
                    break;
                case 10:
                case 11:
                    this.selectedAbilities[i].modifier = 0;
                    break;
                case 12:
                case 13:
                    this.selectedAbilities[i].modifier = 1;
                    break;
                case 14:
                case 15:
                    this.selectedAbilities[i].modifier = 2;
                    break;
                case 16:
                case 17:
                    this.selectedAbilities[i].modifier = 3;
                    break;
                default:
                    this.selectedAbilities[i].modifier = 0;
            }
        },
        validateAbilities () {
            let invalid = false;
            for (let i = 0; i < this.selectedAbilities.length; i++) {
                if (this.selectedAbilities[i].baseScore === 0) {
                    invalid = true;
                    break;
                }
            }
            if (!invalid) {
                // Go to step 4 if valid
                this.stepper = 4;
            } else {
                // Show error message
                this.hasInvalidAbilities = true;
            }
        },
        saveCharacter () {
            // Check if character name was entered
            if (this.characterName.trim() !== '') {
                // Save character
                let that = this;
                this.$apollo.mutate({
                    mutation: gql`
                    mutation CreateCharacterMutation($email: String!, $name: String!, $race: String!, $class: String!, $strength: Int!, $dexterity: Int!, $constitution: Int!, $intelligence: Int!, $wisdom: Int!, $charisma: Int!) {
                        createCharacter(
                            data: {
                                status: PUBLISHED,
                                email: $email,
                                name: $name,
                                race: $race,
                                class: $class,
                                strength: $strength,
                                dexterity: $dexterity,
                                constitution: $constitution,
                                intelligence: $intelligence,
                                wisdom: $wisdom,
                                charisma: $charisma
                            }
                        ) {
                            id
                        }
                    }
                `,
                    variables: {
                        email: that.$auth.profile.email,
                        name: that.characterName,
                        race: that.selectedRace.name,
                        class: that.selectedClass.name,
                        strength: that.selectedAbilities[0].totalScore,
                        dexterity: that.selectedAbilities[1].totalScore,
                        constitution: that.selectedAbilities[2].totalScore,
                        intelligence: that.selectedAbilities[3].totalScore,
                        wisdom: that.selectedAbilities[4].totalScore,
                        charisma: that.selectedAbilities[5].totalScore
                    }
                }).then((result) => {
                    // Redirect to character page
                    this.$router.push({ name: 'viewCharacter', query: { id: result.data.createCharacter.id }});
                });
            } else {
                this.$refs.characterName.$el.getElementsByTagName('input')[0].focus();
            }
        }
    }
}
