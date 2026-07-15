import { Page, expect } from '@playwright/test';

export class ContactUsPage {
    constructor(private page: Page) {}

    async fillContactUsForm(
        name: string,
        email: string,
        subject: string,
        message: string
    ) {
        await this.page.fill('[data-qa="name"]', name);
        await this.page.fill('[data-qa="email"]', email);
        await this.page.fill('[data-qa="subject"]', subject);
        await this.page.fill('[data-qa="message"]', message);
    }

    async uploadFile(filePath: string) {
        await this.page
            .locator('input[type="file"]')
            .setInputFiles(filePath);
    }

    async submitForm() {
        
        const dialogPromise = this.page.waitForEvent('dialog');

            await this.page.click('[data-qa="submit-button"]');

            const dialog = await dialogPromise;
            await dialog.accept();
    }
}