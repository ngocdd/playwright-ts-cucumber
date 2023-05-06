export {};

declare global {
    /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
    namespace nodeJS {
        interface ProcessEnv {
            BROWSER: "chrome" | "firefox" | "webkit",
            ENV: "stg" | "uat" | "prod",
            BASEURL: string,
            HEAD: "true" | "false"
        }
    }
}