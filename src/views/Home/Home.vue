<template>
    <div class="home">
        <Header></Header>
        <div class="home__content">
            <CharacterSelect></CharacterSelect>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>

    import Header from "../../components/Header/Header.vue";
    import CharacterSelect from "../../components/CharacterSelect/CharacterSelect.vue";
    import Footer from "../../components/Footer/Footer.vue";
    import gql from 'graphql-tag';

    export const characters = gql`query characters{
      characters {
        accName,
        name,
        class,
        race
      }
    }`;

    export default {
        name: 'home',
        components: {
            Header,
            CharacterSelect,
            Footer
        },
        data: () => ({
            loading: 0,
            characters: null
        }),
        apollo: {
            $loadingKey: 'loading',
            characters: {
                query: characters
            }
        }
    }
</script>

<style src="./Home.less" lang="less"></style>
