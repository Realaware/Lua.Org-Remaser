(this.webpackJsonpluaorgremaster=this.webpackJsonpluaorgremaster||[]).push([[23],{114:function(e,t){function n(e){return e?"string"===typeof e?e:e.source:null}function a(e){return r("(",e,")?")}function r(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var r=t.map((function(e){return n(e)})).join("");return r}e.exports=function(e){var t,n,i=function(e){var t,n=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),i="decltype\\(auto\\)",s="[a-zA-Z_]\\w*::",c="(decltype\\(auto\\)|"+a(s)+"[a-zA-Z_]\\w*"+a("<[^<>]+>")+")",o={className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},l={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},u={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},d={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{"meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(l,{className:"meta-string"}),{className:"meta-string",begin:/<.*?>/},n,e.C_BLOCK_COMMENT_MODE]},p={className:"title",begin:a(s)+e.IDENT_RE,relevance:0},m=a(s)+e.IDENT_RE+"\\s*\\(",_={keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",built_in:"_Bool _Complex _Imaginary",_relevance_hints:["asin","atan2","atan","calloc","ceil","cosh","cos","exit","exp","fabs","floor","fmod","fprintf","fputs","free","frexp","auto_ptr","deque","list","queue","stack","vector","map","set","pair","bitset","multiset","multimap","unordered_set","fscanf","future","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","tolower","toupper","labs","ldexp","log10","log","malloc","realloc","memchr","memcmp","memcpy","memset","modf","pow","printf","putchar","puts","scanf","sinh","sin","snprintf","sprintf","sqrt","sscanf","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","tanh","tan","unordered_map","unordered_multiset","unordered_multimap","priority_queue","make_pair","array","shared_ptr","abort","terminate","abs","acos","vfprintf","vprintf","vsprintf","endl","initializer_list","unique_ptr","complex","imaginary","std","string","wstring","cin","cout","cerr","clog","stdin","stdout","stderr","stringstream","istringstream","ostringstream"],literal:"true false nullptr NULL"},g={className:"function.dispatch",relevance:0,keywords:_,begin:r(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!while)/,e.IDENT_RE,(t=/\s*\(/,r("(?=",t,")")))},f=[g,d,o,n,e.C_BLOCK_COMMENT_MODE,u,l],b={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:_,contains:f.concat([{begin:/\(/,end:/\)/,keywords:_,contains:f.concat(["self"]),relevance:0}]),relevance:0},h={className:"function",begin:"("+c+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:_,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:i,keywords:_,relevance:0},{begin:m,returnBegin:!0,contains:[p],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[l,u]},{className:"params",begin:/\(/,end:/\)/,keywords:_,relevance:0,contains:[n,e.C_BLOCK_COMMENT_MODE,l,u,o,{begin:/\(/,end:/\)/,keywords:_,relevance:0,contains:["self",n,e.C_BLOCK_COMMENT_MODE,l,u,o]}]},o,n,e.C_BLOCK_COMMENT_MODE,d]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:_,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(b,h,g,f,[d,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",end:">",keywords:_,contains:["self",o]},{begin:e.IDENT_RE+"::",keywords:_},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:d,strings:l,keywords:_}}}(e);return i.disableAutodetect=!0,i.aliases=[],e.getLanguage("c")||(t=i.aliases).push.apply(t,["c","h"]),e.getLanguage("cpp")||(n=i.aliases).push.apply(n,["cc","c++","h++","hpp","hh","hxx","cxx"]),i}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_cLike.99f398e0.chunk.js.map