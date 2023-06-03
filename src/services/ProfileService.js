/**
 * The user call, returns all the informations in the fetched url by using the token
 */
export async function ProfileCall(token, data) {
  console.log(data)
  return await fetch(`http://localhost:3001/api/v1/user/profile`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: data[0],
      lastName: data[1],
    }),
  }).then((data) => {
    return data.json()
  })
}
