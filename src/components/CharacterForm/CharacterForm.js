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
            ]
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
                this.updateModifier(i);
                this.selectedAbilities[i].totalScore = this.selectedAbilities[i].baseScore + this.selectedAbilities[i].racialBonus + this.selectedAbilities[i].modifier;
            }
        },
        updateModifier (i) {
            switch(this.selectedAbilities[i].baseScore) {
                case 8:
                    this.selectedAbilities[i].modifier = -1;
                    break;
                case 10:
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
                default:
                    this.selectedAbilities[i].modifier = 0;
            }
        }
    }
}
