class Configuration {
    init(config: IConfigOptions) {
        Object.assign(this, config);
    }
}

export const Config = new Configuration();