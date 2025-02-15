import { App, PluginSettingTab, Setting } from "obsidian";
import ObsidianBlockReferencerPlugin from "./main";

export class ObsidianBlockReferencerSettingsTab extends PluginSettingTab {
	plugin: ObsidianBlockReferencerPlugin;

	constructor(app: App, plugin: ObsidianBlockReferencerPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}