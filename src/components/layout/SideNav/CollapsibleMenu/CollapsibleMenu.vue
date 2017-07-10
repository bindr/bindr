<template>
    <div class="CollapsibleMenuContainer">
        <div class="menu-item">
            <div class="menu-item-title" v-if="showTitle">
                <a v-if="!entry.url" @click="toggleChild">
                    {{entry.title}}
                </a>

                <router-link v-if="entry.url" :to="'/' + entry.url" exact>
                    {{entry.title}}
                </router-link>
            </div>

            <div class="menu-item-children collapse" :class="{'in': isMenuOpen}">
                <CollapsibleMenu v-if="entry.children" v-for="item in entry.children" :entry="item"></CollapsibleMenu>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./CollapsibleMenu.ts"></script>
<style lang="scss" src="./CollapsibleMenu.scss" scoped></style>