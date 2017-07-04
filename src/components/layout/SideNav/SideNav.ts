import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import {ManifestEntry, Section} from '../../../scripts/models/Manifest';
import {getManifest} from '../../../scripts/config/Manifest';

@Component
export default class extends Vue {
    sections: Section[] = [];

    async mounted() {
        const manifest = await getManifest();

        this.sections = manifest.children;
    }
}