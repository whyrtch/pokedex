import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchPokemonAPIAction} from '../../redux/action';
import Loading from "../../component/Loading/Loading";
import Card from "../../component/Card/Card";
import logo from "../../logo.svg";

class Home extends Component {

    componentDidMount() {
        this.props.fetchPokemonAPIAction();
    }

    render() {
        console.log(this.props.pokemons)
        return (
            <Fragment>
                {
                    this.props.loading ?
                        <Loading/>
                        :
                        <div className="row px-lg-4 px-md-4 px-3">
                            {
                                this.props.pokemons.map(data => {
                                    return (
                                        <div className="col-lg-2 col-md-4 col-6 mb-4" key={data.name}>
                                            <Card logo={logo} title={data.name}/>
                                        </div>
                                    )
                                })
                            }
                        </div>

                }
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    pokemons :state.pokemons.data,
    loading : state.pokemons.loading

})

const mapDispatchToProps = {
    fetchPokemonAPIAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);