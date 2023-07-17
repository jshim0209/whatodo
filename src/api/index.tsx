import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary";

const getPlacesData = async (
  sw: { lat: number; lng: number },
  ne: { lat: number; lng: number }
) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        "X-RapidAPI-Key": "8bfaa8321bmsh9d6643dc31ca417p172fd4jsnf412b95d8095",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { getPlacesData };
