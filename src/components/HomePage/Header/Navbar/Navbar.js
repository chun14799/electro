import './Navbar.scss'
const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="container">
                <div className="navbar-wrapper">
                    <ul className='navbar-nav'>
                        <li>
                            <div className="content">
                                <a href="/#">Home</a>
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                            <ul></ul>
                        </li>
                        <li>
                            <div className="content">
                                <a href="/#">TV{' & '}Audio</a>
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                            <ul></ul>
                        </li> 
                        <li>
                            <div className="content">
                                <a href="/#">Smart Phones</a>
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                            <ul></ul>
                        </li> 
                        <li>
                            <div className="content">
                                <a href="/#">Laptop{' & '}Desktops</a>
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                            <ul></ul>
                        </li> 
                        <li>
                            <div className="content">
                                <a href="/#">Gadgets</a>
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                            <ul></ul>
                        </li> 
                        <li>
                            <div className="content">
                                <a href="/#">GPS{' & '}Car</a>
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                            <ul></ul>
                        </li> 
                        <li>
                            <div className="content">
                                <a href="/#" className='dropdown-toggle'>Cameras{' & '}Accessories</a>
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                            <ul></ul>
                        </li> 
                        <li>
                            <div className="content">
                                <a href="/#">Movies{' & '}Games</a>
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                            <ul></ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;