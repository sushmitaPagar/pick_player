import axios from "axios";
import { url } from "./constants";

const getApiResponse = async () => {
    try{
        let response = await axios.get(url);

        return response.data;

    }catch(error){
        console.log(error);
    }
};

export default getApiResponse;