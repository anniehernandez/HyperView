import sequelize from "../DB/DB.js";
import { DataTypes } from "sequelize";

const User = sequelize.define(
    "User", {
        Email: {
            type: DataTypes.STRING(50),
            primaryKey: true,
            allowNull: false
        },
        Full_Name:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        CellPhone:{
            type: DataTypes.STRING(20),
            allowNull: true 
        },
        Notification_Status:{
            type: DataTypes.BOOLEAN
        }
    },
    {
        tableName: "User",
        timestamps: false
    }
);
export default User;