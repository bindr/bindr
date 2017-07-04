<template>
    <div id="SideNavComponent">
        <div class="list-group">
            <div class="list-group-item" v-for="item in sections">
                {{item.title}}
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./SideNav.ts"></script>