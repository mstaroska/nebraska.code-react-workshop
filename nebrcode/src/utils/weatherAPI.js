import store from "./store";

const getWeatherData = () => {
    const APIKEY = "2828523af4dba317783f978855fc3f26";
    const city = store.getGlobalState().searchTerm;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=imperial&cnt=7&appid=${APIKEY}`;
    
    fetch(url).then(resp => {
        return resp.json();
    }).then(data => {
        console.log(data);
        store.updateGlobalState(data);
    });
}

export {
    getWeatherData
}