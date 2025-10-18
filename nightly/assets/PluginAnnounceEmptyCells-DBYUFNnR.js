import{j as t}from"./iframe-CBgkPC69.js";import{useMDXComponents as n}from"./index-C66QMXp8.js";import{I as i,F as m}from"./CommandsAndQueries-aDUqz5lg.js";import{M as p,C as s}from"./blocks-BcoumYp3.js";import"./Tag-B8m76Vus.js";import"./index-CSWI1r-l.js";import"./copy-BzxBjQG_.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-UGSbc_Mw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CyPOXH-j.js";import"./index-CVisliPo.js";import"./index-NhauML--.js";import"./Link-Do7u3EeE.js";import"./index-DRj2B8Mm.js";import"./index-DIhQkvOo.js";import"./index-Cl-N64Re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3_HwdEv.js";import"./addCustomCSSWithScoping-Cqqj-goV.js";import"./index-BPKAtelG.js";import"./information-DdeQcxst.js";import"./sys-enter-2-B8ilplkM.js";import"./alert-Djr8Qs91.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CfEw92Ww.js";import"./delete-Cd9YznwH.js";import"./settings-Uhf80ZJa.js";import"./NoData-DJ3qzGVx.js";import"./IllustratedMessage-DgpiWJaC.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Do_mtmMY.js";import"./index-BEQdboP8.js";import"./index-Bbj3QzeF.js";import"./slim-arrow-down-ettFQBpG.js";import"./Input-Bnp1B06M.js";import"./ResponsivePopoverCommon.css-D4dwfbSh.js";import"./ValueStateMessage.css-BjDPPp3e.js";import"./Suggestions.css-BZNVnUm5.js";import"./ListBoxItemGroupTemplate-wWQG5bU4.js";import"./ComboBoxItemGroup-C-9rAZNG.js";import"./ListItemBaseTemplate-CKmA92tf.js";import"./Token-Cajcab6G.js";import"./ScrollEnablement-CTZS0_mL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CCYIvua5.js";import"./ToggleButton-BZt5vC5-.js";import"./SuggestionItem-D_PIewAU.js";import"./index-jBRBD573.js";import"./Option-DxkubUSY.js";import"./index-Bycy_nRu.js";import"./SegmentedButton-BOci-Y3W.js";import"./index-B5hy70mi.js";import"./Select-DsO_8sYo.js";import"./InvisibleMessage-S80H-u0p.js";import"./slim-arrow-down-CENiRDJc.js";import"./index-DpZnDX4o.js";import"./index-D8MRCDvy.js";import"./index-dKLo_6UY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DhjEzYz3.js";import"./group-2-OcAnoTD9.js";import"./sort-descending-FTfTrQi5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DYoXWuE8.js";import"./utils-BUR9Mhvv.js";import"./index-DbXr-LHF.js";import"./index-DdtulTfJ.js";import"./index-9x1-raZY.js";import"./navigation-down-arrow-GJ9aloYh.js";import"./navigation-right-arrow-CwKu7KeL.js";import"./navigation-right-arrow-1XYkiHw4.js";import"./useCurrentTheme-B6arGAq8.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BaYQek-i.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xZg7YMj3.js";import"./paper-plane-CPZpTi7O.js";import"./index-BbvIHokq.js";import"./less-CjV_p7Sa.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(i,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{sourceState:"none",of:l}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const tableHooks = [useAnnounceEmptyCells] // this array should be memoized

<AnalyticalTable
  data={data}
  columns={columns}
  visibleRows={5}
  tableHooks={tableHooks}
/>
`})}),`
`,t.jsx(o.p,{children:t.jsx(o.strong,{children:"First data entry with empty values or undefined fields:"})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-js",children:`{
  age: undefined,
  friend: {
    name: '',
    age: 0
  },
  status: 'Error'
}
`})}),`
`,t.jsx(m,{})]})}function Rt(r={}){const{wrapper:o}={...n(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Rt as default};
