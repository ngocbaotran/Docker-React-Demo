import React, { Component } from "react";

import './ProductDetail.css'

class ProductDetail extends Component {
    render() {
        return (
            <>
                <section className="ProductDetail">
                    <div className="ProductDetailGallery">
                        <div className="ProductImageMain">
                            <img src="/images/shen.jpeg" alt="image-main" />
                        </div>
                        <div className="ProductImageThumbs"></div>
                    </div>

                    <div className="ProductDetailInfo">
                        <div className="mainInfo">
                            <div className="contentBox hrDotted">
                                <nav className="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="item">
                                            <a className="text">Sendo.vn</a>
                                        </li>

                                        <li className="item">
                                            <a className="text">Thời trang nam</a>
                                        </li>

                                        <li className="item">
                                            <a className="text">Quần jeans nam</a>
                                        </li>

                                        <li className="item">
                                            <a className="text">Quần jeans nam khác</a>
                                        </li>
                                    </ol>
                                </nav>

                                <div className="productNameWrapper">
                                    <div>
                                        <h1 className="productName">Quần Jean đen Nam Cao Cấp - QJ-005</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="basicInfo">
                                <div className="contentBox hrDotted">
                                    <div className="priceBox">
                                        <div className="price">
                                            <strong className="currentPrice">450.000đ</strong>
                                            <span className="oldPrice">500.000đ</span>
                                        </div>
                                    </div>
                                    <div className="ratingBox">
                                        <div className="rating">Rating nằm ở đây nha</div>
                                    </div>
                                </div>
                                <div className="contentBox" id="productOptionBox">
                                    <div className="ProductOptions">
                                        <div className="dataTitle">Màu sắc:</div>
                                        <div>
                                            <button className="colorOption active"></button>
                                        </div>
                                    </div>
                                    <div className="ProductOptions">
                                        <div className="dataTitle">Kích thước quần:</div>
                                        <div>
                                            <button className="textOption isDisabled">32</button>
                                            <button className="textOption isDisabled">34</button>
                                            <button className="textOption">31</button>
                                            <button className="textOption">30</button>
                                            <button className="textOption isDisabled">29</button>
                                            <button className="textOption isDisabled">28</button>
                                        </div>
                                    </div>
                                    <div className="ProductOptions">
                                        <div className="dataTitle">Số lượng:</div>
                                        <div className="qtyInput">
                                            <button className="btn disabled_3ugQ">-</button>
                                            <input className="input" type="number" />
                                            <button className="btn">+</button>
                                            <span className="quantityRemain">chỉ còn lại <strong>2</strong> sản phẩm</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="contentBox18K groupBtnCheckout">
                                    <div className="groupBtnInStock">
                                        <div className="btnCheckoutGroup">
                                            <button className="btn addToCart">Thêm vào giỏ hàng</button>
                                            <button className="btn buyNow">Mua ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ProductDetail