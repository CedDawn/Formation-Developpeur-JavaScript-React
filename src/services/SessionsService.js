import configData from "../config.json"
import sessionsMock from "../mocks/SessionsMock";

/**
 * The sessions call, returns all the informations in the fetched url
 */
export async function SessionsCall(userId) {
    let result;
    if (configData.mockedData === true) {
        result = sessionsMock
    } else {
        await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
        .then((data) => {
            result = data.json()
        })
    }
    return result
}