import React,{Component} from 'react';
class Products extends Component{
    constructor(props){
      super(props)
      this.state={
      
      }
     
    }

    render(){
        console.log('my props',this.props)
        const productItems = this.props.products.map(product => (

            <div className="col-md-4">
            <div className="thumbnail text-center">
                <a href={`{#${product.id}`} onClick={this.props.handleAddToCart}>
                    <img src={`/products/${product.sku}.jpg`} alt={product.title}/>
                </a>
                <div>
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