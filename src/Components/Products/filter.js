import React, { Component } from 'react';

class filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                {this.props.count} Products Found
                </div>

                <div className="col-md-4">
                    <label>
                        Order By
                        <select className="form-control" value={this.props.sort}
                        onChange={this.props.handleChangeSort}>
                        <option value="">Select</option>
                        <option value="lowest">lowest</option>
                        <option value="highest">highest</option>
                        </select>
                    </label>
                </div>

                <div className="col-md-4">
                    <label>
                        Size By
                        <select className="form-control" value={this.props.size}
                        onChange={this.props.handleChangeSize}>
                             <option value="">All</option>
                             <option value="x">XS</option>
                             <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }
}

export default filter;