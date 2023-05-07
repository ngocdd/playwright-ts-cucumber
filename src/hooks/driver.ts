import { Page } from "@playwright/test";

// create common driver to reuse on all tests
export const Driver = {
    // @ts-ignore
    page: undefined as Page
}