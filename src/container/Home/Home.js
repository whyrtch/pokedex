import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchPokemonAPIAction} from '../../redux/action';
import ListCard from "../../component/ListCard/ListCard";

class Home extends Component {

    componentDidMount() {
        this.props.fetchPokemonAPIAction();
    }

    render() {
        console.log(this.props.pokemons)
        return (
            <Fragment>
                <ListCard pokemons={this.props.pokemons.data} class={"custome-height-16"} loading={this.props.pokemons.loading} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    pokemons :state.pokemons

})

const mapDispatchToProps = {
    fetchPokemonAPIAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);