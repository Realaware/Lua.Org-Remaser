(this.webpackJsonpluaorgremaster=this.webpackJsonpluaorgremaster||[]).push([[94],{188:function(e,n){e.exports=function(e){var n="[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",a="\\|[^]*?\\|",i="(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",s={className:"literal",begin:"\\b(t{1}|nil)\\b"},b={className:"number",variants:[{begin:i,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{begin:"#(c|C)\\("+i+" +"+i,end:"\\)"}]},l=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),r=e.COMMENT(";","$",{relevance:0}),t={begin:"\\*",end:"\\*"},g={className:"symbol",begin:"[:&]"+n},c={begin:n,relevance:0},o={begin:a},d={contains:[b,l,t,g,{begin:"\\(",end:"\\)",contains:["self",s,l,b,c]},c],variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{name:"quote"}},{begin:"'"+a}]},m={variants:[{begin:"'"+n},{begin:"#'"+n+"(::"+n+")*"}]},u={begin:"\\(\\s*",end:"\\)"},v={endsWithParent:!0,relevance:0};return u.contains=[{className:"name",variants:[{begin:n,relevance:0},{begin:a}]},v],v.contains=[d,m,u,s,b,l,r,t,g,o,c],{name:"Lisp",illegal:/\S/,contains:[b,e.SHEBANG(),s,l,r,d,m,u,c]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_lisp.b47aa4c3.chunk.js.map