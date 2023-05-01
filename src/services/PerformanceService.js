import configData from "../config.json"
import performanceMock from "../mocks/PerformanceMock";

/**
 * The performance call, returns all the informations in the fetched url
 */
export async function PerformanceCall(userId) {
    let result;
    if (configData.mockedData === true) {
        result = performanceMock
    } else {
        await fetch(`http://localhost:3000/user/${userId}/performance`)
        .then((data) => {
            result = data.json()
        })
    }
    return result
}