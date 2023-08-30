var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markerPropsFunc = exports.reactMapGLPropsFunc = exports.mapStyling = exports.onGeolocateFunc = exports.makerVisibilityFunc = exports.onMarkerDragEndFunc = exports.accessToken = void 0;
const react_1 = __importDefault(require("react"));
const AddLocation_1 = __importDefault(require("@mui/icons-material/AddLocation"));
const LocationOff_1 = __importDefault(require("@mui/icons-material/LocationOff"));
// * Mapbox API key
exports.accessToken = process.env.REACT_APP_MAP_KEY;
const onMarkerDragEndFunc = (setViewState, viewState, setLocation) => {
    return (event) => {
        let { lngLat } = event;
        const longitude = lngLat.lng;
        const latitude = lngLat.lat;
        // Set the new view state
        setViewState(Object.assign(Object.assign({}, viewState), { longitude,
            latitude }));
        const position = [longitude, latitude];
        // Update the location state
        setLocation(position);
    };
};
exports.onMarkerDragEndFunc = onMarkerDragEndFunc;
// * Changes the show marker svg
const makerVisibilityFunc = (markerVisible) => (markerVisible ? react_1.default.createElement(LocationOff_1.default, null) : react_1.default.createElement(AddLocation_1.default, null));
exports.makerVisibilityFunc = makerVisibilityFunc;
function onGeolocateFunc(setViewState, viewState, setLocation) {
    return (result) => {
        const { coords } = result;
        const { longitude, latitude } = coords;
        // Set the new view state
        setViewState(Object.assign(Object.assign({}, viewState), { longitude,
            latitude }));
        // Update the location state with a placeholder value
        const locationName = "Current Location"; // Replace with actual location name logic
        setLocation(locationName);
    };
}
exports.onGeolocateFunc = onGeolocateFunc;
// * Map styling function
const mapTheme = { lightMap: "mapbox://styles/mapbox/streets-v9", darkMap: "mapbox://styles/mapbox/navigation-night-v1" };
const mapStyling = (darkMode) => (darkMode ? mapTheme.lightMap : mapTheme.darkMap);
exports.mapStyling = mapStyling;
// * Props for mapboxgl component
function reactMapGLPropsFunc(setViewState, accessToken, mapStyle) {
    return {
        id: "mapData",
        style: {
            height: "400px",
            width: "100%",
        },
        onMove: (e) => setViewState(e.viewState),
        mapboxAccessToken: accessToken,
        mapStyle: mapStyle,
    };
}
exports.reactMapGLPropsFunc = reactMapGLPropsFunc;
function markerPropsFunc(viewState, onMarkerDragEnd) {
    return {
        id: "map-marker",
        longitude: viewState.longitude,
        latitude: viewState.latitude,
        draggable: true,
        onDragEnd: onMarkerDragEnd,
    };
}
exports.markerPropsFunc = markerPropsFunc;
