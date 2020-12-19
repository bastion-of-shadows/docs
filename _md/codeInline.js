const {md, defaultRenderer} = require("./util")

const defaultRender = md.renderer.rules.code_inline || defaultRenderer

module.exports = function (tokens, idx, options, env, self) {
	// Get the token
	const token  = tokens[idx]

	// Add Bootstrap classes
	token.attrPush(["class", "px-1 bg-dark"])

	return defaultRender(tokens, idx, options, env, self)
}