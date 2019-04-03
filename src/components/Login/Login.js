export default {
    name: 'Login',
    data () {
        return {
            loginHover: false,
        };
    },
    methods: {
        login () {
            this.$auth.login();
        }
    }
}
