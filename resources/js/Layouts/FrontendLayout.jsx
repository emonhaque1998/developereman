import Footer from "@/Components/layout/Footer";
import Header from "@/Components/layout/Header";

export default function FrontendLayout({ children }) {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="container mx-auto">{children}</div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
