import configData from "../config.json"
import userMock from "../mocks/UserMock";

/**
 * The user call, returns all the informations in the fetched url
 */
export async function UserCall(userId) {
    let result;
    if (configData.mockedData === true) {
        result = userMock
    } else {
        await fetch(`http://localhost:3000/user/${userId}`)
        .then((data) => {
            result = data.json()
        })
    }
    return result
}