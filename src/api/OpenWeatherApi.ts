import axios from "axios";
import {ForecastData} from "../data/ForecastData.tsx";


export const getForecastWeather = async () =>   {
    try {
        const cityCode = "1819730"
        const appid = "336226ba578c3b386bead938bce9b09d"
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityCode}&units=metric&appid=${appid}`
        const response = await axios.get<ForecastData>(apiUrl)
        return response.data;
    }
    catch(e)    {
        console.error(e);
    }
}