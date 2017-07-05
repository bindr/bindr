<template>
    <div id="ListGroupContainer" v-if="entries && entries.length">
        <md-list class="md-dense">
            <!-- Section -->
            <md-list-item
                v-for="entry in entries"
                v-if="entry.type === 'section'"
                :key="entry.title"
                md-expand-multiple
            >
                <span>{{entry.title}}</span>
                <md-list-expand>
                    <ListGroup v-if="entry.children" :entries="entry.children" :level="currentLevel + 1"></ListGroup>
                </md-list-expand>
            </md-list-item>

            <!-- Document -->
            <md-list-item
                class="md-inset"
                v-for="entry in entries"
                v-if="entry.type === 'document'"
                :key="entry.title"
            >
                <router-link :to="'/' + (entry.url || '')" exact>
                    <span>{{entry.title}}</span>
                </router-link>
            </md-list-item>
        </md-list>
    </div>
</template>

<script lang="ts" src="./ListGroup.ts"></script>
<style lang="scss" src="./ListGroup.scss" scoped></style>