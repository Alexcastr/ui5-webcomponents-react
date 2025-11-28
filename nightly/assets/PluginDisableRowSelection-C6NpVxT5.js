import{j as e}from"./iframe-BoDosl1V.js";import{useMDXComponents as n}from"./index-D-BpoX_4.js";import{I as r,F as s}from"./CommandsAndQueries-c4e7f4Pd.js";import{M as l,C as a}from"./blocks-CBhOySKJ.js";import"./Tag-D7LV4qU2.js";import"./index-CGQovKK-.js";import"./copy-CIN6HpsY.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DvFvFJy_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BG9wgA-l.js";import"./index-CevsoFu_.js";import"./index-Bb1qbt_L.js";import"./Link-CVP6m2Am.js";import"./index-CACQPD-Y.js";import"./index-DrDoQuEf.js";import"./index-Q7TrqRnw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY600kGs.js";import"./addCustomCSSWithScoping-Deev-1U6.js";import"./index-C-NSE-pK.js";import"./information-CDUpZ58x.js";import"./sys-enter-2-Bzr7621o.js";import"./alert-EQ5Jvnxe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BCzb2-BB.js";import"./delete-D7Q75ri5.js";import"./settings-CWddbE3m.js";import"./NoData-C35csXof.js";import"./IllustratedMessage-DiGXDaHJ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CobS7n3o.js";import"./index-lKFyADF6.js";import"./index-Tb7FyLXu.js";import"./slim-arrow-down-80K0goUZ.js";import"./Input-CoLQsrv1.js";import"./ResponsivePopoverCommon.css-DsuWWzGw.js";import"./ValueStateMessage.css-CT3w29_E.js";import"./Suggestions.css-D73YAEOP.js";import"./ListBoxItemGroupTemplate-oPCt8q0e.js";import"./ComboBoxItemGroup-DhujxxIK.js";import"./ListItemBaseTemplate-BuPUOe90.js";import"./Token-XwGPkCol.js";import"./ScrollEnablement-C7ohg2B1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B1Y7zjrl.js";import"./ToggleButton-n0PN-HEn.js";import"./SuggestionItem-C19UKJdW.js";import"./index-Dtn_kAvU.js";import"./Option-CSYy54Mw.js";import"./index-DF4Czvtm.js";import"./SegmentedButton-DDuFTJbB.js";import"./index-d_9seuwR.js";import"./Select-w_gZnZnL.js";import"./InvisibleMessage-BzNOWiJ5.js";import"./slim-arrow-down-BeDV39wT.js";import"./index-CeJ_DHOO.js";import"./index-DJnJbiIn.js";import"./index-Y6vZYHeB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-EFm4-hMY.js";import"./group-2-5ewKl0tM.js";import"./sort-descending-BiubxllH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DBCVrDzE.js";import"./utils-DN-VxlwU.js";import"./index-D577uTdE.js";import"./index-qXGfKwxe.js";import"./index-C3nI-jk_.js";import"./navigation-down-arrow-C9sSdAXM.js";import"./navigation-right-arrow-Cr1GA88H.js";import"./navigation-right-arrow-BWiUyQjD.js";import"./useCurrentTheme-oPN2qg9k.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DSlnxf4r.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BqxIKVG_.js";import"./paper-plane-K_1C-S9T.js";import"./index-DccC11Tk.js";import"./less-CWqUedkT.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
