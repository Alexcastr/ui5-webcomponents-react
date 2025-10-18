import{j as e}from"./iframe-CBgkPC69.js";import{useMDXComponents as s}from"./index-C66QMXp8.js";import{M as m,C as o}from"./blocks-BcoumYp3.js";import"./Tag-B8m76Vus.js";import"./index-CSWI1r-l.js";import{C as l}from"./ControlsWithNote-glB5Tfir.js";import{D as p}from"./DocsHeader-9d7rGQKl.js";import{F as d}from"./CommandsAndQueries-aDUqz5lg.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CerLchvC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DdeQcxst.js";import"./sys-enter-2-B8ilplkM.js";import"./alert-Djr8Qs91.js";import"./index-BPKAtelG.js";import"./index-NhauML--.js";import"./Link-Do7u3EeE.js";import"./copy-D_XS_RdO.js";import"./copy-BzxBjQG_.js";import"./GitHub-Mark-C6tSE-50.js";import"./TableOfContent-BYLwJsVM.js";import"./index-CyPOXH-j.js";import"./index-CVisliPo.js";import"./index-DRj2B8Mm.js";import"./index-DIhQkvOo.js";import"./index-Cl-N64Re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3_HwdEv.js";import"./addCustomCSSWithScoping-Cqqj-goV.js";import"./Gregorian-BRVjmcRH.js";import"./query-CzSBusdE.js";import"./Input-Bnp1B06M.js";import"./ResponsivePopoverCommon.css-D4dwfbSh.js";import"./ValueStateMessage.css-BjDPPp3e.js";import"./Suggestions.css-BZNVnUm5.js";import"./appointment-2-QlkR9ld5.js";import"./ListItemStandard-CCYIvua5.js";import"./slim-arrow-left-BgQ0S-Az.js";import"./Calendar-CvNFrHi2.js";import"./InvisibleMessage-S80H-u0p.js";import"./index-DYoXWuE8.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(p,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"value-change",children:"Value Change"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h4,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function DynamicDateRangeComponent() {
  const [selValue, setSelValue] = useState("");
  const [convertedDates, setConvertedDates] = useState("");
  return (
    <>
      <DynamicDateRange
        onChange={(e) => {
          const selectedValue = e.detail.value;
          setSelValue(JSON.stringify(selectedValue));

          const dates = e.currentTarget.toDates(selectedValue);
          setConvertedDates(
            dates.map((date) => date.toLocaleString()).join(" - "),
          );
        }}
      />
      <hr />
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="sel-val" showColon>
          Selected Value
        </Label>
        <Input
          id="sel-val"
          readonly
          value={selValue}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="conv-val" showColon>
          Converted Dates
        </Label>
        <Input
          id="conv-val"
          readonly
          value={convertedDates}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
    </>
  );
}
`})}),`
`,e.jsx(d,{})]})}function $(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{$ as default};
