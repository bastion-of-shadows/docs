const {md} = require("./util")

md.renderer.rules.blockquote_open  = require("./blockquoteOpen")
md.renderer.rules.blockquote_close = require("./blockquoteClose")
md.renderer.rules.heading_open     = require("./headingOpen")
md.renderer.rules.heading_close    = require("./headingClose")
md.renderer.rules.image            = require("./image")
md.renderer.rules.link_open        = require("./linkOpen")
md.renderer.rules.paragraph_open   = require("./paragraphOpen")
md.renderer.rules.code_inline      = require("./codeInline")
md.renderer.rules.table_open       = require("./tableOpen")
md.renderer.rules.table_close      = require("./tableClose")

// Lists
md.renderer.rules.list_item_open     = require("./listItem")
md.renderer.rules.ordered_list_open  = require("./orderedListOpen")
md.renderer.rules.ordered_list_close = require("./orderedListClose")
md.renderer.rules.bullet_list_open   = require("./bulletListOpen")
md.renderer.rules.bullet_list_close  = require("./bulletListClose")

module.exports = md