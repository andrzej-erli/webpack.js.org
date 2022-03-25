"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9439],{9439:function(e,a,n){n.r(a),n(7378);var t=n(2682);function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function p(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",s({components:a},n),(0,t.kt)("div",{align:"center"}),(0,t.kt)("p",null,(0,t.kt)("a",{href:"https://npmjs.com/package/json-minimizer-webpack-plugin",parentName:"p"},(0,t.kt)("img",{src:"https://img.shields.io/npm/v/json-minimizer-webpack-plugin.svg",alt:"npm",parentName:"a"})),"\n",(0,t.kt)("a",{href:"https://nodejs.org",parentName:"p"},(0,t.kt)("img",{src:"https://img.shields.io/node/v/json-minimizer-webpack-plugin.svg",alt:"node",parentName:"a"})),"\n",(0,t.kt)("a",{href:"https://david-dm.org/webpack-contrib/json-minimizer-webpack-plugin",parentName:"p"},(0,t.kt)("img",{src:"https://david-dm.org/webpack-contrib/json-minimizer-webpack-plugin.svg",alt:"deps",parentName:"a"})),"\n",(0,t.kt)("a",{href:"https://github.com/webpack-contrib/json-minimizer-webpack-plugin/actions",parentName:"p"},(0,t.kt)("img",{src:"https://github.com/webpack-contrib/json-minimizer-webpack-plugin/workflows/json-minimizer-webpack-plugin/badge.svg",alt:"tests",parentName:"a"})),"\n",(0,t.kt)("a",{href:"https://codecov.io/gh/webpack-contrib/json-minimizer-webpack-plugin",parentName:"p"},(0,t.kt)("img",{src:"https://codecov.io/gh/webpack-contrib/json-minimizer-webpack-plugin/branch/master/graph/badge.svg",alt:"cover",parentName:"a"})),"\n",(0,t.kt)("a",{href:"https://gitter.im/webpack/webpack",parentName:"p"},(0,t.kt)("img",{src:"https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg",alt:"chat",parentName:"a"})),"\n",(0,t.kt)("a",{href:"https://packagephobia.now.sh/result?p=json-minimizer-webpack-plugin",parentName:"p"},(0,t.kt)("img",{src:"https://packagephobia.now.sh/badge?p=json-minimizer-webpack-plugin",alt:"size",parentName:"a"}))),(0,t.kt)("p",null,"This plugin uses ",(0,t.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",parentName:"p"},"JSON.stringify()")," to minify your JSON."),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"getting-started",parentName:"h2"}),"Getting Started",(0,t.kt)("a",{href:"#getting-started","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"To begin, you'll need to install ",(0,t.kt)("inlineCode",{parentName:"p"},"json-minimizer-webpack-plugin"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-console",parentName:"pre"},"npm install json-minimizer-webpack-plugin --save-dev\n")),(0,t.kt)("p",null,"or"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-console",parentName:"pre"},"yarn add -D json-minimizer-webpack-plugin\n")),(0,t.kt)("p",null,"or"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-console",parentName:"pre"},"pnpm add -D json-minimizer-webpack-plugin\n")),(0,t.kt)("p",null,"Then add the plugin to your ",(0,t.kt)("inlineCode",{parentName:"p"},"webpack")," configuration. For example:"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," JsonMinimizerPlugin ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"require"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},'"json-minimizer-webpack-plugin"'),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," CopyPlugin ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"require"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},'"copy-webpack-plugin"'),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\nmodule",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  module",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    rules",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n      ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n        test",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token regex",parentName:"code"},"/\\.json$/i"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n        type",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},'"asset/resource"'),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  plugins",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n    ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"CopyPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      patterns",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n        ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n          context",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," path",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"resolve"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"__dirname",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},'"dist"'),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n          ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"from"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},'"./src/*.json"'),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n        ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  optimization",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    minimize",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    minimizer",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n      ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line"),"\n      ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// `...`"),"\n      ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"JsonMinimizerPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"And run ",(0,t.kt)("inlineCode",{parentName:"p"},"webpack")," via your preferred method."),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"options",parentName:"h2"}),"Options",(0,t.kt)("a",{href:"#options","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("a",{href:"#test",parentName:"strong"},(0,t.kt)("inlineCode",{parentName:"a"},"test")))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("a",{href:"#include",parentName:"strong"},(0,t.kt)("inlineCode",{parentName:"a"},"include")))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("a",{href:"#exclude",parentName:"strong"},(0,t.kt)("inlineCode",{parentName:"a"},"exclude")))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("a",{href:"#minimizeroptions",parentName:"strong"},(0,t.kt)("inlineCode",{parentName:"a"},"minimizerOptions"))))),(0,t.kt)("h3",null,(0,t.kt)("span",{id:"test",parentName:"h3"}),(0,t.kt)("inlineCode",{parentName:"h3"},"test"),(0,t.kt)("a",{href:"#test","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"Type:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"test")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token builtin",parentName:"code"},"string")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"|")," RegExp ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,t.kt)("span",{className:"token builtin",parentName:"code"},"Array"),(0,t.kt)("span",{className:"token operator",parentName:"code"},"<"),(0,t.kt)("span",{className:"token builtin",parentName:"code"},"string")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"|")," RegExp",(0,t.kt)("span",{className:"token operator",parentName:"code"},">"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"Default: ",(0,t.kt)("inlineCode",{parentName:"p"},"/\\.json(\\?.*)?$/i")),(0,t.kt)("p",null,"Test to match files against."),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  optimization",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    minimize",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    minimizer",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n      ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"JsonMinimizerPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n        test",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token regex",parentName:"code"},"/\\.foo\\.json/i"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h3",null,(0,t.kt)("span",{id:"include",parentName:"h3"}),(0,t.kt)("inlineCode",{parentName:"h3"},"include"),(0,t.kt)("a",{href:"#include","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"Type:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"include")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token builtin",parentName:"code"},"string")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"|")," RegExp ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,t.kt)("span",{className:"token builtin",parentName:"code"},"Array"),(0,t.kt)("span",{className:"token operator",parentName:"code"},"<"),(0,t.kt)("span",{className:"token builtin",parentName:"code"},"string")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"|")," RegExp",(0,t.kt)("span",{className:"token operator",parentName:"code"},">"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"Default: ",(0,t.kt)("inlineCode",{parentName:"p"},"undefined")),(0,t.kt)("p",null,"Files to include."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  optimization",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    minimize",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    minimizer",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n      ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"JsonMinimizerPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n        include",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token regex",parentName:"code"},"/\\/includes/"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h3",null,(0,t.kt)("span",{id:"exclude",parentName:"h3"}),(0,t.kt)("inlineCode",{parentName:"h3"},"exclude"),(0,t.kt)("a",{href:"#exclude","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"Type:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"exclude")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token builtin",parentName:"code"},"string")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"|")," RegExp ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,t.kt)("span",{className:"token builtin",parentName:"code"},"Array"),(0,t.kt)("span",{className:"token operator",parentName:"code"},"<"),(0,t.kt)("span",{className:"token builtin",parentName:"code"},"string")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"|")," RegExp",(0,t.kt)("span",{className:"token operator",parentName:"code"},">"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"Default: ",(0,t.kt)("inlineCode",{parentName:"p"},"undefined")),(0,t.kt)("p",null,"Files to exclude."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  optimization",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    minimize",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    minimizer",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n      ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"JsonMinimizerPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n        exclude",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token regex",parentName:"code"},"/\\/excludes/"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h3",null,(0,t.kt)("span",{id:"minimizeroptions",parentName:"h3"}),(0,t.kt)("inlineCode",{parentName:"h3"},"minimizerOptions"),(0,t.kt)("a",{href:"#minimizeroptions","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"Type:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"minimizerOptions")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  space",(0,t.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"null")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,t.kt)("span",{className:"token builtin",parentName:"code"},"string")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,t.kt)("span",{className:"token builtin",parentName:"code"},"number"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  replacer",(0,t.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"null")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,t.kt)("span",{className:"token builtin",parentName:"code"},"Function")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,t.kt)("span",{className:"token builtin",parentName:"code"},"Array"),(0,t.kt)("span",{className:"token operator",parentName:"code"},"<"),(0,t.kt)("span",{className:"token builtin",parentName:"code"},"string")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,t.kt)("span",{className:"token builtin",parentName:"code"},"number"),(0,t.kt)("span",{className:"token operator",parentName:"code"},">"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"Default: ",(0,t.kt)("inlineCode",{parentName:"p"},"{ replacer: null, space: null }")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," ",(0,t.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",parentName:"p"},"options"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  optimization",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    minimize",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    minimizer",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n      ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"JsonMinimizerPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n        minimizerOptions",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n          space",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},'"\\t"'),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n        ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"contributing",parentName:"h2"}),"Contributing",(0,t.kt)("a",{href:"#contributing","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"Please take a moment to read our contributing guidelines if you haven't yet done so."),(0,t.kt)("p",null,(0,t.kt)("a",{href:"https://github.com/webpack-contrib/json-minimizer-webpack-plugin/blob/master/.github/CONTRIBUTING.md",parentName:"p"},"CONTRIBUTING")),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"license",parentName:"h2"}),"License",(0,t.kt)("a",{href:"#license","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,(0,t.kt)("a",{href:"https://github.com/webpack-contrib/json-minimizer-webpack-plugin/blob/master/LICENSE",parentName:"p"},"MIT")))}p.isMDXComponent=!0,a.default=p}}]);