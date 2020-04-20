const asyncWrapper = require('../../middlewares/asyncWrapper');

const exampleController = asyncWrapper( async (req, res, next) => {
    // Controller Code
});

module.exports = exampleController;