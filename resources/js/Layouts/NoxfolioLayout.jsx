import { noxfolioUtilits } from "@/Components/utility/index";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const NoxfolioLayout = ({
    children,
    header,
    footer,
    noFooter,
    onePageMenu,
    auth,
}) => {
    return (
        <div className="page-wrapper">
            <Header header={header} onePageMenu={onePageMenu} auth={auth} />
            <SideBar />
            {children}
            {!noFooter && <Footer footer={footer} />}
        </div>
    );
};
export default NoxfolioLayout;
