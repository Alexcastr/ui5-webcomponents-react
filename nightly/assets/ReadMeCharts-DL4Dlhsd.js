import{r as i,j as t,T as l}from"./iframe-BoDosl1V.js";import{useMDXComponents as p}from"./index-D-BpoX_4.js";import{M as u,a as h,m as f}from"./blocks-CBhOySKJ.js";import"./Tag-D7LV4qU2.js";import"./index-CGQovKK-.js";import{F as d}from"./CommandsAndQueries-c4e7f4Pd.js";import"./copy-CIN6HpsY.js";import{T as b}from"./TableOfContent-CeP7S69c.js";import{C}from"./index-DvGWkhej.js";import{D}from"./BarChart.stories-DsklbxaA.js";import{D as y}from"./BulletChart.stories-D9KgAw6U.js";import{D as g}from"./ColumnChart.stories-CPsUx3sO.js";import{D as v}from"./ColumnChartWithTrend.stories-BeNqL9m0.js";import{D as x}from"./ComposedChart.stories-DgPo-bXv.js";import{D as j}from"./DonutChart.stories-CJsBpc-j.js";import{D as w}from"./LineChart.stories-BMYLAvNx.js";import{D as R}from"./PieChart.stories-d7b5yW31.js";import{D as I}from"./RadarChart.stories-4LubVYYt.js";import{D as S}from"./RadialChart.stories-Ka0bHawf.js";import{D as T}from"./ScatterChart.stories-DNocPNRT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CDUpZ58x.js";import"./sys-enter-2-Bzr7621o.js";import"./alert-EQ5Jvnxe.js";import"./index-BG9wgA-l.js";import"./index-CevsoFu_.js";import"./index-Bb1qbt_L.js";import"./Link-CVP6m2Am.js";import"./index-CACQPD-Y.js";import"./index-DrDoQuEf.js";import"./index-Q7TrqRnw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY600kGs.js";import"./addCustomCSSWithScoping-Deev-1U6.js";import"./index-C-NSE-pK.js";import"./Carousel-BbRf5eiW.js";import"./ScrollEnablement-C7ohg2B1.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BtVdi39L.js";import"./slim-arrow-left-BDp0OMYf.js";import"./DemoProps-Ol21bwnG.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B5WVwAE7.js";import"./ChartContainer-G1O8trZB.js";import"./index-Y6vZYHeB.js";import"./useCancelAnimationFallback-Bsrr538j.js";import"./YAxisTicks-Bd6W-s-w.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D2CgWuBs.js";import"./ChartDataLabel-t5uNE4et.js";import"./useOnClickInternal-CjVNOGbq.js";import"./react-content-loader.es-CNmUm-0T.js";import"./useIsRTL-BqxIKVG_.js";import"./useLongestYAxisLabel-CjunS2Je.js";import"./ComposedChart-BXprNkw3.js";import"./Line-7F8iN-gq.js";import"./Scatter-X-qjV16A.js";import"./index-DfQxMIXT.js";import"./index-9Oxj4JAK.js";import"./Placeholder-e7udKPCb.js";import"./index-CLrGSOhO.js";const $=`# @ui5/webcomponents-react-charts

Chart library built on top of [recharts](https://recharts.org/) for ui5-webcomponents-react.

## Installation

\`\`\`bash
npm install @ui5/webcomponents-react-charts
\`\`\`

## Accessibility

Charts only offer limited accessibility support with only basic built-in features, so it’s essential to ensure your implementation meets the accessibility standards of your application.

## React 19 support

To use this library with React 19 you have to override your \`react-is\` version to match your React version!

- **npm:**

  \`\`\`json
    "overrides": {
      "react-is": "19.1.0"
    },
  \`\`\`

- **yarn**

  \`\`\`json
    "resolutions": {
      "react-is": "19.1.0"
    },
  \`\`\`

## Static CSS

If you’ve enabled \`staticCSSInjected\` on the \`ThemeProvider\` component ([learn more here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-server-side-rendering--docs#add-to-existing-project)), make sure to also import the \`charts\` stylesheet. Otherwise, charts won’t be rendered correctly.

\`\`\`ts
import '@ui5/webcomponents-react-charts/styles.css';
\`\`\`

## Documentation

You can find an interactive documentation in our [Storybook](https://ui5.github.io/webcomponents-react/).

## Contribute

Please check our [Contribution Guidelines](https://github.com/UI5/webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/UI5/webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/UI5/webcomponents-react).

<!-- Use the force -->
`;function E(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:$.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(E,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:T}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Ft(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Ft as default};
