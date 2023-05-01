function createPerformanceModel(data) {
    const performance = [
        {
            value: data.data.data[0].value,
            kind: "Cardio"
        },
        {
            value: data.data.data[1].value,
            kind: "Energie"
        },
        {
            value: data.data.data[2].value,
            kind: "Endurance"
        },
        {
            value: data.data.data[3].value,
            kind: "Force"
        },
        {
            value: data.data.data[4].value,
            kind: "Vitesse"
        },
        {
            value: data.data.data[5].value,
            kind: "Intensité"
        }
    ]

    return performance
}

export default createPerformanceModel;