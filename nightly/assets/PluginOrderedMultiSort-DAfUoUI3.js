import{j as e}from"./iframe-BoDosl1V.js";import{useMDXComponents as i}from"./index-D-BpoX_4.js";import{I as a,F as m}from"./CommandsAndQueries-c4e7f4Pd.js";import{M as s,C as p}from"./blocks-CBhOySKJ.js";import"./Tag-D7LV4qU2.js";import"./index-CGQovKK-.js";import{C as l}from"./ControlsWithNote-CLoACsR3.js";import"./copy-CIN6HpsY.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DvFvFJy_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BG9wgA-l.js";import"./index-CevsoFu_.js";import"./index-Bb1qbt_L.js";import"./Link-CVP6m2Am.js";import"./index-CACQPD-Y.js";import"./index-DrDoQuEf.js";import"./index-Q7TrqRnw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY600kGs.js";import"./addCustomCSSWithScoping-Deev-1U6.js";import"./index-C-NSE-pK.js";import"./information-CDUpZ58x.js";import"./sys-enter-2-Bzr7621o.js";import"./alert-EQ5Jvnxe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BCzb2-BB.js";import"./delete-D7Q75ri5.js";import"./settings-CWddbE3m.js";import"./NoData-C35csXof.js";import"./IllustratedMessage-DiGXDaHJ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CobS7n3o.js";import"./index-lKFyADF6.js";import"./index-Tb7FyLXu.js";import"./slim-arrow-down-80K0goUZ.js";import"./Input-CoLQsrv1.js";import"./ResponsivePopoverCommon.css-DsuWWzGw.js";import"./ValueStateMessage.css-CT3w29_E.js";import"./Suggestions.css-D73YAEOP.js";import"./ListBoxItemGroupTemplate-oPCt8q0e.js";import"./ComboBoxItemGroup-DhujxxIK.js";import"./ListItemBaseTemplate-BuPUOe90.js";import"./Token-XwGPkCol.js";import"./ScrollEnablement-C7ohg2B1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B1Y7zjrl.js";import"./ToggleButton-n0PN-HEn.js";import"./SuggestionItem-C19UKJdW.js";import"./index-Dtn_kAvU.js";import"./Option-CSYy54Mw.js";import"./index-DF4Czvtm.js";import"./SegmentedButton-DDuFTJbB.js";import"./index-d_9seuwR.js";import"./Select-w_gZnZnL.js";import"./InvisibleMessage-BzNOWiJ5.js";import"./slim-arrow-down-BeDV39wT.js";import"./index-CeJ_DHOO.js";import"./index-DJnJbiIn.js";import"./index-Y6vZYHeB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-EFm4-hMY.js";import"./group-2-5ewKl0tM.js";import"./sort-descending-BiubxllH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DBCVrDzE.js";import"./utils-DN-VxlwU.js";import"./index-D577uTdE.js";import"./index-qXGfKwxe.js";import"./index-C3nI-jk_.js";import"./navigation-down-arrow-C9sSdAXM.js";import"./navigation-right-arrow-Cr1GA88H.js";import"./navigation-right-arrow-BWiUyQjD.js";import"./useCurrentTheme-oPN2qg9k.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DSlnxf4r.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BqxIKVG_.js";import"./paper-plane-K_1C-S9T.js";import"./index-DccC11Tk.js";import"./less-CWqUedkT.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
