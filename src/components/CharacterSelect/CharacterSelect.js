import gql from 'graphql-tag';

export default {
    name: 'CharacterSelect',
    data () {
        return {
            profile: this.$auth.profile,
            loading: 0,
            characters: null,
            email: this.$auth.profile.email
        };
    },
    mounted () {
        this.$apollo.queries.characters.refetch();
    },
    apollo: {
        $loadingKey: 'loading',
        characters: {
            query: gql`query characters($email: String!) {
                              characters(where: {
                                    AND: [{
                                        email: $email
                                    }]
                                })
                                {
                                    email,
                                    name,
                                    class,
                                    race
                                }
                            }`,
            variables () {
                return {
                    email: this.email
                }
            },
        }
    },
    methods: {

    }
}
