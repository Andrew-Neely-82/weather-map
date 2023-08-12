export const getLocation = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      },
      () => console.log("Unable to retrieve your location"),
    );
  } else {
    console.log("Geolocation not supported");
  }
};