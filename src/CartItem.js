import React from 'react';
 
class CartItem extends React.Component{
    constructor(){
        super();//calling constructor of parent callas
        this.state={
            price:999,
            title:'phone',
            qty:1,
            img:' '
        }
    }

    render(){

        const{price,title,qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src=""/>
                </div>
                <div className="right-block">
                    {/* <div style={{fontSize:25}}> {this.state.title}</div> */}
                    <div style={{fontSize:25}}> {title}</div>

                    <div style={{ color:'#777'}}>{this.state.price}</div>
                    <div style={{ color:'#777'}}>{this.state.qty}</div>
                    <div className="cart-item-actions">
                        {

                        }
                        <img alt="decrease" className="action-icons" src="https://as1.ftcdn.net/jpg/01/07/57/90/500_F_107579053_aCv8Ox7e1klnqcNuJC8cmM18aMHNdvC4.jpg"/>
                        <img alt="increase" className="action-icons" src="https://as1.ftcdn.net/jpg/03/04/05/10/500_F_304051050_QNAQbFIKZk1eLLNuSmbyAtCvg91xnUv4.jpg"/>
                        <img alt="delete" className="action-icons" src="https://as2.ftcdn.net/jpg/01/35/16/95/500_F_135169507_hEcszwyhduwTMGpDkNluLNm3IwLDl0BJ.jpg"/>

                    </div>

                </div>

            </div>
        )
    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4
    }
}
export default CartItem;