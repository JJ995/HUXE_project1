<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <Header msg="Welcome!"></Header>
        <Content content="This is some test content Lol"></Content>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/Header/Header.vue";
    import Content from "../components/Content/Content.vue";
    import Footer from "../components/Footer/Footer.vue";

    export default {
        name: 'home',
        components: {
            Header,
            Content,
            Footer
        }
    }
</script>
