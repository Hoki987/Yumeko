import { DataTypes } from "sequelize"
import { sequelize } from "../types/Command";

export const Users = sequelize.define(
    "Users",
    {
        UserID: {
            primaryKey: true,
            unique: true,
            type: DataTypes.STRING,
            allowNull: false,
        },
        Avatar: {
           type: DataTypes.NUMBER,
           defaultValue: 1 
        },
        Experience: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        TotalLvl: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        Job: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Race: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Age: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        Reputation: {
            type: DataTypes.NUMBER,
            allowNull: false,
            defaultValue: 0
        },
        DuelWin: {
            type: DataTypes.NUMBER,
            allowNull: false,
            defaultValue: 0
        },
        DuelLose: {
            type: DataTypes.NUMBER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
    tableName: "Users"
});