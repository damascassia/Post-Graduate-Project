import evaluationRepository from '../repositories/evaluationRepository.js'

const saveEvaluation = (evaluationModel) => {
    return evaluationRepository.saveEvaluation(evaluationModel);
}

const getEvaluationById = (id) => {
    return evaluationRepository.getEvaluationById(id);
}

const getAllEvaluations = () => {
    return evaluationRepository.getEvaluations();
}

const deleteEvaluationById = (id) => {
    return evaluationRepository.deleteEvaluationById(id);
}

const updateEvaluationById = (id, evaluationModel) => {
    return evaluationRepository.updateEvaluationById(id, evaluationModel);
}
const service = {

    saveEvaluation,
    getAllEvaluations,
    getEvaluationById,
    deleteEvaluationById,
    updateEvaluationById,

}

export default service;