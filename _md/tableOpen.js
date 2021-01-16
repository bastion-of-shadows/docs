const {md, defaultRenderer} = require("./util")

const defaultRender = md.renderer.rules.table_open || defaultRenderer

module.exports = function (tokens, idx, options, env, self) {
	// Get the token
	const token  = tokens[idx]

	// Add Bootstrap classes
	token.attrPush(["class", "table table-hover table-dark table-bordered table-responsive-md"])

	// Return with opening div wrapper
	return "<div class='col-12'>" + defaultRender(tokens, idx, options, env, self)
}