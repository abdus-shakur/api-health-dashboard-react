import AvailabilityWidget from '../components/availabilityWidget'
import React, { useState,useEffect,Component } from 'react';

class WidgetHolder extends Component{
    state = {
        data: [{
                    team:"Customer Dashboard",
                    apiName:"Customer Service API",
                    environment:"IT4",
                    envBatch:"info",
                    status:"API Down",
                    statusBatch:"danger",
                    key:"some-name-assigned-for-this-api-value-random",
                    description:"This api aids to fetch acc",
                    availability:"30.00",
                    totalHits:"17803",
                    successHits:"9888",
                    lastUpdated:"5 mins",
                    progressBar:"danger",
                    metadata:[
                        {
                            attribute:"End Point",
                            value:"https://www.google.com/search?q=collapsible+card+bootstrap&oq=collapsable+card+&aqs=chrome.1.69i57j0i10l9.6751j1j7&sourceid=chrome&ie=UTF-8"
                        }
                    ]
                },
                {
                    team:"Customer Dashboard",
                    apiName:"Account Summary API",
                    environment:"IT4",
                    envBatch:"info",
                    status:"Working",
                    statusBatch:"success",
                    key:"some-name-assigned-for-this-api-value-random-1",
                    description:"This api aids to fetch acc",
                    availability:"80.00",
                    totalHits:"100",
                    successHits:"98",
                    lastUpdated:"5 mins",
                    progressBar:"success",
                    metadata:[
                        {
                            attribute:"End Point",
                            value:"https://www.google.com/search?q=collapsible+card+bootstrap&oq=collapsable+card+&aqs=chrome.1.69i57j0i10l9.6751j1j7&sourceid=chrome&ie=UTF-8"
                        },
                        {
                            attribute:"Request Body",
                            value:"{\"QUery\":\"value\"}"
                        },
                        {
                            attribute:"User",
                            value:"Test User ID"
                        }
                    ]
                }]
        };

    async componentDidMount() {
        try {
          setInterval(async () => {
            const res = await fetch('https://api-dashboard-backend.herokuapp.com/test/ui-details',{method:'POST',mode:'cors', headers: new Headers({'env':'it21'})});
            const jsonData1 = await res.json();
            this.setState({data:jsonData1})
          }, 1000);
        } catch(e) {
          console.log(e);
        }
    };

   render(){
    return(
        <main role="main" className="inner cover">
            {this.state.data.map(data1=>(<AvailabilityWidget widgetDetails={data1} key={data1.key}/>))}
        </main>
     );   }

}

export default WidgetHolder;