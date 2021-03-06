const products = [
      {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
      },
      {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
      },
      {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
      },
      {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
      },
      {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
      },
      {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
      },
      {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
      },
      {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
      },
      {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
      },
      {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
      },
      {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
      },
      {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
      },
      {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
      },
      {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
      },
      {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
      },
      {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
      },
      {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
      },
      {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
      },
      {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
      },
      {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
      },
    ]

console.table(products);
class App extends React.Component{

  state = {
    products : products,
    name: '',
    price: '',
    description: ''
  }
  handleChange = (event) => {
    console.log(event.target.value);
    // this.state.value = event.target.value
    //this.setState({value: event.target.value});
    this.setState({[event.target.id]:event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log("you prevented the default");
    const newItem = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description
    }
    this.setState({
      products :[newItem, ...this.state.products],
      name: '',
      price: 0,
      description: 'Description of item'
    })
  }

  render(){
    return(
          <div>
              <h1> Hi there! </h1>
              <form onSubmit={this.handleSubmit}>
                  <label htmlFor="name">Name</label>
                  <input type="text" value={this.state.name} onChange={this.handleChange} id="name" />
                  <br />
                  <label htmlFor="price">Price</label>
                  <input type="number" value={this.state.price} onChange={this.handleChange} id="price" />
                  <br />
                  <label htmlFor="description">Description</label>
                  <input type="text" value={this.state.description} onChange={this.handleChange} id="description" />
                  <br />
                  <input type="submit" />
              </form>
              <div>
                <h2> Preview the item</h2>
                <h3> {this.state.name}</h3>
                <h4> {this.state.price}</h4>
                <h4> {this.state.description}</h4>
              </div>
              <ul>
                  {this.state.products.map(product =>
                    <li> {product.name} {product.price}
                  </li>)}
              </ul>
          </div>
        )
  }

}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
