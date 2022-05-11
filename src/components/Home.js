import React from "react";
import Product from "./Product";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";


const Home = () => {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} alt="logo" class="card-img" height={550} width={500} />
                        <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                            <h5 class="card-title display-3 fw-bolder ps-5 mb-0">ASC...</h5>
                        </div>
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className="card-title display-3 fw-bolder py-lg-5 mb-0">NEW APPLE PRODUCTS</h5>
                            <p className="card-text lead pb-5 fs-2">
                                CHECK OUT ALL APPLE PRODUCTS
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} alt="logo" class="card-img" height={550} width={500} />
                        <div class="carousel-caption d-none d-md-block">
                            {/* ASC */}
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img3} alt="logo" class="card-img" height={550} width={500} />
                        <div class="carousel-caption d-none d-md-block">
                            {/* ASC */}
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div>
            <Product />
        </>
    );
};

export default Home;
