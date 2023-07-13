import {Table} from "react-bootstrap";
import "../css/ForecastPageTableStyle.css"
import {ForecastData} from "../../../../data/ForecastData.tsx";
import ForecastPageTableRow from "./ForecastPageTableRow.tsx";
import ForecastPageTableLoading from "./ForecastPageTableLoading.tsx";

type Props = {
    forecastData: ForecastData | undefined
}

function ForecastPageTable(props: Props) {
    const renderForecastData = () =>    {
        if(props.forecastData)  {
            return props.forecastData.list.map((value, index) =>
                <ForecastPageTableRow key={index} data={value}/>)
        }   else    {
            return <ForecastPageTableLoading/>
        }
    }

    return (
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Temperature (Min/Max)</th>
                <th>Humidity</th>
                <th>Weather</th>
            </tr>
            </thead>
            <tbody key="ForecastTable">
            {
                renderForecastData()
            }
            </tbody>
        </Table>
    )
}

export default ForecastPageTable