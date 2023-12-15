import { ActionRowBuilder, ApplicationCommandType, ButtonBuilder, ButtonStyle, Collection, EmbedBuilder } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: "ping",
    description: "Проверяет состояние бота",
    type: ApplicationCommandType.ChatInput,
    run({ interaction, client }) {
        //Uptime
        let days = Math.floor(interaction.client.uptime / 86400000);
        let hours = Math.floor(interaction.client.uptime / 3600000) % 24;
        let minutes = Math.floor(interaction.client.uptime / 60000) % 60;
        let seconds = Math.floor(interaction.client.uptime / 1000) % 60;

        //Latency Check
        let webLatency = Date.now() - Number(interaction.createdAt);
        let apiLatency = interaction.client.ws.ping;
        let totaLatency = webLatency + apiLatency;

        //Emoji Color
        let emLatency = {
            Green: "🟩",
            Yellow: "🟨",
            Red: "🟥"
        };

        const row = new ActionRowBuilder<ButtonBuilder>({ components: [new ButtonBuilder().setLabel("Button").setEmoji("🤍").setCustomId("test_button").setStyle(ButtonStyle.Success)] })

        //Respond
        interaction.reply({
            ephemeral: true,
            embeds: [
                new EmbedBuilder()
                    .setColor(totaLatency < 200 ? "Green" : totaLatency < 500 ? "Yellow" : "Red")
                    .addFields(
                        { name: "Websocket Latency", value: `\`${webLatency <= 200 ? emLatency.Green : webLatency <= 400 ? emLatency.Yellow : emLatency.Red}\` \`${webLatency}\`ms` },
                        { name: "API Latency", value: `\`${apiLatency <= 200 ? emLatency.Green : apiLatency <= 400 ? emLatency.Yellow : emLatency.Red}\` \`${apiLatency}\`ms` },
                        { name: "Uptime", value: `\`${days} Days\` : \`${hours} Hrs\` : \`${minutes} Mins\` : \`${seconds} Secs\`` },
                    )
            ],
            components: [row]
        });
    },
    buttons: new Collection([
        ["test", async (interaction) => { interaction.update({ components: [] }) }]
    ])
})