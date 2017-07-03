<template>
    <div id="AppComponent">
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <a href="#" class="navbar-brand">
                        <img class="navbar-brand-logo" src="../assets/images/logo_shadow.png" alt="Bindr Logo"/>
                        Bindr
                    </a>
                </div>
            </div>
        </nav>

        <div class="container bindr-root">
            <div class="row">
                <div class="col-xs-12 col-md-4 col-lg-3">
                    <!--<bindr-nav></bindr-nav>-->
                </div>
                <div class="col-xs-12  col-md-8 col-lg-9">
                    <div id="router-container">
                        <!--<router-view></router-view>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./App.ts"></script>