import{j as e}from"./iframe-CBgkPC69.js";import{useMDXComponents as a}from"./index-C66QMXp8.js";import{M as d,C as r}from"./blocks-BcoumYp3.js";import"./Tag-B8m76Vus.js";import"./index-CSWI1r-l.js";import{C as c}from"./ControlsWithNote-glB5Tfir.js";import{D as h}from"./DocsHeader-9d7rGQKl.js";import{F as m}from"./CommandsAndQueries-aDUqz5lg.js";import{M as l,a as p}from"./LegendConfig-Dm7Qvtav.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-BI9Ew-uz.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DdeQcxst.js";import"./sys-enter-2-B8ilplkM.js";import"./alert-Djr8Qs91.js";import"./index-BPKAtelG.js";import"./index-NhauML--.js";import"./Link-Do7u3EeE.js";import"./copy-D_XS_RdO.js";import"./copy-BzxBjQG_.js";import"./GitHub-Mark-C6tSE-50.js";import"./TableOfContent-BYLwJsVM.js";import"./index-CyPOXH-j.js";import"./index-CVisliPo.js";import"./index-DRj2B8Mm.js";import"./index-DIhQkvOo.js";import"./index-Cl-N64Re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3_HwdEv.js";import"./addCustomCSSWithScoping-Cqqj-goV.js";import"./DemoProps-0T-mnxZ-.js";import"./index-DV56OLEs.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-Iy1h8yNQ.js";import"./ChartContainer-Bv373gDr.js";import"./index-dKLo_6UY.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter--skgvcFB.js";import"./staticProps-DrWIJ0rT.js";import"./ChartDataLabel-CCf4q_bn.js";import"./useLongestYAxisLabel-D65WpotI.js";import"./react-content-loader.es-CmapHFWS.js";import"./Line-YWc-cMhn.js";import"./useIsRTL-xZg7YMj3.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(h,{of:i,isChart:!0}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(n.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(n.h3,{id:"with-formatter",children:"With Formatter"}),`
`,e.jsx(r,{of:C}),`
`,e.jsx(n.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,e.jsxs(n.p,{children:["You can set a reference line to any value by using the ",e.jsx(n.code,{children:"referenceLine"})," ",e.jsx(n.code,{children:"chartConfig"})," property. ",e.jsx(n.code,{children:"referenceLine"})," accepts all properties described ",e.jsx(n.a,{href:"https://recharts.org/en-US/api/ReferenceLine",rel:"nofollow",children:"here"}),", but it's recommended to only use ",e.jsx(n.code,{children:"label"}),",",e.jsx(n.code,{children:"value"})," and ",e.jsx(n.code,{children:"color"})," to preserve the intended design."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<LineChart
  {...props}
  chartConfig={{
    referenceLine: {
      color: 'red',
      label: 'MAX',
      value: 650
    }
  }}
/>
`})}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"with-linear-gradient",children:"With Linear Gradient"}),`
`,e.jsx(r,{of:L}),`
`,e.jsx(n.h4,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
  return (
    <LineChart
      dataset={bigDataSet}
      dimensions={[{ accessor: 'name' }]}
      measures={[
        {
          accessor: 'users',
          width: 2,
          color: 'url(#colorUsers)'
        }
      ]}
    >
      <defs>
        <linearGradient id="colorUsers" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="green" />
        </linearGradient>
      </defs>
    </LineChart>
  );
};
`})}),`
`,e.jsx(l,{of:W}),`
`,e.jsx(p,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(m,{})]})}function le(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{le as default};
