<template>
    <div id="ListGroupContainer">
        <div class="list-group collapse" :class="{'in': isOpen}">
            <div class="list-group-item" v-for="item in entries">

                <a class="list-group-item-title" v-if="!item.url">
                    {{item.title}}
                </a>

                <router-link class="list-group-item-title" v-if="item.url" :to="'/' + (item.url || '')" exact>
                    {{item.title}}
                </router-link>

                <ListGroup v-if="item.children" :entries="item.children" :isOpen="false"></ListGroup>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ListGroup.ts"></script>
<style lang="scss" src="./ListGroup.scss" scoped></style>