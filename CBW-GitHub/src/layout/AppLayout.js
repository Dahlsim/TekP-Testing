import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import TopNav from "../containers/navs/Topnav";
import Sidebar from "../containers/navs/Sidebar";
import GiftingStatement from "../containers/GiftingStatement";

class AppLayout extends Component {
  render() {
    const { containerClassnames, authUser } = this.props;
    const { isLoading, selectedWheel } = this.props.wheel
    return (
      <div id="app-container" className={containerClassnames}>
        <TopNav history={this.props.history} />
        <Sidebar />
        <main>
          <div className="container-fluid">
            {
              isLoading ? <div></div>
                : selectedWheel?.userMeta?.giftingStatement ? this.props.children
                  : <GiftingStatement selectedWheel={selectedWheel} user={authUser?.user} />
            }
          </div>
        </main>
      </div>
    );
  }
}
const mapStateToProps = ({ menu, wheel, authUser }) => {
  const { containerClassnames } = menu;
  return { containerClassnames, wheel, authUser };
};
const mapActionToProps = {}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(AppLayout));
