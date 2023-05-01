function createActivityModel(data) {
    const sessions = [
        {
            kilogram: data.data.sessions[0].kilogram,
            calories: data.data.sessions[0].calories
        },
        {
            kilogram: data.data.sessions[1].kilogram,
            calories: data.data.sessions[1].calories
        },
        {
            kilogram: data.data.sessions[2].kilogram,
            calories: data.data.sessions[2].calories
        },
        {
            kilogram: data.data.sessions[3].kilogram,
            calories: data.data.sessions[3].calories
        },
        {
            kilogram: data.data.sessions[4].kilogram,
            calories: data.data.sessions[4].calories
        },
        {
            kilogram: data.data.sessions[5].kilogram,
            calories: data.data.sessions[5].calories
        },
        {
            kilogram: data.data.sessions[6].kilogram,
            calories: data.data.sessions[6].calories
        }
    ]

    return sessions
}

export default createActivityModel;