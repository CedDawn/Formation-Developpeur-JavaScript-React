function createUserModel(data) {
    const user = {
        user: {
            id: data.data.id,
            firstName: data.data.userInfos.firstName,
            lastName: data.data.userInfos.lastName
        }
    }
    return user
}

export default createUserModel;