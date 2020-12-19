const {md, defaultRenderer} = require("./util")

const defaultRender = md.renderer.rules.heading_close || defaultRenderer

module.exports = function (tokens, idx, options, env, self) {
	// Get the token
	const token  = tokens[idx]

	// Return the render with the opening wrapper div
	return token.tag === "h2" ? defaultRender(tokens, idx, options, env, self) + "</div>" : defaultRender(tokens, idx, options, env, self)
}