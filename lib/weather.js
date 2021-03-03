let weather = {
    temp: "8c",
    humidity: "75%",
    precipitation: "2%",
    location: "Liverpool",
    wind: "7 mph",
    day: "Tuesday",
    time: "16:00",
    type: "Mostly sunny"

}

const getWeather = () => {
    return weather;
}

console.log(getWeather());

module.exports = getWeather;