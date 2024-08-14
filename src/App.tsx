import "./App.css";
import GridComponent from "./components/Grid/GridComponent";

function App() {
  return (
    <>
      <div className="header pageHeaderContainer">
        <div className="pageHeaderMenu br_z-50 br_pointer-events-none br_w-screen xl:pointer-fine:br_opacity-100 xl:pointer-fine:br_bg-transparent xl:pointer-fine:br_pointer-events-auto">
          <div className="topLevel__close br_absolute br_inset-0"></div>
          <nav className="topLevel br_bg-white ">
            <ul className="xl:pointer-fine:br_flex xl:pointer-fine:br_pl-[155px]">
              <li className="br_group/item xl:pointer-fine:br_hidden">
                <a
                  className="menuitem-Help br_flex br_items-center br_justify-between br_px-8 br_py-4 br_bg-grey-100 br_border-solid br_border-0 br_border-b br_border-white br_text-grey-600 br_text-base-sans-stretched br_no-underline"
                  href="/customer-care"
                  data-auto-id="true"
                  id="page-header-customer-care-2"
                >
                  Help
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="content">
        <GridComponent />
      </div>
    </>
  );
}

export default App;
