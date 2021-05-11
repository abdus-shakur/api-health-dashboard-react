function SideBar(){
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
                        <li><a href="#">Customer Dashboard</a></li>
                    </ul>
                </li>
                <li className="active">
                    <a href="#env-dropdown" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">API
                        Availability</a>
                    <ul className="collapse lisst-unstyled" id="env-dropdown">
                        <li><a href="#">Best Availability</a></li>
                        <li className="active">
                            <a href="#env-drop-it" data-toggle="collapse" aria-expanded="false"
                                className="dropdown-toggle">IT</a>
                            <ul className="collapse lisst-unstyled" id="env-drop-it">
                                <li><a href="#">IT-1</a></li>
                                <li><a href="#">IT-2</a></li>
                                <li><a href="#">IT-3</a></li>
                                <li><a href="#">IT-4</a></li>
                                <li><a href="#">IT-5</a></li>
                                <li><a href="#">IT-6</a></li>
                            </ul>
                        </li>
                        <li className="active">
                            <a href="#foodSubmenu-uat" data-toggle="collapse" aria-expanded="false"
                                className="dropdown-toggle">UAT</a>
                            <ul className="collapse lisst-unstyled" id="foodSubmenu-uat">
                                <li><a href="#">UAT-1</a></li>
                                <li><a href="#">UAT-2</a></li>
                                <li><a href="#">UAT-3</a></li>
                                <li><a href="#">UAT-4</a></li>
                                <li><a href="#">UAT-5</a></li>
                                <li><a href="#">UAT-6</a></li>
                            </ul>
                        </li>
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

export default SideBar;