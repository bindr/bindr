<template>
    <div id="AppComponent">
        <TopNav></TopNav>

        <div class="container">
            <!-- Sidebar Navigtation -->
            <SideNav></SideNav>

            <div class="col-xs-12  col-md-8 col-lg-9">
                <div id="router-container">
                    <router-view :key="$route.fullPath"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./App.ts"></script>