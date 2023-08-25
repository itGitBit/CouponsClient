import './Home.css';


export function Home()  {
    let home  = "https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-horizontal-product-shot-01-ps5-en-23nov20?$1600px--t$";
    return (
        <div className="Home">
            <h1>Welcome To Motherlode</h1>
            <img className="img" src = {home}
            alt = "home"></img>
</div>
    );
}