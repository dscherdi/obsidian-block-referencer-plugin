import { App, Modal } from "obsidian";

export class BlockLinkSearchModal extends Modal {
    constructor(app: App) {
        super(app);
    }

    onOpen() {
        const {contentEl} = this;
        contentEl.empty();

        const inputEl = contentEl.createEl('input', { type: 'text', placeholder: 'Search...' });
        inputEl.addClass('search-input');

        inputEl.addEventListener('input', (event) => {
            const query = (event.target as HTMLInputElement).value;
            console.log('Search query:', query);
            // Add your search logic here
        });
    }

    onClose() {
        const {contentEl} = this;
        contentEl.empty();
    }
}