//===========================================/ Import the modeles \===========================================\\
import { green } from "colors";
import { version } from "discord.js";
import { client } from "../..";
import { Event } from "../../structs/types/Event";

//==========< OTHERS >==========\\
export * from "colors"

//===========================================< Code >===========================\\
export default new Event({
    name: "ready",
    once: true,
    run(interaction) {
        const { commands } = client

        console.log(`${green(`[READY]`).bold}` + `Logging into Discord...`.yellow);
        console.table({
            "Name": interaction.user.tag,
            "Author": `.hoki`,
            "Discord.js": `v${version}`,
            "Node.js": `${process.version}`,
            "Guilds": client.guilds.cache.size,
            "Users": client.users.cache.size,
            "Channels": client.channels.cache.size,
            "Slash Commands": commands.size,
            "Events": client.eventNames.length,
            "Arch": process.arch
        });
        console.log(`${green(`[READY]`).bold}` + `${interaction.user.tag} is online!`.yellow);
    }
})