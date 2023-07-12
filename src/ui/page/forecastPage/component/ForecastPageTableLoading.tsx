import {Placeholder} from "react-bootstrap";

function ForecastPageTableLoading() {
    return  (
        <>
            {
                Array.from({length: 5}).map(() => (
                    <td>
                        <Placeholder xs={6} />
                        <Placeholder className="w-75" />
                        <Placeholder style={{ width: '25%' }} />
                    </td>
                ))
            }
        </>
    )
}

export default ForecastPageTableLoading