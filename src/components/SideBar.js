import React, { Component } from "react";

import './SideBar.css'

class SideBar extends Component {
    state = {
        price: {}
    };

    promotionFilter = [
        {
            type: 'MNGG',
            title: 'Mua nhiều giảm giá'
        },
        {
            type: 'KM',
            title: 'Khuyến mãi'
        },
        {
            type: 'instant',
            title: 'Chuyển phát hoả tốc'
        },
        {
            type: 'shipping_discount',
            title: 'Free ship'
        },
        {
            type: 'installment',
            title: 'Trả góp 0%'
        }
    ];

    shopWarehouseCity = ['Hồ Chí Minh', 'Hà Nội', 'Cần Thơ', 'Đà Nẵng', 'Đồng Nai']

    render() {
        return (
            <div className="SideBar">
                <div className="filter-group color-group">
                    <h6>Bộ lọc sản phẩm</h6>
                    { this.promotionFilter.map((filter, index) => (
                        <div className="filter-row color-row" key={ index }>
                            <input type="checkbox" value={ filter.type } onChange={ this.props.onFilter('promotion') }/>
                            <label>&nbsp;{ filter.title }</label>
                        </div>
                    )) }
                </div>

                <div className="filter-group price-group">
                    <h6>Theo khoảng giá</h6>
                    <div className="filter-row price-row">
                        <input type="number" id="minPrice" className="first-input" onChange={ this.props.onFilter('price') } />
                        <input type="number" id="maxPrice" onChange={ this.props.onFilter('price') } />
                        <button type="button" className="btn btn-secondary" onClick={ this.props.onFilter('filterPrice') }>=></button>
                        <div className="clearfix">&nbsp;</div>
                    </div>
                </div>

                <div className="filter-group location-group">
                    <h6>Vị trí shop</h6>
                    { this.shopWarehouseCity.map((location, index) => (
                        <div className="filter-row location-row" key={ index }>
                            <input type="checkbox" value={ location } onChange={ this.props.onFilter('location') } />
                            <label>&nbsp;{ location }</label>
                        </div>
                    )) }
                </div>
            </div>
        );
    }
}

export default SideBar;