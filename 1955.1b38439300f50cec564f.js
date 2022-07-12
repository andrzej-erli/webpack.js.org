"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1955],{1955:function(e,a,n){n.r(a),n(7378);var t=n(2682);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function s(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",o({components:a},n),(0,t.kt)("p",null,"To disambiguate in your ",(0,t.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," between ",(0,t.kt)("a",{href:"/guides/development",parentName:"p"},"development")," and ",(0,t.kt)("a",{href:"/guides/production",parentName:"p"},"production builds")," you may use environment variables."),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,t.kt)("p",{parentName:"aside"},"webpack's environment variables are different from the ",(0,t.kt)("a",{href:"https://en.wikipedia.org/wiki/Environment_variable",parentName:"p"},"environment variables")," of operating system shells like ",(0,t.kt)("inlineCode",{parentName:"p"},"bash")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"CMD.exe"))),(0,t.kt)("p",null,"The webpack command line ",(0,t.kt)("a",{href:"/api/cli/#environment-options",parentName:"p"},"environment option")," ",(0,t.kt)("inlineCode",{parentName:"p"},"--env")," allows you to pass in as many environment variables as you like. Environment variables will be made accessible in your ",(0,t.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),". For example, ",(0,t.kt)("inlineCode",{parentName:"p"},"--env production")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"--env goal=local"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-bash",parentName:"pre"},"npx webpack --env ",(0,t.kt)("span",{className:"token assign-left variable",parentName:"code"},"goal"),(0,t.kt)("span",{className:"token operator",parentName:"code"},"="),"local --env production --progress")),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,t.kt)("p",{parentName:"aside"},"Setting up your ",(0,t.kt)("inlineCode",{parentName:"p"},"env")," variable without assignment, ",(0,t.kt)("inlineCode",{parentName:"p"},"--env production")," sets ",(0,t.kt)("inlineCode",{parentName:"p"},"env.production")," to ",(0,t.kt)("inlineCode",{parentName:"p"},"true")," by default. There are also other syntaxes that you can use. See the ",(0,t.kt)("a",{href:"/api/cli/#environment-options",parentName:"p"},"webpack CLI")," documentation for more information.")),(0,t.kt)("p",null,"There is one change that you will have to make to your webpack config. Typically, ",(0,t.kt)("inlineCode",{parentName:"p"},"module.exports")," points to the configuration object. To use the ",(0,t.kt)("inlineCode",{parentName:"p"},"env")," variable, you must convert ",(0,t.kt)("inlineCode",{parentName:"p"},"module.exports")," to a function:"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," path ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"require"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'path'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\nmodule",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function-variable function",parentName:"code"},"exports")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"env"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// Use env.<YOUR VARIABLE> here:"),"\n  console",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'Goal: '"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," env",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"goal",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";")," ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// 'local'"),"\n  console",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'Production: '"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," env",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"production",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";")," ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// true"),"\n\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"return")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    entry",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'./src/index.js'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    output",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      filename",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'bundle.js'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      path",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," path",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"resolve"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"__dirname",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'dist'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,t.kt)("p",{parentName:"aside"},"Webpack CLI offers some ",(0,t.kt)("a",{href:"/api/cli/#cli-environment-variables",parentName:"p"},"built-in environment variables")," which you can access inside a webpack configuration.")))}s.isMDXComponent=!0,a.default=s}}]);