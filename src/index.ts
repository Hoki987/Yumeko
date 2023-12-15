import { CustomClient } from "./structs/classes/CustomClient";
export * from "colors"

const client = new CustomClient()

client.start();

export { client }