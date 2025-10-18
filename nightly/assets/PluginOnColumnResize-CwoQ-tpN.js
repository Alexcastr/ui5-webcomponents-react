import{j as o}from"./iframe-CBgkPC69.js";import{useMDXComponents as n}from"./index-C66QMXp8.js";import{I as r,F as m}from"./CommandsAndQueries-aDUqz5lg.js";import{M as p,C as s}from"./blocks-BcoumYp3.js";import"./Tag-B8m76Vus.js";import"./index-CSWI1r-l.js";import"./copy-BzxBjQG_.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-UGSbc_Mw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CyPOXH-j.js";import"./index-CVisliPo.js";import"./index-NhauML--.js";import"./Link-Do7u3EeE.js";import"./index-DRj2B8Mm.js";import"./index-DIhQkvOo.js";import"./index-Cl-N64Re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3_HwdEv.js";import"./addCustomCSSWithScoping-Cqqj-goV.js";import"./index-BPKAtelG.js";import"./information-DdeQcxst.js";import"./sys-enter-2-B8ilplkM.js";import"./alert-Djr8Qs91.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CfEw92Ww.js";import"./delete-Cd9YznwH.js";import"./settings-Uhf80ZJa.js";import"./NoData-DJ3qzGVx.js";import"./IllustratedMessage-DgpiWJaC.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Do_mtmMY.js";import"./index-BEQdboP8.js";import"./index-Bbj3QzeF.js";import"./slim-arrow-down-ettFQBpG.js";import"./Input-Bnp1B06M.js";import"./ResponsivePopoverCommon.css-D4dwfbSh.js";import"./ValueStateMessage.css-BjDPPp3e.js";import"./Suggestions.css-BZNVnUm5.js";import"./ListBoxItemGroupTemplate-wWQG5bU4.js";import"./ComboBoxItemGroup-C-9rAZNG.js";import"./ListItemBaseTemplate-CKmA92tf.js";import"./Token-Cajcab6G.js";import"./ScrollEnablement-CTZS0_mL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CCYIvua5.js";import"./ToggleButton-BZt5vC5-.js";import"./SuggestionItem-D_PIewAU.js";import"./index-jBRBD573.js";import"./Option-DxkubUSY.js";import"./index-Bycy_nRu.js";import"./SegmentedButton-BOci-Y3W.js";import"./index-B5hy70mi.js";import"./Select-DsO_8sYo.js";import"./InvisibleMessage-S80H-u0p.js";import"./slim-arrow-down-CENiRDJc.js";import"./index-DpZnDX4o.js";import"./index-D8MRCDvy.js";import"./index-dKLo_6UY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DhjEzYz3.js";import"./group-2-OcAnoTD9.js";import"./sort-descending-FTfTrQi5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DYoXWuE8.js";import"./utils-BUR9Mhvv.js";import"./index-DbXr-LHF.js";import"./index-DdtulTfJ.js";import"./index-9x1-raZY.js";import"./navigation-down-arrow-GJ9aloYh.js";import"./navigation-right-arrow-CwKu7KeL.js";import"./navigation-right-arrow-1XYkiHw4.js";import"./useCurrentTheme-B6arGAq8.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BaYQek-i.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xZg7YMj3.js";import"./paper-plane-CPZpTi7O.js";import"./index-BbvIHokq.js";import"./less-CjV_p7Sa.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(r,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{sourceState:"none",of:l}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const TableComponent = (props) => {
  const handleColumResize = useCallback((e) => {
    console.log(e.columnWidth, e.header);
  }, []);

  const tableHooks = useMemo(
    () => [
      useOnColumnResize(handleColumResize, {
        liveUpdate: false,
        wait: 100,
      }),
    ],
    [handleColumResize],
  );

  return (
    <AnalyticalTable
      data={props.data}
      columns={props.columns}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,o.jsx(m,{})]})}function Xo(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Xo as default};
