import React,{Component} from 'react';
import { withStyles, responsiveFontSizes } from '@material-ui/core/styles';
import axios from 'axios';


import styles from './style'
import Products from './../../Components/Products/product'
class Main extends Component{
    constructor(props){
      super(props)
      this.state={
         products:[] , filteredProducts:[]
      }
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
                console.log(filteredProducts)
              })
}
      

    render(){
 return (
   <div className="container">
     <h1>E-Commerce Shopping Cart Application</h1>
     <hr/>

     <div className="row">
       <div className="col-md-8">
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