import React from 'react';
import MovieDetail from '../components/MovieDetail';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/react-movie-web-services/");
        }
    }
    render() {
        const info = this.props.location.state;
        if (info) {
            return <MovieDetail movie={info}/>;
        } else {
            return null;
        }
    }
}

export default Detail;
