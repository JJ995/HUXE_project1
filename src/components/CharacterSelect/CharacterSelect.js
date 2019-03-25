export default {
    name: 'CharacterSelect',
    props: {
        content: String
    },
    data() {
        return {
            characters: [
                { name: 'Aerys' },
                { name: 'Viserys' },
                { name: 'Aemon' },
                { name: 'Daenerys' },
                { name: 'Jaeherys' },
                { name: 'Aegon' },
                { name: 'Daemon' },
            ]
        };
    },
    methods: {

    }
}
