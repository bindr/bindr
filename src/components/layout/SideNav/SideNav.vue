<template>
    <div class="SideNavComponent">
        <nav>
            <div v-if="manifest">
                <ListGroup :entries="manifest.children"></ListGroup>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" src="./SideNav.ts"></script>
<style lang="scss" src="./SideNav.scss" scoped></style>