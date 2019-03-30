<template>
    <div class="home">
        <Header></Header>
        <div class="home__content">
            <CharacterSelect></CharacterSelect>
            <CharacterCreate></CharacterCreate>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>

    import Header from "../../components/Header/Header.vue";
    import CharacterSelect from "../../components/CharacterSelect/CharacterSelect.vue";
    import CharacterCreate from "../../components/CharacterCreate/CharacterCreate.vue";
    import Footer from "../../components/Footer/Footer.vue";

    export default {
        name: 'home',
        components: {
            Header,
            CharacterSelect,
            CharacterCreate,
            Footer
        }
    }
</script>

<style src="./Home.less" lang="less"></style>
