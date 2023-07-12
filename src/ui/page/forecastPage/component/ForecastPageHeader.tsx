import "../css/ForecastPageHeaderStyle.css"

type Props = {
    updateTime: string | undefined
    getForecastData: () => Promise<void>
}

function ForecastPageHeader(props: Props) {
    return <>
        <div className="d-flex justify-content-between">
            <h1 className="headerStyle1">
                5 Day / 3 Hour Forecast
            </h1>
            <div className="d-flex">
                <div className="headerStyle2">Last Update Time: <br/>
                    {
                        props.updateTime
                            ? props.updateTime
                            : "loading"
                    }
                </div>
                <div className="emptySpace"></div>
                <div id="reloadButton" onClick={props.getForecastData}></div>
            </div>
        </div>
        <div className="headerStyle3">
            Hong Kong
        </div>
    </>
}

export default ForecastPageHeader