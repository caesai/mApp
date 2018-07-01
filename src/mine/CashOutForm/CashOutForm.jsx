import React, { Component } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Form from 'core/components/Form';
import Field from 'core/components/Field';
import Button from 'core/components/Button';
import { cashOut } from 'core/api';

class CashOutForm extends Component {
  state = {
    formData: null,
  };

  handleChange = (formData) => {
    this.setState({ formData });
  };

  handleSubmit = async () => {
    await cashOut(this.state.formData);

    this.props.onSubmit();
  };

  render() {
    const { open, onClose } = this.props;

    return (
      <Dialog onClose={onClose} open={open}>
        <DialogTitle>Cash out</DialogTitle>
        <DialogContent>
          <Form noButton onChange={this.handleChange}>
            <Field name="address" rule="required" />
          </Form>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={this.handleSubmit}>Cash out</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
}

export default CashOutForm;
