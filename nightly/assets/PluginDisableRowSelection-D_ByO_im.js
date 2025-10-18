import{j as e}from"./iframe-CBgkPC69.js";import{useMDXComponents as n}from"./index-C66QMXp8.js";import{I as r,F as s}from"./CommandsAndQueries-aDUqz5lg.js";import{M as l,C as a}from"./blocks-BcoumYp3.js";import"./Tag-B8m76Vus.js";import"./index-CSWI1r-l.js";import"./copy-BzxBjQG_.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-UGSbc_Mw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CyPOXH-j.js";import"./index-CVisliPo.js";import"./index-NhauML--.js";import"./Link-Do7u3EeE.js";import"./index-DRj2B8Mm.js";import"./index-DIhQkvOo.js";import"./index-Cl-N64Re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3_HwdEv.js";import"./addCustomCSSWithScoping-Cqqj-goV.js";import"./index-BPKAtelG.js";import"./information-DdeQcxst.js";import"./sys-enter-2-B8ilplkM.js";import"./alert-Djr8Qs91.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CfEw92Ww.js";import"./delete-Cd9YznwH.js";import"./settings-Uhf80ZJa.js";import"./NoData-DJ3qzGVx.js";import"./IllustratedMessage-DgpiWJaC.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Do_mtmMY.js";import"./index-BEQdboP8.js";import"./index-Bbj3QzeF.js";import"./slim-arrow-down-ettFQBpG.js";import"./Input-Bnp1B06M.js";import"./ResponsivePopoverCommon.css-D4dwfbSh.js";import"./ValueStateMessage.css-BjDPPp3e.js";import"./Suggestions.css-BZNVnUm5.js";import"./ListBoxItemGroupTemplate-wWQG5bU4.js";import"./ComboBoxItemGroup-C-9rAZNG.js";import"./ListItemBaseTemplate-CKmA92tf.js";import"./Token-Cajcab6G.js";import"./ScrollEnablement-CTZS0_mL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CCYIvua5.js";import"./ToggleButton-BZt5vC5-.js";import"./SuggestionItem-D_PIewAU.js";import"./index-jBRBD573.js";import"./Option-DxkubUSY.js";import"./index-Bycy_nRu.js";import"./SegmentedButton-BOci-Y3W.js";import"./index-B5hy70mi.js";import"./Select-DsO_8sYo.js";import"./InvisibleMessage-S80H-u0p.js";import"./slim-arrow-down-CENiRDJc.js";import"./index-DpZnDX4o.js";import"./index-D8MRCDvy.js";import"./index-dKLo_6UY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DhjEzYz3.js";import"./group-2-OcAnoTD9.js";import"./sort-descending-FTfTrQi5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DYoXWuE8.js";import"./utils-BUR9Mhvv.js";import"./index-DbXr-LHF.js";import"./index-DdtulTfJ.js";import"./index-9x1-raZY.js";import"./navigation-down-arrow-GJ9aloYh.js";import"./navigation-right-arrow-CwKu7KeL.js";import"./navigation-right-arrow-1XYkiHw4.js";import"./useCurrentTheme-B6arGAq8.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BaYQek-i.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xZg7YMj3.js";import"./paper-plane-CPZpTi7O.js";import"./index-BbvIHokq.js";import"./less-CjV_p7Sa.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(r,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Deprecated!"})," It is not recommended to disable table rows, mainly because of the following reasons:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Users are not informed why items cannot be selected."}),`
`,e.jsx(o.li,{children:"ARIA lacks built-in support for selective item selection, complicating accessibility."}),`
`,e.jsx(o.li,{children:"Consistency to other applications which do not offer disabled items."}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"useRowDisableSelection"})," it's possible to disable the selection of specific rows. It can receive two types of parameters:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"string"}),": Defines the key in the dataset for disabling rows. If the value of the key is ",e.jsx(o.code,{children:"true"}),", then the row will not be selectable."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Function(row) => boolean"}),": Programmatically disable rows for selection. The function receives the current row as parameter."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),' The "Select All" checkbox is not available with this hook.']}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Using this hook in combination with the ",e.jsx(o.code,{children:"useIndeterminateRowSelection"})," hook is not supported!"]}),`
`,e.jsx(a,{sourceState:"none",of:m}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [useRowDisableSelection(disableRowFunc)]; // this array should be memoized

const WithFunctionParameter = () => {

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};

`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [useRowDisableSelection("disableSelection")]; // this array should be memoized

const WithStringParameter = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(s,{})]})}function Xe(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
