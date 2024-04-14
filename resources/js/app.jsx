import "./bootstrap";
import "../css/app.css";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/flaticon.min.css";
import "./assets/css/fontawesome-5.14.0.min.css";
import "./assets/css/nice-select.min.css";
import "./assets/css/slick.min.css";
import "./assets/css/style.css";
import "./globals.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import Preloader from "./Layouts/Preloader";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <>
                <Preloader /> <App {...props} />
            </>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
