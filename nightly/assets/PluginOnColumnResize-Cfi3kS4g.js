import{j as o}from"./iframe-BoDosl1V.js";import{useMDXComponents as n}from"./index-D-BpoX_4.js";import{I as r,F as m}from"./CommandsAndQueries-c4e7f4Pd.js";import{M as p,C as s}from"./blocks-CBhOySKJ.js";import"./Tag-D7LV4qU2.js";import"./index-CGQovKK-.js";import"./copy-CIN6HpsY.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DvFvFJy_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BG9wgA-l.js";import"./index-CevsoFu_.js";import"./index-Bb1qbt_L.js";import"./Link-CVP6m2Am.js";import"./index-CACQPD-Y.js";import"./index-DrDoQuEf.js";import"./index-Q7TrqRnw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY600kGs.js";import"./addCustomCSSWithScoping-Deev-1U6.js";import"./index-C-NSE-pK.js";import"./information-CDUpZ58x.js";import"./sys-enter-2-Bzr7621o.js";import"./alert-EQ5Jvnxe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BCzb2-BB.js";import"./delete-D7Q75ri5.js";import"./settings-CWddbE3m.js";import"./NoData-C35csXof.js";import"./IllustratedMessage-DiGXDaHJ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CobS7n3o.js";import"./index-lKFyADF6.js";import"./index-Tb7FyLXu.js";import"./slim-arrow-down-80K0goUZ.js";import"./Input-CoLQsrv1.js";import"./ResponsivePopoverCommon.css-DsuWWzGw.js";import"./ValueStateMessage.css-CT3w29_E.js";import"./Suggestions.css-D73YAEOP.js";import"./ListBoxItemGroupTemplate-oPCt8q0e.js";import"./ComboBoxItemGroup-DhujxxIK.js";import"./ListItemBaseTemplate-BuPUOe90.js";import"./Token-XwGPkCol.js";import"./ScrollEnablement-C7ohg2B1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B1Y7zjrl.js";import"./ToggleButton-n0PN-HEn.js";import"./SuggestionItem-C19UKJdW.js";import"./index-Dtn_kAvU.js";import"./Option-CSYy54Mw.js";import"./index-DF4Czvtm.js";import"./SegmentedButton-DDuFTJbB.js";import"./index-d_9seuwR.js";import"./Select-w_gZnZnL.js";import"./InvisibleMessage-BzNOWiJ5.js";import"./slim-arrow-down-BeDV39wT.js";import"./index-CeJ_DHOO.js";import"./index-DJnJbiIn.js";import"./index-Y6vZYHeB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-EFm4-hMY.js";import"./group-2-5ewKl0tM.js";import"./sort-descending-BiubxllH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DBCVrDzE.js";import"./utils-DN-VxlwU.js";import"./index-D577uTdE.js";import"./index-qXGfKwxe.js";import"./index-C3nI-jk_.js";import"./navigation-down-arrow-C9sSdAXM.js";import"./navigation-right-arrow-Cr1GA88H.js";import"./navigation-right-arrow-BWiUyQjD.js";import"./useCurrentTheme-oPN2qg9k.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DSlnxf4r.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BqxIKVG_.js";import"./paper-plane-K_1C-S9T.js";import"./index-DccC11Tk.js";import"./less-CWqUedkT.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
