import { connect } from "react-redux";
import "./css/index.css";

function Home(props) {
  let { user } = props;
  console.log(user)
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    user: state.app.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // increment: () => dispatch({ type: 'INCREMENT' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
