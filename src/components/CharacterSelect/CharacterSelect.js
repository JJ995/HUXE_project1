import gql from 'graphql-tag';

// TODO: select characters based on user accName (email --> profile.email)
export const characters = gql`query characters {
                              characters {
                                accName,
                                name,
                                class,
                                race
                              }
                            }`;

export default {
    name: 'CharacterSelect',
    data() {
        return {
            profile: this.$auth.profile,
            loading: 0,
            characters: null
        };
    },
    apollo: {
        $loadingKey: 'loading',
        characters: {
            query: characters
        }
    },
    methods: {

    }
}
