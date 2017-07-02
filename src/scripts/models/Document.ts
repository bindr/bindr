export class Document {
    fileName: string;
    filePath: string;
    contents: string;

    get fileNameWithoutExt(): string {
        if (!this.fileName)
            return null;

        return this.fileName.split('.').slice(0, -1).join('.');
    }

    get fullPath(): string {
        return `${this.filePath}/${this.fileName}`;
    }

    get fullPathWithoutExt(): string {
        return `${this.filePath}/${this.fileNameWithoutExt}`;
    }
}