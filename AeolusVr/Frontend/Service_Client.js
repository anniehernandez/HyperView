import ApiClient from "./ApiClient.js";

export const Sign_Up = async (email, full_name, cellphone, notification_status) => {
    try{
        const response = await ApiClient.post("/api/Sign_Up/", {
            email: email,
            full_name: full_name,
            cellphone: cellphone,
            notification_status: notification_status
        });
        return response.data;
    }catch(error){
        throw error.response?.data || error.message;
    }
}

export const Send_Message = async (email, full_name, message) => {
    try{
        const response = await ApiClient.post("/api/Message/", {
            email: email,
            full_name: full_name,
            message: message
        });
        return response.data;
    }catch(error){
        throw error.response?.data || error.message;
    }
}