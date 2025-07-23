module.exports = {
    default: '--require ./features/step_definitions/*js --format progress',
    format: ["allure-cucumberjs/reporter"],
    formatOptions: {
        resultsDir: "allure-results",
    },

}