import { connect } from 'react-redux';
import Wall from './Wall';

const mapStateToProps = (state) => ({
    thoughts:
});

const mapDispatchToProps = (dispatch) => ({});

const ConWall = connect(mapStateToProps, mapDispatchToProps)(Wall);

export default ConWall;