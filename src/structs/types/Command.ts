import { ApplicationCommandData, ButtonInteraction, Collection, CommandInteraction, CommandInteractionOptionResolver, ModalSubmitInteraction, StringSelectMenuInteraction } from "discord.js";
import { Sequelize } from "sequelize";
import { CustomClient } from "../classes/CustomClient";

interface CommandProps {
    client: CustomClient,
    interaction: CommandInteraction,
    options: CommandInteractionOptionResolver
}

export type ComponentsButton = Collection<string, (interaction: ButtonInteraction) => any>
export type ComponentsSelect = Collection<string, (interaction: StringSelectMenuInteraction) => any>
export type ComponentsModal = Collection<string, (interaction: ModalSubmitInteraction) => any>

interface CommandComponents {
    buttons?: ComponentsButton;
    selects?: ComponentsSelect;
    modals?: ComponentsModal;
}

export type CommandType = ApplicationCommandData & CommandComponents & {
    run(props: CommandProps): any
}

export const sequelize = new Sequelize('database', 'user', 'password', {
        dialect: 'sqlite',
        host: 'localhost',

        storage: 'database.sqlite',
        logging: true,
    });
export class Command {
    constructor(options: CommandType) {
        options.dmPermission = false;
        Object.assign(this, options)
    }
}