import AvailabilityWidget from './availabilityWidget'
import React, { useState, useEffect } from 'react';
import Profile from '../resources/preloadedData';
import WidgetAdapter from '../adapters/widgetAdapter'
import Constants from "../constants/configurations"

function WidgetHolder() {

    var [widgetData, setwidgetData] = useState(Profile);
    
    useEffect(() => {
        const interval = process.env.REACT_APP_WIDGET_POLLING_INTERVAL;
        WidgetAdapter.callWidgetDetails(setwidgetData,Constants.DEFAULT_ENVIRONMENT);
        const periodicalFetch = setInterval(()=>WidgetAdapter.callWidgetDetails(setwidgetData,Constants.DEFAULT_ENVIRONMENT), interval);
        return () => { clearInterval(periodicalFetch);};
    }, []);


    return (
        <main role="main" className="inner cover">
            {widgetData.map(data1 => (<AvailabilityWidget widgetDetails={data1} key={data1.key+data1.lastUpdated} />))}
        </main>
    );

}

export default WidgetHolder;