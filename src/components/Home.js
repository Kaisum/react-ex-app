import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import Realdolmen from '../img/realdolmen.svg';
import { connect } from 'react-redux';
// import axios from "axios";

class Home extends Component {

    // state = {
    //     comment: []
    // }
    //
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/comments')
    //         .then(res => this.setState({
    //             comment: res.data.slice(0, 10)
    //         }));
    // }

    render() {
        // const {comments} = this.state;
        const {comments} = this.props;
        const quotesList = comments.length ? (
            comments.map(comment => {
                return (
                    <div className="post card" key={comment.id}>
                        {/*<img className="rd-logo" src={Realdolmen} alt="Realdolmen logo"/>*/}
                        <div className="card-content">
                            <Link to={'/comments/' + comment.id}>
                                <span className="card-title">
                                <b>{comment.email}</b>
                            </span>
                            </Link>
                            <p>{comment.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No comments yet</div>
        );

        return (
            <div className="container">
                <h4 className="center">Comments</h4>
                {quotesList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    };
}

export default connect(mapStateToProps)(Home);