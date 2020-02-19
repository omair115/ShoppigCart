import React,{Component} from 'react';
import { withStyles, responsiveFontSizes } from '@material-ui/core/styles';
import axios from 'axios';
import Filter from '../../Components/Products/filter'
import styles from './style'
import Products from './../../Components/Products/product'
import Basket from '../../Components/Products/basket';
class Main extends Component{
    constructor(props){
      super(props)
      this.state={
         products:[] , filteredProducts:[] , cartItems:[]
      }
      this.handleChangeSort =  this.handleChangeSort.bind(this)
      this.handleChangeSize =  this.handleChangeSize.bind(this)
      this.handleAddToCart = this.handleAddToCart.bind(this)
    }
       componentWillMount(){
      axios.get(`http://localhost:3000/products`)
              .then(res => {
                const filteredProducts = res.data;
                const products = res.data;
                this.setState({ filteredProducts });
                this.setState({ products });
                console.log(filteredProducts)
              })
              if (localStorage.getItem('cartItems')){
                this.setState({cartItems:JSON.parse(localStorage.getItem('cartItems'))})
              }

              
}
      
handleChangeSort(e){
  this.setState({sort:e.target.value})
  this.listProducts()
}
listProducts(){
  this.setState(state =>{
    if(state.sort !==''){
      state.products.sort((a,b)=>(state.sort==='lowest')? (a.price > b.price?1:-1) : (a.price < b.price ? 1 :-1))
    }
    else{
         state.products.sort((a,b) => (a.id < b.id ? 1 : -1))
    }
    if (state.size !== ''){
      return {filteredProducts: state.products.filter(a=> a.availableSizes.indexOf(state.size.toUpperCase())>=0)}
    }
    return {filteredProducts:state.products}
  })

}
handleChangeSize(e){
  this.setState({size:e.target.value})
  this.listProducts()
}

handleAddToCart(e,product){
this.setState(state=>{
  const cartItems = state.cartItems;
  let productAlreadyInCart = false;
  cartItems.forEach(item => {
    if(item.id === product.id){
      productAlreadyInCart = true;
      item.count++;
    }
  }) 
  if (!productAlreadyInCart){
    cartItems.push({...product, count:1})
  }
  localStorage.setItem("cartItems",JSON.stringify(cartItems))
  return cartItems
})
}

    render(){
 return (
   <div className="container">
     <h1>E-Commerce Shopping Cart Application</h1>
     <hr/>

     <div className="row">
       <div className="col-md-8">
         <Filter size={this.state.size} sort={this.state.sort} handleChangeSize={this.handleChangeSize}
         handleChangeSort={this.handleChangeSort} count={this.state.filteredProducts.length}/>
         <hr/>
         <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart}/>
       </div>

       <div className="col-md-4">
         <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}/>
       </div>
       </div>
   </div>   
  );
}
}
 

export default withStyles(styles)(Main);