<template>
    <div class="character">
        <Header></Header>
        <Character></Character>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/Header/Header.vue";
    import Character from "../components/Character/Character.vue";
    import Footer from "../components/Footer/Footer.vue";

    export default {
        name: 'character',
        components: {
            Header,
            Character,
            Footer
        }
    }
</script>
