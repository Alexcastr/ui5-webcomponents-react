import{j as o}from"./iframe-CBgkPC69.js";import{useMDXComponents as i}from"./index-C66QMXp8.js";import{M as p,C as a}from"./blocks-BcoumYp3.js";import"./Tag-B8m76Vus.js";import"./index-CSWI1r-l.js";import{C as m}from"./ControlsWithNote-glB5Tfir.js";import{D as c}from"./DocsHeader-9d7rGQKl.js";import{F as h}from"./CommandsAndQueries-aDUqz5lg.js";import{C as s,D as e}from"./Toast.stories-CteuBcz4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DdeQcxst.js";import"./sys-enter-2-B8ilplkM.js";import"./alert-Djr8Qs91.js";import"./index-BPKAtelG.js";import"./index-NhauML--.js";import"./Link-Do7u3EeE.js";import"./copy-D_XS_RdO.js";import"./copy-BzxBjQG_.js";import"./GitHub-Mark-C6tSE-50.js";import"./TableOfContent-BYLwJsVM.js";import"./index-CyPOXH-j.js";import"./index-CVisliPo.js";import"./index-DRj2B8Mm.js";import"./index-DIhQkvOo.js";import"./index-Cl-N64Re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3_HwdEv.js";import"./addCustomCSSWithScoping-Cqqj-goV.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
`,o.jsx(c,{of:s,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:e}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(m,{of:e}),`
`,o.jsx(t.h2,{id:"show-a-toast",children:"Show a toast"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"Toaast"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," prop."]}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"Example"})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`export function MyComponentWithAToast() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setShowToast(true);
        }}
      >
        Show Toast
      </Button>
      <Toast
        open={showToast}
        onClose={() => {
          setShowToast(false);
        }}
      >
        This is my Toast!
      </Toast>
    </>
  );
}
`})}),`
`,o.jsx(h,{})]})}function R(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{R as default};
