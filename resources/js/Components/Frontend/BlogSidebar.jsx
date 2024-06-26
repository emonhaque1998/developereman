import { Link } from "@inertiajs/react";

const BlogSidebar = () => {
    return (
        <div className="main-sidebar rmt-65">
            <div className="widget widget-search wow fadeInUp delay-0-2s">
                <h4 className="widget-title">Search</h4>
                <form action="#" className="default-search-form">
                    <input type="text" placeholder="Keywords" required="" />
                    <button
                        type="submit"
                        className="searchbutton far fa-search"
                    />
                </form>
            </div>
            <div className="widget widget-category wow fadeInUp delay-0-4s">
                <h4 className="widget-title">Category</h4>
                <ul>
                    <li>
                        <i className="far fa-angle-right" />{" "}
                        <Link href="blog">Web Design</Link>
                    </li>
                    <li>
                        <i className="far fa-angle-right" />{" "}
                        <Link href="blog">Mobile Apps Design</Link>
                    </li>
                    <li>
                        <i className="far fa-angle-right" />{" "}
                        <Link href="blog">Brand Identity Design</Link>
                    </li>
                    <li>
                        <i className="far fa-angle-right" />{" "}
                        <Link href="blog">Motion Graphic Design</Link>
                    </li>
                    <li>
                        <i className="far fa-angle-right" />{" "}
                        <Link href="blog">Web Development</Link>
                    </li>
                    <li>
                        <i className="far fa-angle-right" />{" "}
                        <Link href="blog">Digital Marketing</Link>
                    </li>
                </ul>
            </div>
            <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
                <h4 className="widget-title">Latest News</h4>
                <ul>
                    <li>
                        <div className="image">
                            <img
                                src="assets/images/widgets/news1.jpg"
                                alt="News"
                            />
                        </div>
                        <div className="content">
                            <div className="blog-meta mb-5">
                                <a className="date" href="#">
                                    <i className="far fa-calendar-alt" /> Sep
                                    25, 2023
                                </a>
                            </div>
                            <h5>
                                <Link href="blog-details">
                                    Tips For Conducting Studie
                                </Link>
                            </h5>
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img
                                src="assets/images/widgets/news2.jpg"
                                alt="News"
                            />
                        </div>
                        <div className="content">
                            <div className="blog-meta mb-5">
                                <a className="date" href="#">
                                    <i className="far fa-calendar-alt" /> Sep
                                    25, 2023
                                </a>
                            </div>
                            <h5>
                                <Link href="blog-details">
                                    Usability With Participants
                                </Link>
                            </h5>
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img
                                src="assets/images/widgets/news3.jpg"
                                alt="News"
                            />
                        </div>
                        <div className="content">
                            <div className="blog-meta mb-5">
                                <a className="date" href="#">
                                    <i className="far fa-calendar-alt" /> Sep
                                    25, 2023
                                </a>
                            </div>
                            <h5>
                                <Link href="blog-details">
                                    Online Environment Work
                                </Link>
                            </h5>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                <h4 className="widget-title">Popular Tags</h4>
                <div className="tag-coulds">
                    <Link href="blog">Design</Link>
                    <Link href="blog">Figma</Link>
                    <Link href="blog">Apps</Link>
                    <Link href="blog">Branding</Link>
                    <Link href="blog">Development</Link>
                    <Link href="blog">Digital</Link>
                    <Link href="blog">Mobile Apps</Link>
                </div>
            </div>
            <div className="widget widget-cta wow fadeInUp delay-0-2s">
                <div
                    className="cta-widget"
                    style={{
                        backgroundImage:
                            "url(assets/images/widgets/widget-cta.jpg)",
                    }}
                >
                    <span className="sub-title">Get A Quote</span>
                    <h4>Looking For Creative Web Designer</h4>
                    <Link className="theme-btn" href="/contact">
                        Hire Me <i className="far fa-angle-right" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default BlogSidebar;
