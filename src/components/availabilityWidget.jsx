import { useState, useEffect, useRef } from 'react';


function AvailabilityWidget(props) {
    var envBatch = "badge badge-" + props.widgetDetails.envBatch;
    var apiStatusBatch = "badge badge-pill badge-" + props.widgetDetails.statusBatch;
    var progressBarWidth = { width: new String(props.widgetDetails.availability) + "%" };
    var uniqueId = "#" + props.widgetDetails.key;
    var progressBarClass = "progress-bar bg-" + props.widgetDetails.progressBar + " progress-bar-striped progress-bar-animated"
    var metadata = props.widgetDetails.metadata;
    var [seconds, setSeconds] = useState(Number(props.widgetDetails.lastUpdated.split(" ")[0]));

    useEffect(() => {
        const intervalTimer = setInterval(() => {
            seconds = seconds + 1;
            setSeconds(seconds);
        }, 1000);
        return () => {
            clearInterval(intervalTimer);
            setSeconds(Number(props.widgetDetails.lastUpdated.split(" ")[0]));
        };
    }, []);

    return (
        <div className="card mb-3 bg-dark container-fluid">
            <div className="card-header">
                <div className="d-flex bd-highlight">
                    <div className="p-2 flex-grow-1 bd-highlight">
                        <p className="card-text text-left">{props.widgetDetails.team}</p>
                    </div>
                    <div className="p-2 bd-highlight">
                        <p className="card-text text-right">Test Environment <span className={envBatch}>{props.widgetDetails.environment}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md">
                            <h5 className="card-title text-left">{props.widgetDetails.apiName}    <span
                                className={apiStatusBatch}>{props.widgetDetails.status}</span></h5>
                        </div>
                        <div className="col-md">
                            <p className="card-text text-right">{props.widgetDetails.key}</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid p-3">
                    <div className="row pb-3">
                        <div className="col">
                            <p className="card-text text-left">{props.widgetDetails.description}</p>
                        </div>
                    </div>
                </div>

                <div className="progress ml-3">
                    <div className={progressBarClass}
                        role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                        style={progressBarWidth}></div>
                </div>

                <div className="d-flex bd-highlight">
                    <div className="p-2 flex-grow-1 bd-highlight">
                        <p className="card-text text-left pl-2 ">API Availability<br />{props.widgetDetails.availability} % Uptime</p>
                    </div>
                    <div className="p-2 bd-highlight">
                        <p className="card-text text-right">Total Hits<br />{props.widgetDetails.totalHits}</p>
                    </div>
                    <div className="p-2 bd-highlight">
                        <p className="card-text text-right">Success Hits<br />{props.widgetDetails.successHits}</p>
                    </div>
                </div>

                <p className="card-text"><small className="text-muted">Last updated {seconds} Seconds ago</small></p>
                <p>
                    <button className="btn btn-white btn-outline-success" type="button" data-toggle="collapse"
                        data-target={uniqueId} aria-expanded="false" aria-controls="collapseExample">
                        View More Info
                        </button>
                </p>
                <div className="collapse" id={props.widgetDetails.key}>
                    <div className="card card-body bg-info bg-gradient-light text-light">
                        {metadata.map(data => (<p className="card-text text-left" key={data.attribute} >{data.attribute}<br />{data.value} </p>))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AvailabilityWidget;