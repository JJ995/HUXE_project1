export default {
    name: 'Header',
    props: {
        msg: String
    },
    data() {
        return {
            isAuthenticated: this.$auth.isAuthenticated()
        };
    },
    async created() {
        try {
            await this.$auth.renewTokens();
        } catch (e) {
            window.console.log(e);
        }
    },
    methods: {
        handleLoginEvent(data) {
            this.isAuthenticated = data.loggedIn;
            this.profile = data.profile;
        },
        logout() {
            this.$auth.logOut();
        }
    }
}
