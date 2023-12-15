import { client } from "../..";
import { Event } from "../../structs/types/Event";

export default new Event({
    name: "interactionCreate",
    run(interaction) {
        if (interaction.isButton()) client.buttons.get(interaction.customId.split("_")[0])?.(interaction)
        if (interaction.isStringSelectMenu()) client.selects.get(interaction.customId.split("_")[0])?.(interaction)
        if (interaction.isModalSubmit()) client.modals.get(interaction.customId.split("_")[0])?.(interaction)
    }
})