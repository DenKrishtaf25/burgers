import React from 'react'
import Header from './Header'
import Order from './Order'
import MenuAdmin from './MenuAdmin'

class App extends React.Component {

    state = {
        burgers:{},
        oreder:{}
    }

    addBurger = burger =>{
        console.log('addBurger', burger);
    }

    render() {
        return (
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title="Very Hot Burger"/>
                </div>
                <Order />
                <MenuAdmin addBurger={this.addBurger}/>
            </div>
        )
    }
}

export default App