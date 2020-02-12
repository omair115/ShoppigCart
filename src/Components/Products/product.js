import React,{Component} from 'react';
import util from './util';
class Products extends Component{
    constructor(props){
      super(props)
      this.state={
      
      }
     
    }

    render(){
        console.log('my props',this.props)
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
 

export default (Products);