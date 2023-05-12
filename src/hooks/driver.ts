import { Page } from "@playwright/test";
import { Logger } from "winston";

// create common driver to reuse on all tests
export const Driver = {
    // @ts-ignore
    page: undefined as Page,
    logger: undefined as Logger
}