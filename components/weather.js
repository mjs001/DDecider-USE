import react from "React";

componentDidMount () {
    let cachedLat = localStorage.getItem("latitude");
    let cachedLon = localStorage.getItem("longitude");

    cachedLat ?
    this.setCoordsFromLocalStorage(cachedLat, cachedLon) :
    this.getCoords () ;
}

export {componentDidMount};
