import {Placeholder} from "react-bootstrap";

function ForecastPageTableLoading() {
    return  <>
        {
            Array.from({length: 5}).map((_value, index) =>
                <tr key={index}>
                    <td>
                        <Placeholder xs={6} />
                        <Placeholder className="w-75" />
                        <Placeholder style={{ width: '25%' }} />
                    </td>
                </tr>
            )
        }
    </>
}

export default ForecastPageTableLoading