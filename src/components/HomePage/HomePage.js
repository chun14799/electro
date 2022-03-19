import Header from "./Header/Header";
import NavigationHeader from "./NavigationHeader/NavigationHeader";
import TopBar from "./TopBar/TopBar";


const HomePage = () => {
    return (
        <div className="home-page">
            <TopBar></TopBar>
            <Header></Header>
            <NavigationHeader></NavigationHeader>
        </div>
    )
}

export default HomePage;