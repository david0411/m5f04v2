import {ChartData} from "../../../../data/ChartData.tsx";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import "../css/WeatherChartStyle.css"

type Props = {
    data?: ChartData[]
}

function WeatherChart(props: Props) {
    return (
        <div className="weatherChart">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="humidity" stroke="#82ca9d"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default WeatherChart