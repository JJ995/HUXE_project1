<template>
    <div class="create">
        <Header></Header>
        <CharacterForm></CharacterForm>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/Header/Header.vue";
    import CharacterForm from "../components/CharacterForm/CharacterForm.vue";
    import Footer from "../components/Footer/Footer.vue";

    export default {
        name: 'characterForm',
        components: {
            Header,
            CharacterForm,
            Footer
        }
    }
</script>
