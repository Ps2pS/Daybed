import axios from "axios";

export const getHomePageData = async (url) => {
    let data = await axios.get(url)
    return data
}



// export  {getHomePageData}