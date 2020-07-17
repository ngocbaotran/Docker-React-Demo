import React, { Component } from "react";

import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

import './SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="Search">
                <form onSubmit={ this.props.onSearch } >
                    <InputGroup>
                        <Input type="text" placeholder="Nhập tên sản phẩm" onChange={ this.props.onChange } />
                        <InputGroupAddon addonType="append">
                            <Button color="secondary" onClick={ this.props.onSearch }>Tìm kiếm</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </form>
            </div>
        );
    }
}

export default SearchBar;