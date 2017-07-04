<template>
    <div id="ListGroupContainer">
        <div class="list-group">
            <div class="list-group-item" v-for="item in entries">
                <router-link :to="'/' + (item.url || '')" exact>
                    <div class="list-group-item-title">
                        {{item.title}}
                    </div>
                </router-link>
                <SideNav v-if="item.children" :entries="item.children"></SideNav>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ListGroup.ts"></script>
<style lang="scss" src="./ListGroup.scss" scoped></style>