"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[66665],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,h=f["".concat(u,".").concat(d)]||f[d]||s[d]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98251:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={title:"Apache Hudi meets Apache Flink",excerpt:"The design and latest progress of the integration of Apache Hudi and Apache Flink.",author:"wangxianghu",category:"blog"},u=void 0,p={permalink:"/cn/blog/2020/10/15/apache-hudi-meets-apache-flink",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-10-15-apache-hudi-meets-apache-flink.md",source:"@site/blog/2020-10-15-apache-hudi-meets-apache-flink.md",title:"Apache Hudi meets Apache Flink",description:"Apache Hudi (Hudi for short) is a data lake framework created at Uber. Hudi joined the Apache incubator for incubation in January 2019, and was promoted to the top Apache project in May 2020. It is one of the most popular data lake frameworks.",date:"2020-10-15T00:00:00.000Z",formattedDate:"October 15, 2020",tags:[],readingTime:9.705,truncated:!0,authors:[{name:"wangxianghu"}],prevItem:{title:"Origins of Data Lake at Grofers",permalink:"/cn/blog/2020/10/19/Origins-of-Data-Lake-at-Grofers"},nextItem:{title:"How nClouds Helps Accelerate Data Delivery with Apache Hudi on Amazon EMR",permalink:"/cn/blog/2020/10/06/cdc-solution-using-hudi-by-nclouds"}},l={authorsImageUrls:[void 0]},s=[],f={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Hudi (Hudi for short) is a data lake framework created at Uber. Hudi joined the Apache incubator for incubation in January 2019, and was promoted to the top Apache project in May 2020. It is one of the most popular data lake frameworks."))}d.isMDXComponent=!0}}]);