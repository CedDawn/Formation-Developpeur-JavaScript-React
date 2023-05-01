function createSessionsModel(data) {
    const sessions = [
        {
            day: "L",
            sessionLength: data.data.sessions[0].sessionLength
        },
        {
            day: "M",
            sessionLength: data.data.sessions[1].sessionLength
        },
        {
            day: "M", 
            sessionLength: data.data.sessions[2].sessionLength
        },
        {
            day: "J", 
            sessionLength: data.data.sessions[3].sessionLength
        },
        {
            day: "V", 
            sessionLength: data.data.sessions[4].sessionLength
        },
        {
            day: "S", 
            sessionLength: data.data.sessions[5].sessionLength
        },
        {
            day: "D", 
            sessionLength: data.data.sessions[6].sessionLength
        }
    ]

    return sessions
}

export default createSessionsModel;