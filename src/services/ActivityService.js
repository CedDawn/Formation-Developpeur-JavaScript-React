import configData from "../config.json"
import activityMock from "../mocks/ActivityMock";

/**
 * The activity call, returns all the informations in the fetched url
 */
export async function ActivityCall(userId) {
    let result;
    if (configData.mockedData === true) {
        result = activityMock
    } else {
        await fetch(`http://localhost:3000/user/${userId}/activity`)
        .then((data) => {
            result = data.json()
        })
    }
    return result
}