function createInformationsModel(data) {
    const infos = {
        calories: data.data.keyData.calorieCount, 
        glucids: data.data.keyData.carbohydrateCount,
        lipids: data.data.keyData.lipidCount,
        proteins: data.data.keyData.proteinCount
    }

    return infos
}

export default createInformationsModel;