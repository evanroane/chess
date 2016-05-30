import { connect } from 'react-redux';
import ChessApp from '../chess-app';

function mapStateToProps(state) {
    return {
        game: state.game,
    };
}

export default connect(mapStateToProps)(ChessApp);
