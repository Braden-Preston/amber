// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     return config;
// }

const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
} = require("customize-cra");
const path = require("path");

module.exports = override(
    addDecoratorsLegacy(),
    disableEsLint()
);