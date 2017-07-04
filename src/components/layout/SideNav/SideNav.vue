<template>
    <nav id="SideNavComponent">
        <div v-if="manifest">
            <SideNav :entries="manifest.children"></SideNav>
        </div>
    </nav>
</template>

<script lang="ts" src="./SideNav.ts"></script>
<style lang="scss" src="./SideNav.scss" scoped></style>