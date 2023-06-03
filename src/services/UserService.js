/**
 * The user call, returns all the informations in the fetched url by using the token
 */
export async function UserCall(token) {
  return await fetch(`http://localhost:3001/api/v1/user/profile`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => {
    return data.json()
  })
}
