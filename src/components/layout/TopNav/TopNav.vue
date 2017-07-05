<template>
    <div id="TopNavComponent">
        <md-toolbar class="md-dense">
            <md-button class="md-icon-button" @click="toggleSideNav">
                <md-icon>menu</md-icon>
            </md-button>

            <div class="md-title">
                <img class="bindr-logo" src="../../../assets/images/logo_shadow.png" alt="Bindr Logo"/>
            </div>
            <h2 class="md-title">
                Bindr
            </h2>
        </md-toolbar>
    </div>
</template>

<script lang="ts" src="./TopNav.ts"></script>
<style lang="scss" src="./TopNav.scss" scoped></style>