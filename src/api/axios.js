import axios from "axios";
import {validateUserCredentials} from "../utils/validation";

export const getCredentials = async ({url, data}, {rejectWithValue}) => {
    try {
        const response = await axios.get(url);
        return validateUserCredentials(response.data, data)
    } catch (err) {
        return rejectWithValue({errorMessage: err.message});
    }
};

export const getInfoData = async ({url}) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.error(err)
    }
}
