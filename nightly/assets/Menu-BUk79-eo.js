import{j as e,e as r}from"./iframe-BoDosl1V.js";import{useMDXComponents as d}from"./index-D-BpoX_4.js";import{A as s}from"./ArgTypesWithNote-CmXTKq2Q.js";import{C as x}from"./ControlsWithNote-CLoACsR3.js";import{D as h}from"./DocsHeader-2ZgwF7Tc.js";import{F as l}from"./CommandsAndQueries-c4e7f4Pd.js";import{M as f,C as i,a as j,D as m}from"./blocks-CBhOySKJ.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-Ba2yy1fP.js";import{M as a}from"./index-Cgr_L6YS.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGQovKK-.js";import"./information-CDUpZ58x.js";import"./sys-enter-2-Bzr7621o.js";import"./alert-EQ5Jvnxe.js";import"./Tag-D7LV4qU2.js";import"./index-C-NSE-pK.js";import"./index-Bb1qbt_L.js";import"./Link-CVP6m2Am.js";import"./copy-CytMIm97.js";import"./copy-CIN6HpsY.js";import"./GitHub-Mark-rU-84Zwz.js";import"./TableOfContent-CeP7S69c.js";import"./index-BG9wgA-l.js";import"./index-CevsoFu_.js";import"./index-CACQPD-Y.js";import"./index-DrDoQuEf.js";import"./index-Q7TrqRnw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY600kGs.js";import"./addCustomCSSWithScoping-Deev-1U6.js";import"./locked-DwKMbi5t.js";import"./index-CgdhmhWC.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
`,e.jsx(h,{of:t,since:"0.23.0"}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(x,{of:p}),`
`,e.jsx(n.h2,{id:"opening-menus",children:"Opening Menus"}),`
`,e.jsxs(n.p,{children:["You can open and close the ",e.jsx(n.code,{children:"Menu"})," component in a declarative way using the ",e.jsx(n.code,{children:"open"})," and ",e.jsx(n.code,{children:"opener"})," prop."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithMenu = () => {
  const buttonRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => {
          setMenuIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <Menu
        opener={buttonRef.current}
        open={menuIsOpen}
        onClose={() => {
          setMenuIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"menu-with-submenu",children:"Menu with Submenu"}),`
`,e.jsx(i,{of:M}),`
`,e.jsx(j,{children:C}),`
`,e.jsx(n.h2,{id:"menuitem",children:"MenuItem"}),`
`,e.jsx(m,{of:a}),`
`,e.jsx(s,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:a}),`
`,e.jsx(n.h2,{id:"menuitemgroup",children:"MenuItemGroup"}),`
`,e.jsx(m,{of:u}),`
`,e.jsx(s,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:u}),`
`,e.jsx(l,{})]})}function $(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{$ as default};
