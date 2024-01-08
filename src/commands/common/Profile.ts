import { ActionRowBuilder, AnyComponentBuilder, ApplicationCommandType, AttachmentBuilder, ButtonBuilder, ButtonStyle, Collection } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: "profile",
    description: "Show your profile",
    type: ApplicationCommandType.ChatInput,
    async run({ interaction }) {
        const components = [new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
                .setCustomId("profile_Inventory")
                .setLabel("Инвентарь")
                .setEmoji("💼")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId("profile_Stats")
                .setLabel("Характеристики")
                .setEmoji("📈")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId("profile_Job")
                .setLabel("Работа")
                .setEmoji("🧤")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId("profile_duels")
                .setLabel("Сражения")
                .setEmoji("⚔")
                .setStyle(ButtonStyle.Danger)
        )]
        await interaction.deferReply()

        await interaction.editReply({
            files: [new AttachmentBuilder("https://cdn.discordapp.com/attachments/1185491430588813312/1188390604028248104/1.png?ex=659a59ff&is=6587e4ff&hm=62403beea5af21863a906a78be181b081605765d18b12c0f19f28b42e4e30928&")], components: components
        })
    },
    buttons: new Collection([
        ["backProfile", async (interaction) => {
            await interaction.update({

            })
        }],
        ["profile", async (interaction) => {
            const [, type] = interaction.customId.split("_")
            let component;
            let content: string = "";
            switch (type) {
                case "Inventory":
                    content = "Инвентарь"
                    component = [new ActionRowBuilder<ButtonBuilder>().addComponents(
                        new ButtonBuilder()
                            .setCustomId("backProfile")
                            .setLabel("Обратно в профиль")
                            .setStyle(ButtonStyle.Secondary)
                    )]
                    break;
                case "Stats":
                    content = "Статистики"
                    component = [new ActionRowBuilder<ButtonBuilder>().addComponents(
                        new ButtonBuilder()
                            .setCustomId("backProfile")
                            .setLabel("Обратно в профиль")
                            .setStyle(ButtonStyle.Secondary)
                    )]
                    break;
                case "Job":
                    content = "Работа"
                    component = [new ActionRowBuilder<ButtonBuilder>().addComponents(
                        new ButtonBuilder()
                            .setCustomId("backProfile")
                            .setLabel("Обратно в профиль")
                            .setStyle(ButtonStyle.Secondary)
                    )]
                    break;
                case "duels":
                    content = "Дуэли"
                    component = [new ActionRowBuilder<ButtonBuilder>().addComponents(
                        new ButtonBuilder()
                            .setCustomId("duel_stats")
                            .setEmoji("📊")
                            .setLabel("Статистика")
                            .setStyle(ButtonStyle.Secondary),
                        new ButtonBuilder()
                            .setCustomId("duel_toggleSwitch")
                            .setEmoji("⏯")
                            .setLabel("Приглашения включены")
                            .setStyle(ButtonStyle.Success),
                        new ButtonBuilder()
                            .setCustomId("backProfile")
                            .setLabel("Обратно в профиль")
                            .setStyle(ButtonStyle.Secondary)
                    )]
                    break;
            }
            await interaction.update({
                content: content,
                components: component,
                files: [],
            })
        }],
        ["duel", async (interaction) => {
            const [, type] = interaction.customId.split("_")
            switch (type) {
                case "stats":
                    await interaction.reply({ content: "Идет поиск" })
                    break;

                default:
                    break;
            }
        }]
    ]),
})