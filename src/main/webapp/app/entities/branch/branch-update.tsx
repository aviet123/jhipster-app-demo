import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './branch.reducer';
import { IBranch } from 'app/shared/model/branch.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IBranchUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const BranchUpdate = (props: IBranchUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { branchEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/branch' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...branchEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="jhipsterbranchapiApp.branch.home.createOrEditLabel" data-cy="BranchCreateUpdateHeading">
            Create or edit a Branch
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : branchEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="branch-id">Id</Label>
                  <AvInput id="branch-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nameLabel" for="branch-name">
                  Name
                </Label>
                <AvField id="branch-name" data-cy="name" type="text" name="name" />
              </AvGroup>
              <AvGroup>
                <Label id="addressLabel" for="branch-address">
                  Address
                </Label>
                <AvField id="branch-address" data-cy="address" type="text" name="address" />
              </AvGroup>
              <AvGroup>
                <Label id="addressDetailsLabel" for="branch-addressDetails">
                  Address Details
                </Label>
                <AvField id="branch-addressDetails" data-cy="addressDetails" type="text" name="addressDetails" />
              </AvGroup>
              <AvGroup>
                <Label id="cityLabel" for="branch-city">
                  City
                </Label>
                <AvField id="branch-city" data-cy="city" type="text" name="city" />
              </AvGroup>
              <AvGroup>
                <Label id="countryLabel" for="branch-country">
                  Country
                </Label>
                <AvField id="branch-country" data-cy="country" type="text" name="country" />
              </AvGroup>
              <AvGroup>
                <Label id="phoneLabel" for="branch-phone">
                  Phone
                </Label>
                <AvField id="branch-phone" data-cy="phone" type="text" name="phone" />
              </AvGroup>
              <AvGroup>
                <Label id="districtLabel" for="branch-district">
                  District
                </Label>
                <AvField id="branch-district" data-cy="district" type="text" name="district" />
              </AvGroup>
              <AvGroup>
                <Label id="openingDateLabel" for="branch-openingDate">
                  Opening Date
                </Label>
                <AvField id="branch-openingDate" data-cy="openingDate" type="date" className="form-control" name="openingDate" />
              </AvGroup>
              <AvGroup check>
                <Label id="activeLabel">
                  <AvInput id="branch-active" data-cy="active" type="checkbox" className="form-check-input" name="active" />
                  Active
                </Label>
              </AvGroup>
              <AvGroup>
                <Label id="cityIdLabel" for="branch-cityId">
                  City Id
                </Label>
                <AvField id="branch-cityId" data-cy="cityId" type="string" className="form-control" name="cityId" />
              </AvGroup>
              <AvGroup>
                <Label id="districtIdLabel" for="branch-districtId">
                  District Id
                </Label>
                <AvField id="branch-districtId" data-cy="districtId" type="string" className="form-control" name="districtId" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/branch" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  branchEntity: storeState.branch.entity,
  loading: storeState.branch.loading,
  updating: storeState.branch.updating,
  updateSuccess: storeState.branch.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(BranchUpdate);
