import{j as e,e as m}from"./iframe-CBgkPC69.js";import{useMDXComponents as a}from"./index-C66QMXp8.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-BcoumYp3.js";import{A as d}from"./ArgTypesWithNote-BwYva-cQ.js";import{C as f}from"./ControlsWithNote-glB5Tfir.js";import{D as M}from"./DocsHeader-9d7rGQKl.js";import{F as I}from"./CommandsAndQueries-aDUqz5lg.js";import{C as o,D as r,B as i}from"./Button.stories-HbDcTdqr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CSWI1r-l.js";import"./information-DdeQcxst.js";import"./sys-enter-2-B8ilplkM.js";import"./alert-Djr8Qs91.js";import"./Tag-B8m76Vus.js";import"./index-BPKAtelG.js";import"./index-NhauML--.js";import"./Link-Do7u3EeE.js";import"./copy-D_XS_RdO.js";import"./copy-BzxBjQG_.js";import"./GitHub-Mark-C6tSE-50.js";import"./TableOfContent-BYLwJsVM.js";import"./index-CyPOXH-j.js";import"./index-CVisliPo.js";import"./index-DRj2B8Mm.js";import"./index-DIhQkvOo.js";import"./index-Cl-N64Re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3_HwdEv.js";import"./addCustomCSSWithScoping-Cqqj-goV.js";import"./ai-BF7JYjHG.js";import"./ai-BwApGeGP.js";import"./navigation-down-arrow-GJ9aloYh.js";import"./stop-DR2P3cb_.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-CTUvYbLA.js";import"./slim-arrow-down-CENiRDJc.js";import"./slim-arrow-down-ettFQBpG.js";import"./index-D8GwUWBC.js";import"./index-BraFJPjj.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
`,e.jsx(M,{of:o,experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:r}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show static code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function AIButton(props) {
  const generationIdRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<ButtonDomRef>(null);
  const [buttonState, setButtonState] = useState("generate");
  const [menuOpen, setMenuOpen] = useState(false);

  const startGeneration = () => {
    generationIdRef.current = setTimeout(() => {
      setButtonState("revise");
    }, 3000);
  };

  const handleClick: ButtonPropTypes["onClick"] = (e) => {
    const btn = e.target;

    setMenuOpen(false);
    switch (btn.state) {
      case "generate":
        setButtonState("generating");
        startGeneration();
        break;
      case "generating":
        if (generationIdRef.current) {
          clearTimeout(generationIdRef.current);
          generationIdRef.current = null;
        }
        setButtonState("generate");
        break;
      case "revise":
        setMenuOpen(true);
        break;
    }
  };

  const handleMenuItemClick: MenuPropTypes["onItemClick"] = (e) => {
    if (e.detail.text === "Regenerate") {
      setButtonState("generating");
      startGeneration();
    }
  };

  return (
    <>
      <Button
        {...props}
        onClick={handleClick}
        state={buttonState}
        ref={buttonRef}
      >
        <ButtonState name="generate" text="Generate" icon={aiIcon} />
        <ButtonState name="generating" text="Stop Generating" icon={stopIcon} />
        <ButtonState
          name="revise"
          text="Revise"
          icon={aiIcon}
          endIcon={navDownIcon}
        />
      </Button>
      {menuOpen && (
        <Menu
          opener={buttonRef.current}
          open
          onItemClick={handleMenuItemClick}
          onClose={() => {
            setMenuOpen(false);
          }}
        >
          <MenuItem text="Regenerate" />
          <MenuSeparator />
          <MenuItem text="Fix Spelling & Grammar" />
          <MenuItem text="Change Tone">
            <MenuItem text="Option 1" />
            <MenuItem text="Option 2" />
            <MenuItem text="Option 3" />
          </MenuItem>
          <MenuItem text="Adjust Length">
            <MenuItem text="Shorten text" />
            <MenuItem text="Lengthen text" />
          </MenuItem>
          <MenuItem text="Bulleted List" />
          <MenuItem text="Translate">
            <MenuItem text="English" />
            <MenuItem text="German" />
            <MenuItem text="Spanish" />
          </MenuItem>
        </Menu>
      )}
    </>
  );
}
`})})]}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(f,{of:r}),`
`,e.jsx(l,{children:u}),`
`,e.jsx(t.h2,{id:"buttonstate",children:"ButtonState"}),`
`,e.jsx(x,{of:i}),`
`,e.jsx(d,{metaOf:o,of:i,hideHTMLPropsNote:!0,exclude:m}),`
`,e.jsx(I,{}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{})})]})}function ie(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{ie as default};
