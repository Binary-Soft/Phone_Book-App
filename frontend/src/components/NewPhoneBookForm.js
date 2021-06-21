import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class NewPhoneBookForm extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        adress: ''
    }


    render() {
        return (
            <Form onSubmit={this.props.phonebook ? this.editBook : this.createBook}>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.name)}
                    />

                </FormGroup>

                <FormGroup>
                    <Label for="name">Email:</Label>
                    <Input
                        type="email"
                        name="email"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.email)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="name">Phone:</Label>
                    <Input
                        type="text"
                        name="phone"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.phone)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="name">Country:</Label>
                    <Input
                        type="text"
                        name="country"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.country)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="name">City:</Label>
                    <Input
                        type="text"
                        name="city"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.city)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="name">Adress:</Label>
                    <Input
                        type="text"
                        name="adress"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.adress)}
                    />
                </FormGroup>

                <Button>Send</Button>
            </Form>
        )
    }
}

export default NewPhoneBookForm