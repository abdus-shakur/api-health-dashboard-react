import { useState, useEffect } from 'react';
import WidgetAdapter from '../adapters/widgetAdapter';

function SidePane() {

    var [envList, setEnvList] = useState({ data: [{ name: "IT", env: ["IT1", "IT2"] }] });

    useEffect(() => {
        WidgetAdapter.getEnvironmentList(setEnvList);
    }, []);

    var setEnvironment = (value) => {
        WidgetAdapter.setEnvironment(value.target.name);
    }

    return (
        <nav className="pushy pushy-left text-left" data-focus="#first-link" id="sidebar">
            <div className="pushy-content">
                <div className="sidebar-header">
                    <h3 className="text-center">DIY Dashboard</h3>
                </div>
                <ul className="lisst-unstyled components">
                    <p>Related Links</p>
                    <li className="active">
                        <a href="#teams-dropdown" data-toggle="collapse" aria-expanded="false"
                            className="dropdown-toggle">Teams</a>
                        <ul className="collapse lisst-unstyled" id="teams-dropdown">
                            <li><a>Customer Dashboard</a></li>
                        </ul>
                    </li>
                    <li className="active">
                        <a href="#env-dropdown" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">API Availability</a>
                        <ul className="collapse lisst-unstyled" id="env-dropdown">
                            {envList.data.map(envObject => (
                                <li className="active">
                                    <a href={'#env-drop' + envObject.name} data-toggle="collapse" aria-expanded="false"
                                        className="dropdown-toggle">{envObject.name}</a>
                                    <ul className="collapse lisst-unstyled" id={'env-drop' + envObject.name}>
                                        {envObject.env.map(envVariable => (<li><a href="#" name={envVariable} onClick={setEnvironment}>{envVariable}</a></li>))}
                                    </ul>
                                </li>))}

                        </ul>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">About Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default SidePane;