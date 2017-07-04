<template>
    <div id="AppComponent">
        <TopNav></TopNav>

        <div class="container bindr-root">
            <div class="row">
                <div class="col-xs-12 col-md-4 col-lg-3">
                    <SideNav></SideNav>
                </div>
                <div class="col-xs-12  col-md-8 col-lg-9">
                    <div id="router-container">
                        <router-view :key="$route.fullPath"></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./App.ts"></script>