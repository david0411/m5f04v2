import {ForecastData} from "../../data/ForecastData.tsx";
import {ChartData} from "../../data/ChartData.tsx";
import {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import ForecastPageHeader from "./forecastPage/component/ForecastPageHeader.tsx";
import WeatherChart from "./forecastPage/component/WeatherChart.tsx";
import ForecastPageTable from "./forecastPage/component/ForecastPageTable.tsx";
import moment from "moment";
import * as ForecastWeatherApi from "../../api/OpenWeatherApi.ts";

function ForecastPage() {
    const [forecastData, setForecastData] = useState<ForecastData | undefined>(undefined)
    const [chartData, setChartData] = useState<ChartData[] | undefined>(undefined)
    const [updateTime, setUpdateTime] = useState<string | undefined>(undefined)

    const getDataFromApi = async () => {
        setUpdateTime(undefined);
        setForecastData(undefined);
        setChartData(undefined);
        const result = await ForecastWeatherApi.getForecastWeather()
        setUpdateTime(moment().format("DD-MM-YYYY HH:mm:ss"));
        setForecastData(result);
        setChartData(result?.list.map(value => (
                {
                    name: moment.unix(value.dt).format("DD-MM-YYYY HH:mm:ss"),
                    temperature: value.main.temp,
                    humidity: value.main.humidity
                }
            )
        ))
    }

    useEffect(() => {
        getDataFromApi();
    }, []);

    return (
        <>
            <Container>
                <ForecastPageHeader updateTime={updateTime} getForecastData={getDataFromApi}/>
                <WeatherChart data={chartData}/>
                <ForecastPageTable forecastData={forecastData}/>
            </Container>
        </>
    )
}

export default ForecastPage