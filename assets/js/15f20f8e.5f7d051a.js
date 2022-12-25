"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,f=h["".concat(l,".").concat(u)]||h[u]||c[u]||r;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r=n.p+"assets/images/chain_of_thought_example-37c925a2720c9c4bb4c823d237bc72c8.png",o=n.p+"assets/images/prompted_palm-20fba06418ed8569b51f0dd376c03b41.png",s={sidebar_position:3,locale:"en-us",style:"chicago"},l="Chain of Thought Prompting",p={unversionedId:"intermediate/chain_of_thought",id:"intermediate/chain_of_thought",title:"Chain of Thought Prompting",description:"Chain of Thought (CoT) prompting (@wei2022chain) is a recently developed prompting",source:"@site/docs/intermediate/chain_of_thought.md",sourceDirName:"intermediate",slug:"/intermediate/chain_of_thought",permalink:"/docs/intermediate/chain_of_thought",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v0.0.2/docs/intermediate/chain_of_thought.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,locale:"en-us",style:"chicago"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddd9\u200d\u2642\ufe0f Intermediate",permalink:"/docs/category/\ufe0f-intermediate"},next:{title:"Zero Shot Chain of Thought",permalink:"/docs/intermediate/zero_shot_cot"}},m={},c=[{value:"Example",id:"example",level:2},{value:"Incorrect",id:"incorrect",level:4},{value:"Correct",id:"correct",level:4},{value:"Results",id:"results",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Notes",id:"notes",level:2}],h={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chain-of-thought-prompting"},"Chain of Thought Prompting"),(0,i.kt)("p",null,"Chain of Thought (CoT) prompting",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," is a recently developed prompting\nmethod, which encourages the LLM to explain its reasoning. The below image",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\nshows a few shot standard prompt (left) compared to a chain of thought prompt (right)."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:r,style:{width:"750px"}})),(0,i.kt)("div",{style:{textAlign:"center"}},"Regular Prompting vs CoT (Wei et al.)"),(0,i.kt)("p",null,"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning\nprocess is explained in the exemplars, the LLM will also show the reasoning process\nwhen answering the prompt. This explanation of reasoning often leads to more accurate\nresults."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Here are a few demos. The first shows GPT-3 (davinci-002)\nfailing to solve a simple word problem. The second shows GPT-3 (davinci-002) succesfully solving the same problem, by using CoT prompting."),(0,i.kt)("h4",{id:"incorrect"},"Incorrect"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-002","initial-prompt":"Which is a faster way to get to work?\\nOption 1: Take a 1000 minute bus, then a half hour train, and finally a 10 minute bike ride.\\nOption 2: Take an 800 minute bus, then an hour train, and finally a 30 minute bike ride.","initial-response":"Option 1 is a faster way to get to work.","max-tokens":"256","box-rows":"7","model-temp":"0","top-p":"0"}),(0,i.kt)("h4",{id:"correct"},"Correct"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-002","initial-prompt":"Which is a faster way to get home?\\nOption 1: Take an 10 minutes bus, then an 40 minute bus, and finally a 10 minute train.\\nOption 2: Take a 90 minutes train, then a 45 minute bike ride, and finally a 10 minute bus.\\nOption 1 will take 10+40+10 = 60 minutes.\\nOption 2 will take 90+45+10=145 minutes.\\nSince Option 1 takes 60 minutes and Option 2 takes 145 minutes, Option 1 is faster.\\n\\nWhich is a faster way to get to work?\\nOption 1: Take a 1000 minute bus, then a half hour train, and finally a 10 minute bike ride.\\nOption 2: Take an 800 minute bus, then an hour train, and finally a 30 minute bike ride.","initial-response":"Option 1 will take 1000+30+10=1040 minutes. Option 2 will take 800+60+30=890 minutes. Since Option 2 takes 890 minutes and Option 1 takes 1040 minutes, Option 2 is faster.","max-tokens":"256","box-rows":"18","model-temp":"0","top-p":"0"}),(0,i.kt)("h2",{id:"results"},"Results"),(0,i.kt)("p",null,"CoT has been shown to be effective in improving results on tasks like\narithmetic, commonsense, and symbolic reasoning tasks",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),".\nIn particular, prompted PaLM 540B",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," achieves 57% solve\nrate accuracy on GSM8K",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," (SOTA at the time)."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:o,style:{width:"300px"}})),(0,i.kt)("div",{style:{textAlign:"center"}},"Comparison of models on the GSM8K benchmark (Wei et al.)"),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,'Importantly, according to Wei et al., "CoT only yields performance gains when used with models of \u223c100B parameters". Smaller models wrote illogical chains of thought, which led to worse accuracy than standard prompting. Models usually get performance boosts from CoT prompting in a manner proportional to the size of the model.'),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"No language models were ",(0,i.kt)("del",{parentName:"p"},"hurt")," finetuned in the process of writing this chapter \ud83d\ude0a."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Chowdhery, A., Narang, S., Devlin, J., Bosma, M., Mishra, G., Roberts, A., Barham, P., Chung, H. W., Sutton, C., Gehrmann, S., Schuh, P., Shi, K., Tsvyashchenko, S., Maynez, J., Rao, A., Barnes, P., Tay, Y., Shazeer, N., Prabhakaran, V., \u2026 Fiedel, N. (2022). PaLM: Scaling Language Modeling with Pathways.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);