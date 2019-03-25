<template>
    <div class="login" >
        <div class="login__background" :class="{'login__background--hover': loginHover}"></div>
        <div class="login__wrapper">
            <div class="login__box">
                <button type="button"
                        class="login__button border-button"
                        @click.prevent="login"
                        @mouseover="loginHover = true"
                        @mouseleave="loginHover = false">
                    Login
                </button>
            </div>
        </div>
    </div>
</template>

<script src="./Login.js"></script>
<style src="./Login.less" lang="less"></style>
