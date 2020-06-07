interface i18nOptions {
    directory?: string;
    defaultLocale?: string;
}
declare class i18n {
    private directory;
    private defaultLocale;
    private locales;
    private constants;
    private strings;
    constructor(options?: i18nOptions);
    private substitute;
    getConstant(key: string): string;
    getLocales(): string[];
    getString(locale: string, namespace: string, key: string, ...args: unknown[]): string;
}
export { i18n };
//# sourceMappingURL=index.d.ts.map