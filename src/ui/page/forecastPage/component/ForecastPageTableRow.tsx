import {List} from "../../../../data/ForecastData.tsx";
import * as moment from "moment/moment";
import "../css/ForecastPageTableStyle.css"

type Props = {
    data: List
}

function ForecastPageTableRow(props: Props) {
    return <>
        <tr>
            <td>{moment.unix(props.data.dt).format("DD/MM/YYYY")}</td>
            <td>{moment.unix(props.data.dt).format("HH:mm")}</td>
            <td>{props.data.main.temp_min}/{props.data.main.temp_max}</td>
            <td>{props.data.main.humidity}%</td>
            <td>
                <div className="weatherImg"
                     style={{backgroundImage: `url("https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png")`}}></div>
            </td>
        </tr>
    </>
}

export default ForecastPageTableRow