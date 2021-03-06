const {md, defaultRenderer} = require("./util")

const defaultRender = md.renderer.rules.ordered_list_open || defaultRenderer

module.exports = function (tokens, idx, options, env, self) {
	// Get the token
	const token  = tokens[idx]

	// Add Bootstrap classes
	token.attrPush(["class", "my-5 mx-3"])

	// Return with opening div wrapper
	return "<div class='col-12'>" + defaultRender(tokens, idx, options, env, self)
}