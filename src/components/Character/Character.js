import races from './../../data/races.json';
import classes from './../../data/classes.json';
import gql from 'graphql-tag';

export default {
    name: 'Character',
    data () {
        return {
            races: races,
            classes: classes,
            loading: 0,
            characters: null,
            shouldDeleteCharacter: false
        };
    },
    mounted () {
        this.$apollo.queries.characters.refetch();
    },
    apollo: {
        $loadingKey: 'loading',
        characters: {
            query: gql`query characters($id: ID!) {
                              characters(where: {
                                    AND: [{
                                        id: $id
                                    }]
                                })
                                {
                                    name,
                                    race,
                                    class,
                                    strength,
                                    dexterity,
                                    constitution,
                                    intelligence,
                                    wisdom,
                                    charisma
                                }
                            }`,
            variables () {
                return {
                    id: this.$route.query.id
                }
            },
        }
    },
    methods: {
        modifier (totalScore) {
            switch(totalScore) {
                case 8:
                case 9:
                    return '-1';
                case 10:
                case 11:
                    return '0';
                case 12:
                case 13:
                    return '+1';
                case 14:
                case 15:
                    return '+2';
                case 16:
                case 17:
                    return '+3';
                default:
                    return '0';
            }
        },
        getRace (name) {
            for (let i = 0; i < this.races.length; i++) {
                if (this.races[i].name === name) {
                    return this.races[i];
                }
            }
        },
        getClass (name) {
            for (let i = 0; i < this.classes.length; i++) {
                if (this.classes[i].name === name) {
                    return this.classes[i];
                }
            }
        },
        deleteCharacter () {
            let that = this;
            this.$apollo.mutate({
                mutation:
                    gql`mutation DeleteCharacterMutation($id: ID!) {
                        deleteCharacter(
                            where: {
                                id: $id
                            }
                        ) {
                            id
                        }
                    }
                `,
                variables: {
                    id: that.$route.query.id
                }
            }).then(() => {
                // Redirect to overview page
                this.$router.push({ name: 'home'});
            });
        }
    }
}
