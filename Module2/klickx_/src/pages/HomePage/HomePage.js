
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomePage.css';

import pictures from '../../reducers/pictureData';



class HomePage extends Component{
    state = {
        pictures: pictures,
        // pictureName : [Vrindavan, Srirangam, GantakiRiver, Moon, Fall, Fire, matches, sunset, nature1, Journey, cosmos, earth],
        // userLiked: false,
        // userComments: [],
        // userFavorite: []
    }
    // addToLikes = (item) => {
    //     this.setState({cartItems: [item, ...this.state.cartItems]})
    //   }
    imgDetails =  (e) => {
        console.log('onclick - imgDetails');
        console.log(e.target.className);
    }
    render() {
        console.log('inside the home page');
        console.log(this.props);
        console.log(this.state);
        return(
            <div className='homePage'>                            
                    <div className='mainContent' onClick={this.imgDetails}>
                    { pictures.map(({id, name, source}) => <img key={id} src={source} alt={name} />)}
                    
                    {/* <button className='likeButton'>Like</button>
                    <button className='favButton'>Add To Favorite</button> */}
                    {/* {this.state.pictures.comments.map(comments => {
                        <li>{comments}</li>
                        
                    })} */}
                    </div>
                </div>
        )
    }

}
const mapStateToProps = (state) =>({
    pictures: state.pictures.pictures
})

export default connect(mapStateToProps)(HomePage);
//export default HomePage;