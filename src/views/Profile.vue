<template>
    <div v-if="profile">
        <Header msg="Profile"></Header>
        <div>
            <div>
                <img :src="profile.picture">
            </div>
            <div>
                <h2>{{ profile.name }}</h2>
                <p>{{ profile.email }}</p>
            </div>
        </div>

        <div>
            <pre>{{ JSON.stringify(profile, null, 2) }}</pre>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Header/Header.vue";

    export default {
        data() {
            return {
                profile: this.$auth.profile
            };
        },
        components: {
            Header
        },
        methods: {
            handleLoginEvent(data) {
                this.profile = data.profile;
            }
        }
    };
</script>
