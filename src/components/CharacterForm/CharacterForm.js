import races from './../../data/races.json';
import classes from './../../data/classes.json';

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
            ],
            races: races,
            classes: classes,
            abilities: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
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
                    value: 0
                },
                {
                    name: 'Dexterity',
                    value: 0
                },
                {
                    name: 'Constitution',
                    value: 0
                },
                {
                    name: 'Intelligence',
                    value: 0
                },
                {
                    name: 'Wisdom',
                    value: 0
                },
                {
                    name: 'Charisma',
                    value: 0
                },
            ]
        };
    },
    methods: {
        setRace (e) {
            for (let i = 0; i < this.races.length; i++) {
                if (this.races[i].name === e.currentTarget.title) {
                    this.selectedRace = this.races[i];
                    break;
                }
            }
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
                for (let i = 0; i < this.abilities.length; i++) {
                    let selection = this.$refs[this.abilities[i]][0].selectedItems[0];
                    if (selection) {
                        for (let j = 0; j < this.abilityValues.length; j++) {
                            if (this.abilityValues[j].text === selection.text) {
                                this.abilityValues[j].disabled = true;
                            }
                        }
                        this.selectedAbilities[i].value = selection.text !== '-' ? selection.text : 0;
                    }
                }
                window.console.log(this.selectedAbilities);
            });
        },
        resetAbilities () {
            for (let i = 0; i < this.abilityValues.length; i++) {
                this.abilityValues[i].disabled = false;
            }
            for (let i = 0; i < this.abilities.length; i++) {
                this.$refs[this.abilities[i]][0].selectedItems[0] = this.abilityValues[0];
            }
        }
    }
}
