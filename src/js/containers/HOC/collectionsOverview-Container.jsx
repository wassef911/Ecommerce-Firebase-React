import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { SelectIsCollectionsFetching } from "../../../redux/shop/shopSelector";
import WithSpinner from "./with-spinner";
import CollectionOverview from "../shopCollection";

const mapStateToProps = createStructuredSelector({
  isLoading: SelectIsCollectionsFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
