import React, {Component} from 'react'

import {Button} from 'reactstrap';

import Product from './Product'
import SearchBar from "./SearchBar";
import './ProductList.css'
import Loading from "./Loading";
import SideBar from "./SideBar";

class ProductList extends Component {
    state = {
        productList: [],
        page: 1,
        searchProductString: '',
        isLoading: false,
        filterData: {}
    }

    componentDidMount() {
        this.getData(this.state.page)
    }

    handleNext = () => {
        this.setState({page: this.state.page + 1})
        this.getData(this.state.page + 1)
    }

    handleBack = () => {
        const page = this.state.page > 1 ? this.state.page - 1 : 1
        this.setState({page: page})
        this.getData(page)
    }

    getData = (page, searchString) => {
        this.setState({ isLoading: true });

        fetch(`http://localhost:4000/products?p=${page}&q=${searchString}&c="vang"`)
            .then(res => res.json())
            .then(json => {
                this.setState({ productList: json.data, isLoading: false })
            })
            .catch(err => console.error(err))
    }

    handleInputChange = event => {
        this.setState({ searchProductString: event.target.value })
    }

    handleSearch = (event) => {
        event.preventDefault()

        this.setState({ page : 1 })
        this.getData(1, this.state.searchProductString)
    };

    handleFilter = filterGroup => event => {
        let productList = this.state.productList;
        let newProductList = [];
        let { filterData } = this.state;

        if (filterGroup !== 'price' && filterGroup !== 'filterPrice' && !event.target.checked) {
            const index = filterData[filterGroup].indexOf(event.target.value);

            if (index > -1) {
                filterData[filterGroup].splice(index, 1);
            }
        } else {
            if (!filterData[filterGroup]) {
                if (filterGroup !== 'price') {
                    filterData[filterGroup] = [];
                } else {
                    filterData[filterGroup] = {};
                }
            }

            if (filterGroup === 'price') {
                filterData[filterGroup][event.target.id] = parseFloat(event.target.value);
            } else {
                filterData[filterGroup].push(event.target.value);
            }
        }

        this.setState({ filterData: filterData });

        for (let filterKey in filterData) {
            if (filterKey !== 'price') {
                for (let filterValue of filterData[filterKey]) {
                    if (filterKey === 'promotion') {
                        for (let product of productList) {
                            if (product['package_discount'].length) {
                                let isValidProducts = product['package_discount'].find((p) => p['type'] === filterValue);

                                if (isValidProducts) {
                                    newProductList.push(product);
                                }
                            }
                        }

                        productList = newProductList;
                        filterData[filterKey] = [];
                        this.setState({ filterData: filterData });
                    }
                }
            } else if (filterKey === 'price') {
                if (filterGroup !== 'filterPrice') {
                    return;
                }

                if (filterData[filterKey]['minPrice'] && !filterData[filterKey]['maxPrice']) {
                    let isValidProducts = productList.filter((p) => p['price'] >= filterData[filterKey]['minPrice']);

                    if (isValidProducts) {
                        newProductList = isValidProducts;
                        filterData[filterKey] = {};
                        this.setState({ filterData: filterData });
                    }
                } else if (!filterData[filterKey]['minPrice'] && filterData[filterKey]['maxPrice']) {
                    let isValidProducts = productList.filter((p) => p['price'] <= filterData[filterKey]['maxPrice']);

                    if (isValidProducts) {
                        newProductList = isValidProducts;
                        filterData[filterKey] = {};
                        this.setState({ filterData: filterData });
                    }
                } else {
                    let isValidProducts = productList.filter((p) => p['price'] <= filterData[filterKey]['maxPrice']
                        && p['price'] <= filterData[filterKey]['maxPrice']);

                    if (isValidProducts) {
                        newProductList = isValidProducts;
                        filterData[filterKey] = {};
                        this.setState({ filterData: filterData });
                    }
                }
            }
        }

        this.setState({ productList: newProductList });
    };

    render() {
        return (
            <div className="ProductList-row">
                <SideBar onFilter={ this.handleFilter } />

                <div className="ProductList-main">
                    <SearchBar onChange={ this.handleInputChange } onSearch={ this.handleSearch }/>

                    { this.state.isLoading && <Loading /> }

                    <div className='ProductList'>
                        {Array.isArray(this.state.productList) && this.state.productList.map((product, index) => (
                            <Product key={index} product={product}/>
                        ))}
                    </div>

                    <div className="pagination">
                        <Button onClick={ this.handleBack } color="secondary">Prev</Button>{' '}
                        <p>{ this.state.page }</p>
                        <Button onClick={ this.handleNext } color="success">Next</Button>{' '}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductList
