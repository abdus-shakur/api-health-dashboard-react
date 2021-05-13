import AvailabilityWidget from './availabilityWidget'
import React, { useState, useEffect } from 'react';
import Profile from '../resources/preloadedData';

function WidgetHolder() {

    var [widgetData, setwidgetData] = useState(Profile);
    
    useEffect(() => {
        const interval = process.env.REACT_APP_WIDGET_POLLING_INTERVAL;
        console.log("Interval : "+interval)
        const callWidgetDetails = async () => {
            var res = await fetch('https://api-dashboard-backend.herokuapp.com/test/ui-details', { method: 'POST', mode: 'cors', headers: new Headers({ 'env': 'it21' }) });
            var apiWidgetData = await res.json();
            setwidgetData(apiWidgetData);
        };
        callWidgetDetails();
        const periodicalFetch = setInterval(callWidgetDetails, interval);
        return () => { clearInterval(periodicalFetch);};
    }, []);


    return (
        <main role="main" className="inner cover">
            {widgetData.map(data1 => (<AvailabilityWidget widgetDetails={data1} key={data1.key+data1.lastUpdated} />))}
        </main>
    );

}

export default WidgetHolder;