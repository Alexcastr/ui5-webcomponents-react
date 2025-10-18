import{j as e}from"./iframe-CBgkPC69.js";import{useMDXComponents as i}from"./index-C66QMXp8.js";import{I as a,F as m}from"./CommandsAndQueries-aDUqz5lg.js";import{M as s,C as p}from"./blocks-BcoumYp3.js";import"./Tag-B8m76Vus.js";import"./index-CSWI1r-l.js";import{C as l}from"./ControlsWithNote-glB5Tfir.js";import"./copy-BzxBjQG_.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-UGSbc_Mw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CyPOXH-j.js";import"./index-CVisliPo.js";import"./index-NhauML--.js";import"./Link-Do7u3EeE.js";import"./index-DRj2B8Mm.js";import"./index-DIhQkvOo.js";import"./index-Cl-N64Re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3_HwdEv.js";import"./addCustomCSSWithScoping-Cqqj-goV.js";import"./index-BPKAtelG.js";import"./information-DdeQcxst.js";import"./sys-enter-2-B8ilplkM.js";import"./alert-Djr8Qs91.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CfEw92Ww.js";import"./delete-Cd9YznwH.js";import"./settings-Uhf80ZJa.js";import"./NoData-DJ3qzGVx.js";import"./IllustratedMessage-DgpiWJaC.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Do_mtmMY.js";import"./index-BEQdboP8.js";import"./index-Bbj3QzeF.js";import"./slim-arrow-down-ettFQBpG.js";import"./Input-Bnp1B06M.js";import"./ResponsivePopoverCommon.css-D4dwfbSh.js";import"./ValueStateMessage.css-BjDPPp3e.js";import"./Suggestions.css-BZNVnUm5.js";import"./ListBoxItemGroupTemplate-wWQG5bU4.js";import"./ComboBoxItemGroup-C-9rAZNG.js";import"./ListItemBaseTemplate-CKmA92tf.js";import"./Token-Cajcab6G.js";import"./ScrollEnablement-CTZS0_mL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CCYIvua5.js";import"./ToggleButton-BZt5vC5-.js";import"./SuggestionItem-D_PIewAU.js";import"./index-jBRBD573.js";import"./Option-DxkubUSY.js";import"./index-Bycy_nRu.js";import"./SegmentedButton-BOci-Y3W.js";import"./index-B5hy70mi.js";import"./Select-DsO_8sYo.js";import"./InvisibleMessage-S80H-u0p.js";import"./slim-arrow-down-CENiRDJc.js";import"./index-DpZnDX4o.js";import"./index-D8MRCDvy.js";import"./index-dKLo_6UY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DhjEzYz3.js";import"./group-2-OcAnoTD9.js";import"./sort-descending-FTfTrQi5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DYoXWuE8.js";import"./utils-BUR9Mhvv.js";import"./index-DbXr-LHF.js";import"./index-DdtulTfJ.js";import"./index-9x1-raZY.js";import"./navigation-down-arrow-GJ9aloYh.js";import"./navigation-right-arrow-CwKu7KeL.js";import"./navigation-right-arrow-1XYkiHw4.js";import"./useCurrentTheme-B6arGAq8.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BaYQek-i.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xZg7YMj3.js";import"./paper-plane-CPZpTi7O.js";import"./index-BbvIHokq.js";import"./less-CjV_p7Sa.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(a,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(p,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(l,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    enableMultiSort: true
  },
  {
    Header: 'Age',
    accessor: 'age',
    enableMultiSort: true
  },
  {
    Header: 'Name 2',
    accessor: 'name2',
    enableMultiSort: true
  },
  {
    Header: 'Age 2',
    accessor: 'age2',
    enableMultiSort: true
  }
];
const data = [
  { name: 'Peter', age: 40, name2: 'Alissa', age2: 18 },
  { name: 'Kristen', age: 40, name2: 'Randolph', age2: 21 },
  { name: 'Peter', age: 30, name2: 'Rose', age2: 90 },
  { name: 'Peter', age: 70, name2: 'Rose', age2: 22 },
  { name: 'Kristen', age: 60, name2: 'Willis', age2: 80 },
  { name: 'Kristen', age: 20, name2: 'Alissa', age2: 80 },
  { name: 'Graham', age: 40, name2: 'Alissa', age2: 80 },
  { name: 'Peter', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Willis', age2: 26 },
  { name: 'Graham', age: 62, name2: 'Willis', age2: 26 }
];
const orderedIds = ['name', 'name2', 'age', 'age2'];
const tableHooks = [useOrderedMultiSort(orderedIds)]; // should be memoized
const TableComponent = () => {
  return (
    <AnalyticalTable
      columns={columns}
      data={data}
      sortable
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(m,{})]})}function Ke(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Ke as default};
