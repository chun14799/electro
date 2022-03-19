import './TopBar.scss'

const TopBar = () => {
    return (
        <div className="Top-bar">
            <div className="container">
                {/* Start Top bar */}
                <div className="Top-bar-wrapper">
                    <div className="Top-bar-welcome">
                        <a href="/#">Welcome to Worldwide Electronics Store</a>
                    </div>
                    <ul className="Top-bar-menu">
                        <li>
                            <ion-icon name="location-outline"></ion-icon>
                            <a href="store-locator">Store Locator</a>
                        </li>
                        <li className='line'>|</li>
                        <li>
                            <ion-icon name="airplane-outline"></ion-icon>
                            <a href="store-locator">Track Your Order</a>
                        </li>
                        <li className='line'>|</li>
                        <li>
                            <ion-icon name="cart-outline"></ion-icon>
                            <a href="store-locator">Shop</a>
                        </li>
                        <li className='line'>|</li>
                        <li>
                            <ion-icon name="person-outline"></ion-icon>
                            <a href="/my-account">My Account</a>
                        </li>
                    </ul>
                </div>
                {/* End Top bar */}
            </div>
        </div>
    )
}

export default TopBar;