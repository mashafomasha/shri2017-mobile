import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipesActions from '../../actions/recipesActions';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Cake from 'material-ui/svg-icons/social/cake';

import styles from '../../../css/recipes-list/recipe-list.css';

export class RecipesListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    _handleShowDetails(id , event) {
        event.preventDefault();

        
    }

    render() {
        const styles = {
            titleStyle: {
                fontSize: '16px',
                fontWeight: 'bold',
                paddingBottom: '5px'
            },
            iconStyle: {
                width: '50px',
                height: '50px'
            }
        };

        return (
            <div className='recipeList-wrapper'>
                {this.props.recipes.map((recipe) => {
                    return (
                        <Card>
                            <CardHeader
                                title={recipe.recipeName}
                                titleStyle={styles.titleStyle}
                                subtitle={`Recipe rating - ${recipe.rating}`}
                                avatar={recipe.smallImageUrls.length > 0 ? recipe.smallImageUrls[0] : '../../../img/logo.png'}
                                iconStyle={styles.iconStyle}
                            />
                            <CardText className='recipeList-cardText'>
                                <ul className='recipeList-ingredients'>
                                    {
                                        recipe.ingredients.map((ingredient) => {
                                            return (
                                                <li className='ingredientItem'>
                                                    <Cake className='ingredientItem-icon'/>
                                                    <span className='ingredientItem-text'>{ ingredient }</span>
                                                </li>);
                                        })
                                    }
                                </ul>
                                <RaisedButton 
                                    label="Details"
                                    onTouchTap={this._handleShowDetails.bind(this, recipe.id)}
                                />
                            </CardText>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        recipes: state.recipes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        recipesActions: bindActionCreators(recipesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesListPage);