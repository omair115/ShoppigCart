import React,{Component} from 'react';
import { withStyles, responsiveFontSizes } from '@material-ui/core/styles';
import axios from 'axios';
import Filter from '../../Components/Products/filter'
import styles from './style'
import Products from './../../Components/Products/product'
class Main extends Component{
    constructor(props){
      super(props)
      this.state={
         products:[] , filteredProducts:[]
      }
      this.handleChangeSort =  this.handleChangeSort.bind(this)
      this.handleChangeSize =  this.handleChangeSize.bind(this)
    }
       componentWillMount(){
      //   axios.get('http://dummy.restapiexample.com/api/v1/employees')
      // .then(res => {
       
      //   this.setState({ products:res.data });
      //   this.setState({ filteredProducts:res.data });
      //   console.log('dsfsdfsdf',this.state.filteredProducts);
      
      // })
      axios.get(`http://localhost:3000/products`)
              .then(res => {
                const filteredProducts = res.data;
                const products = res.data;
                this.setState({ filteredProducts });
                this.setState({ products });
                console.log(filteredProducts)
              })

              
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
       </div>
       </div>
   </div>   
  );
}
}
 

export default withStyles(styles)(Main);