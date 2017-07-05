<template>
    <div id="AppComponent">
        <TopNav></TopNav>

        <div class="container">
            <!-- Sidebar Navigation -->
            <SideNav></SideNav>

            <md-layout md-gutter md-align="center">
                <md-layout md-flex-xsmall="95" md-flex-small="95" md-flex-large="50" md-flex-medium="75">
                    <div id="router-container">
                        <router-view :key="$route.fullPath"></router-view>
                    </div>
                </md-layout>
            </md-layout>
        </div>
    </div>
</template>

<script lang="ts" src="./App.ts"></script>