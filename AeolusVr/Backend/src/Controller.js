import User from "./Models/User_Model.js";
import Message from "./Models/Message_Model.js";

export const Sign_Up = async (req, res) => {
    try{
        const { email, full_name, cellphone, notification_status } = req.body;

        await User.create({
            Email: email,
            Full_Name: full_name,
            CellPhone: cellphone,
            Notification_Status: notification_status
        });

        const payload = {
            status: true,
            message: "Succesful Sign Up"
        }

        res.json(payload);
        
    }catch(error){
        res.status(500).json(error);
    }
}

export const Send_Message = async (req, res) => {
    try{
        const { email, full_name, message } = req.body;
        
        await Message.create({
            Email: email,
            Full_Name: full_name,
            Message_Content: message
        });

        const payload = {
            status: true,
            message: "Message sent succesfully"
        }

        res.json(payload);
    }catch(error){
        res.status(500).json(error);
    }
}
