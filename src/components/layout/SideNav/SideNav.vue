<template>
    <div id="SideNavComponent">
        <md-sidenav class="main-sidenav md-left md-fixed" md-swipeable ref="mainSideNav">
            <div class="sidenav-links" v-if="manifest">
                <ListGroup :entries="manifest.children"></ListGroup>
            </div>
        </md-sidenav>
    </div>
</template>

<script lang="ts" src="./SideNav.ts"></script>
<style lang="scss" src="./SideNav.scss" scoped></style>