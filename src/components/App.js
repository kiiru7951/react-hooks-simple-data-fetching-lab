// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [imageFetch, setImageFetch] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const apiUrl = "https://dog.ceo/api/breeds/image/random";
    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setImageFetch(data.message);
                setIsLoaded(true);
                // console.log(data);
            });
    }, []);

    if (!isLoaded) return <p>Loading...</p>;

    return (
        <div>
            <img src={imageFetch} alt="A Random Dog"></img>
        </div>
    );
}

export default App;