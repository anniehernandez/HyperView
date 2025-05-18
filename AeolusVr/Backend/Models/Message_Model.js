import sequelize from "../DB/DB.js";
import { DataTypes } from "sequelize";

const Message = sequelize.define(
    "Message", {
        MessageId:{
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        Email:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        Full_Name:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        Message_Content:{
            type: DataTypes.STRING(600),
            allowNull: false
        }
    },
    {
        tableName: "Message",
        timestamps: false
    }
);
export default Message;