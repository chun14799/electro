import './NavigationHeader.scss'
import {UnorderedListOutlined, RightOutlined} from '@ant-design/icons'
const NavigationHeader = () => {
    return (
        <div className="NavigationHeader">
            <div className="container">
                <div className="row">
                    <div className="col-3 departments-menu">
                        <div className="dropdown">
                            <a href="/#" className='deparments-menu-title'>
                                <span><UnorderedListOutlined className='menu-icon'/> All Departments</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className='menu-item'>
                                    <a href="/#">Value of the day</a>
                                </li>
                                <li className='menu-item'>
                                    <a href="/#">Top 100 Offers</a>
                                </li>
                                <li className='menu-item'>
                                    <a href="/#">New Arrivals</a>
                                </li>
                                <li className='menu-item menu-custom-item'>
                                    <a href="/#">Computers {"&"} Accessories</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-9 secondary-menu-navigation"></div>
                </div>
            </div>
        </div>
    )
}

export default NavigationHeader;