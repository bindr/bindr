import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {ManifestEntry} from '../../../../scripts/models/Manifest';

@Component({
    name: 'SideNav'
})
export default class extends Vue {
    @Prop()
    entries: ManifestEntry[];
}