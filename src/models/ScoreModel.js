function createScoreModel(data) {
    let score = {};

    if (data.data.todayScore) {
        score = {
            score: data.data.todayScore*100
        }
    } 

    if (data.data.score) {
        score = {
            score: data.data.score*100
        }
    }

    return score
}

export default createScoreModel;