// import React, { Component } from 'react';
// import { API_ROOT, HEADERS } from '../constants/index'
// import { connect } from 'react-redux'

// class GuessWord extends Component {
//     state = {
//         guess_word: ''
//     }

//     updateGuessWord = (e) => {
//         e.preventDefault()
//         console.log('props', this.props)
//         console.log('state', this.state)
//         fetch(`${API_ROOT}/api/v1/add-guess-word`, {
//             method: 'PATCH',
//             headers: HEADERS,
//             body: JSON.stringify({
//                 invite_key: this.props.game.inviteKey,
//                 user_id: this.props.userId,
//                 guess_word: this.state.guess_word
//             })
//         })
//     }

//     handleInputChange = (e) => {
//         this.setState({
//           [e.target.name]: e.target.value
//         })
//     }

//     render() {
//         return(
//             <div>
//                 <input name={'guess_word'} onChange={this.handleInputChange} value={this.state.guess_word}/>
//                 <button onClick={this.updateGuessWord}>Submit Hidden Word</button>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         loggedInUser: state.loggedInUser,
//         game: state.game
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         setGuessWord: (guessWord) => dispatch(setGuessWord(guessWord))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(GuessWord)