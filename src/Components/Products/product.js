import React,{Component} from 'react';
import util from './util';
import {connect} from 'react-redux'
import {fetchProducts} from '../../actions/productAction'
class Products extends Component{
    constructor(props){
      super(props)
      this.state={
      
      }
    }
       componentWillMount(){
             this.props.fetchProducts();
    }

    render(){
        
        const productItems = this.props.products.map(product => (

            <div className="col-md-4" key={product.id}>
            <div className="thumbnail text-center">
                <a href={`{#${product.id}`} onClick={(e)=>this.props.handleAddToCart(e,product)}>
                    <img src={`/products/${product.sku}.jpg`} alt={product.title}/>
                </a>
                <div>
        <b>{util.formatCurrency(product.price)}</b>
        <button className="btn btn-primary" onClick={(e)=>this.props.handleAddToCart(e,product)}>Add To Cart 
        </button>
                </div>
        <p>{product.title}</p>
            </div> 
             </div>   
        )
        )
 return (
    <div className="row">{productItems}</div>
  );
}
}
 
const mapStateToProps = state =>({
  products: state.products.items
})
export default connect(mapStateToProps,{fetchProducts})(Products);