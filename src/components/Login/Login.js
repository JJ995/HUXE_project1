export default {
    name: 'Login',
    props: {
        content: String
    },
    data() {
        return {
            loginHover: false,
        };
    },
    methods: {
        login() {
            this.$auth.login();
        }
    }
}
