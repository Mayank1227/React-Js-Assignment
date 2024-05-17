import './Food.css'
import slide_img1 from './images/slide1.jpg'
import slide_img2 from './images/slide2.png'
import slide_img3 from './images/slide3.png'
import slide_img4 from './images/slide4.jpg'
import cat_img1 from './images/cat1.png'
import cat_img2 from './images/cat2.png'
import cat_img3 from './images/cat3.png'
import cat_img4 from './images/cat4.png'
import cat_img5 from './images/cat5.png'

export default function Food() {
    return (
        <>

            <nav className='home'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Vendors</a></li>
                    <li><a href="/">Mega Menu</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Pages</a></li>
                </ul>

            </nav>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner ">
                    <div class="carousel-item active  ">
                        <img src={slide_img1} class="d-block" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={slide_img2} class="d-block" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={slide_img3} class="d-block" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={slide_img4} class="d-block" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>


            <div className="container">
                <div className="product-grid">

                    <div className="product-card">
                        <div className="card_img">
                            <img src={cat_img1} alt="" />
                        </div>
                        <div className="title">
                            <h3>Vegetables</h3>
                        </div>
                        <div className="add">
                            <p>20 items</p>
                        </div>
                        <div className="butt-card">
                            <button>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="card_img">
                            <img src={cat_img2} alt="" />
                        </div>
                        <div className="title">
                            <h3>Snack</h3>
                        </div>
                        <div className="add">
                            <p>10 items</p>
                        </div>
                        <div className="butt-card">
                            <button>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="card_img">
                            <img src={cat_img3} alt="" />
                        </div>
                        <div className="title">
                            <h3>Peach</h3>
                        </div>
                        <div className="add">
                            <p>25 items</p>
                        </div>
                        <div className="butt-card">
                            <button>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="card_img">
                            <img src={cat_img4} alt="" />
                        </div>
                        <div className="title">
                            <h3>Cake & Milk</h3>
                        </div>
                        <div className="add">
                            <p>35 items</p>
                        </div>
                        <div className="butt-card">
                            <button>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="card_img">
                            <img src={cat_img5} alt="" />
                        </div>
                        <div className="title">
                            <h3>Custard apple</h3>
                        </div>
                        <div className="add">
                            <p>15 items</p>
                        </div>
                        <div className="butt-card">
                            <button>Add to Cart</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}