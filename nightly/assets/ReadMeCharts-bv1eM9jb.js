import{r as i,j as t,T as l}from"./iframe-CBgkPC69.js";import{useMDXComponents as p}from"./index-C66QMXp8.js";import{M as u,a as h,k as f}from"./blocks-BcoumYp3.js";import"./Tag-B8m76Vus.js";import"./index-CSWI1r-l.js";import{F as d}from"./CommandsAndQueries-aDUqz5lg.js";import"./copy-BzxBjQG_.js";import{T as b}from"./TableOfContent-BYLwJsVM.js";import{C}from"./index-B5wykcA_.js";import{D}from"./BarChart.stories-C29gn3_n.js";import{D as y}from"./BulletChart.stories-Foj_TVVk.js";import{D as g}from"./ColumnChart.stories-CEs8dBzF.js";import{D as v}from"./ColumnChartWithTrend.stories-QwCCtsq9.js";import{D as x}from"./ComposedChart.stories-D5PyR0bZ.js";import{D as j}from"./DonutChart.stories-CqY49gvE.js";import{D as w}from"./LineChart.stories-BI9Ew-uz.js";import{D as R}from"./PieChart.stories-BPGF5vhB.js";import{D as I}from"./RadarChart.stories-BKiFJ--F.js";import{D as S}from"./RadialChart.stories-3odxZi_r.js";import{D as T}from"./ScatterChart.stories-C5Szjhjw.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DdeQcxst.js";import"./sys-enter-2-B8ilplkM.js";import"./alert-Djr8Qs91.js";import"./index-CyPOXH-j.js";import"./index-CVisliPo.js";import"./index-NhauML--.js";import"./Link-Do7u3EeE.js";import"./index-DRj2B8Mm.js";import"./index-DIhQkvOo.js";import"./index-Cl-N64Re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3_HwdEv.js";import"./addCustomCSSWithScoping-Cqqj-goV.js";import"./index-BPKAtelG.js";import"./Carousel-2wkeagD7.js";import"./ScrollEnablement-CTZS0_mL.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C7Ei4yOv.js";import"./slim-arrow-left-BgQ0S-Az.js";import"./DemoProps-0T-mnxZ-.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DrWIJ0rT.js";import"./ChartContainer-Bv373gDr.js";import"./index-dKLo_6UY.js";import"./useCancelAnimationFallback-BMvlPZQG.js";import"./YAxisTicks-Iy1h8yNQ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter--skgvcFB.js";import"./ChartDataLabel-CCf4q_bn.js";import"./useOnClickInternal-sVuWIufX.js";import"./react-content-loader.es-CmapHFWS.js";import"./useIsRTL-xZg7YMj3.js";import"./useLongestYAxisLabel-D65WpotI.js";import"./ComposedChart-BLLP_JcK.js";import"./Line-YWc-cMhn.js";import"./Scatter-2LCDhg0p.js";import"./index-DUbByFsW.js";import"./index-CebT2ddr.js";import"./Placeholder-CqM-D34x.js";import"./index-DV56OLEs.js";const $=`# @ui5/webcomponents-react-charts

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
