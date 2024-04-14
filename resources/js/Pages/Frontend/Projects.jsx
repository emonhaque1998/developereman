import PageBanner from "@/Components/Frontend/PageBanner";
import NoxfolioLayout from "@/Layouts/NoxfolioLayout";
import { Link } from "@inertiajs/react";
import ProjectMasonryIsotop from "@/Components/Frontend/ProjectMasonryIsotop";

export const metadata = {
    title: "Projects Masonry",
};

const Projects = ({ auth }) => {
    return (
        <NoxfolioLayout auth={auth}>
            <PageBanner pageName={"Project Masonry"} />
            <section className="projects-masonry-area pt-40 pb-130 rpb-100 rel z-1">
                <div className="container">
                    <ProjectMasonryIsotop />
                    <div className="project-btn mt-25 text-center wow fadeInUp delay-0-2s">
                        <Link className="theme-btn" href="/projects">
                            View More Projects{" "}
                            <i className="far fa-angle-right" />
                        </Link>
                    </div>
                </div>
                <div className="bg-lines">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
            </section>
        </NoxfolioLayout>
    );
};
export default Projects;
