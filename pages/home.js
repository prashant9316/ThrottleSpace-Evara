import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from "../components/layout/Layout";
import Link from "next/link";

// Dynamic imports for better code splitting
const IntroPopup = dynamic(() => import('../components/elements/IntroPopup'), { ssr: false });
const FeatchTab = dynamic(() => import("../components/ecommerce/fetchTab"));
const FetchTabSlider = dynamic(() => import("../components/ecommerce/fetchTabSlider"));
const Intro3 = dynamic(() => import("../components/sliders/intro3"));
const CategorySlider = dynamic(() => import("../components/sliders/Category"));
const NewArrival = dynamic(() => import("../components/sliders/NewArrival"));
const BrandSlider = dynamic(() => import("../components/sliders/Brand"));

// Static imports for smaller components
import Banner2 from "../components/elements/Banner2";
import Banner3 from "../components/elements/Banner3";
import Banner4 from "../components/elements/Banner4";
import Banner5 from '../components/elements/Banner5';
import BannerFeatures from "../components/elements/BannerFeatures";
import Deals1 from "../components/elements/Deals1";
import Deals2 from "../components/elements/Deals2";
import HomeBlog from "../components/elements/HomeBlog";
import Bottom from '../components/elements/Bottom';

function Home({ featuredProducts, newArrivals, blogPosts }) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.WOW = require("wowjs");
        }
        new WOW.WOW().init();
    }, []);

    return (
        <>
            <IntroPopup />
            <Layout noBreadcrumb="d-none" headerStyle="header-style-3">
                <section className="home-slider position-relative pt-25 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="position-relative">
                                    <Intro3 />
                                </div>
                            </div>
                            <div className="col-lg-3 d-none d-lg-block">
                                <div className="banner-img banner-1 wow fadeIn  animated home-3">
                                    <img
                                        className="border-radius-10"
                                        src="assets/imgs/banner/banner-5.jpg"
                                        alt=""
                                    />
                                    <div className="banner-text">
                                        <span>Accessories</span>
                                        <h4>
                                            Save 17% on <br />
                                            Autumn Hat
                                        </h4>
                                        <Link href="/products">
                                            <a>
                                                Shop Now <i className="fi-rs-arrow-right"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="banner-img banner-2 wow fadeIn  animated mb-0">
                                    <img
                                        className="border-radius-10"
                                        src="assets/imgs/banner/banner-7.jpg"
                                        alt=""
                                    />
                                    <div className="banner-text">
                                        <span>Smart Offer</span>
                                        <h4>
                                            Save 20% on <br />
                                            Eardrop
                                        </h4>
                                        <Link href="/products">
                                            <a>
                                                Shop Now <i className="fi-rs-arrow-right"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="popular-categories section-padding mt-15 mb-25">
                    <div className="container wow fadeIn animated">
                        <h3 className="section-title mb-20">
                            <span>Popular</span> Categories
                        </h3>
                        <div className="carausel-6-columns-cover position-relative">
                            <div
                                className="carausel-6-columns"
                                id="carausel-6-columns"
                            >
                                <CategorySlider />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="product-tabs section-padding position-relative wow fadeIn animated">
                    <div className="container">
                        <div className="col-lg-12">
                            <FeatchTab products={featuredProducts} />
                        </div>
                    </div>
                </section>

                <section className="banner-2 section-padding pb-0">
                    <div className="container">
                        <Banner2 />
                    </div>
                </section>

                <section className="section-padding">
                    <div className="container wow fadeIn animated">
                        <h3 className="section-title mb-20"><span>New</span> Arrivals</h3>
                        <div className="carausel-6-columns-cover position-relative">
                            <NewArrival products={newArrivals} />
                        </div>
                    </div>
                </section>

                <section className="banners mb-15">
                    <div className="container">
                        <div className="row">
                            <Banner5 />
                        </div>
                    </div>
                </section>
                

                <section className="deals section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 deal-co">
                                <Deals1 />
                            </div>
                            <div className="col-lg-6 deal-co">
                                <Deals2 />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="featured section-padding position-relative">
                    <div className="container">
                        <div className="row">
                            <BannerFeatures />
                        </div>
                    </div>
                </section>

                <section className="section-padding">
                    <div className="container">
                        <h3 className="section-title mb-20 wow fadeIn animated">
                            <span>Featured</span> Brands
                        </h3>
                        <div className="carausel-6-columns-cover position-relative wow fadeIn animated">
                            <BrandSlider />
                        </div>
                    </div>
                </section>

                <section className="bg-grey-9 section-padding">
                    <div className="container pt-25 pb-25">
                        <FetchTabSlider />
                    </div>
                </section>

                <section className="section-padding">
                    <div className="container pt-25 pb-20">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="section-title mb-20"><span>From</span> blog</h3>
                                <HomeBlog posts={blogPosts} />
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <Banner3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Banner4 />
                            </div>
                        </div>
                    </div>
                </section>

                <Bottom />
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    // Fetch data from your API or database
    const featuredProducts = []
    // await fetchFeaturedProducts();
    const newArrivals = []
    // await fetchNewArrivals();
    const blogPosts = []
    // await fetchBlogPosts();

    return {
        props: {
            featuredProducts,
            newArrivals,
            blogPosts,
        },
        revalidate: 60 * 60, // Revalidate every hour
    };
}

export default Home;