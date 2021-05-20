import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './branch.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IBranchDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const BranchDetail = (props: IBranchDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { branchEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="branchDetailsHeading">Branch</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">Id</span>
          </dt>
          <dd>{branchEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{branchEntity.name}</dd>
          <dt>
            <span id="address">Address</span>
          </dt>
          <dd>{branchEntity.address}</dd>
          <dt>
            <span id="addressDetails">Address Details</span>
          </dt>
          <dd>{branchEntity.addressDetails}</dd>
          <dt>
            <span id="city">City</span>
          </dt>
          <dd>{branchEntity.city}</dd>
          <dt>
            <span id="country">Country</span>
          </dt>
          <dd>{branchEntity.country}</dd>
          <dt>
            <span id="phone">Phone</span>
          </dt>
          <dd>{branchEntity.phone}</dd>
          <dt>
            <span id="district">District</span>
          </dt>
          <dd>{branchEntity.district}</dd>
          <dt>
            <span id="openingDate">Opening Date</span>
          </dt>
          <dd>
            {branchEntity.openingDate ? <TextFormat value={branchEntity.openingDate} type="date" format={APP_LOCAL_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="active">Active</span>
          </dt>
          <dd>{branchEntity.active ? 'true' : 'false'}</dd>
          <dt>
            <span id="cityId">City Id</span>
          </dt>
          <dd>{branchEntity.cityId}</dd>
          <dt>
            <span id="districtId">District Id</span>
          </dt>
          <dd>{branchEntity.districtId}</dd>
        </dl>
        <Button tag={Link} to="/branch" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/branch/${branchEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ branch }: IRootState) => ({
  branchEntity: branch.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(BranchDetail);
