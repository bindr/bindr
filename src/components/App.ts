import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({
    template: require("./App.html") as string
})
export default class App extends Vue
{
}