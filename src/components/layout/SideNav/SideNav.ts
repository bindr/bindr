import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import {ManifestEntry, Section} from '../../../scripts/models/Manifest';
import {getManifest} from '../../../scripts/config/Manifest';

import SideNav from './ListGroup/ListGroup.vue';

@Component({
    components: {
        SideNav
    }
})
export default class extends Vue {
    manifest: ManifestEntry = null;

    async mounted() {
        const manifest = await getManifest();

        this.manifest = manifest;
    }
}