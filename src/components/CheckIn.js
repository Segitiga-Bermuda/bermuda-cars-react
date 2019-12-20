import React, { Component } from 'react'
import {
    FormControl,
    FormGroup,
    Form,
    Button,
    FormText
} from 'react-bootstrap'
import { AXIOS, verify } from '../helpers'
import Swal from 'sweetalert2'

export default class CheckIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: verify() || {},
            status: 'Presence'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        let val = e.target.value

        this.setState({
            [e.target.name]: val
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        let path = `${process.env.REACT_APP_API}/attreport/add`

        AXIOS().post(path, this.state)
            .then(result => {
                console.log(result)
                if (result.data.message === 'You have been check in today.') {
                    Swal.fire({
                        title: result.data.message,
                        icon: 'warning'
                    })
                } else if (result.data.message === 'Data is successfully added.') {
                    Swal.fire({
                        title: 'You are Successfully Check In.',
                        icon: 'success'
                    })
                } else if (result.data.message === 'You Are Late.') {
                    Swal.fire({
                        title: 'You Are Late.',
                        icon: 'warning'
                    })
                } else if (result.data.message === 'This is weekend.') {
                    Swal.fire({
                        title: 'This is weekend.',
                        icon: 'warning'
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <>
                <div style={{
                    marginTop: '50px'
                }}>
                    <h1>
                        Check In
                </h1>
                <h2>
                    {
                        this.state.user.fullName
                    }
                </h2>
                <h3>
                    Employee ID:&nbsp;
                    {
                        this.state.user.employeeId
                    }
                </h3>
                <Form style={{
                    width: '80%',
                    margin: '0 auto',
                    boxSizing: 'border-box',
                    paddingTop: '25px'
                }}>
                    <FormGroup>
                        <FormControl as="select" type="select" onChange={e => this.handleChange(e)} name="status" id="status" label="Status" value={this.state.status}>
                        <option value="Presence">
                            Presence
                        </option>
                        <option value="Sick">
                            Sick
                        </option>
                        <option value="Leave">
                            Leave
                        </option>
                        <option value="Absence">
                            Absence
                        </option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <Button
                            variant="success"
                            block={true}
                            onClick={e => this.handleSubmit(e)}
                        >
                            Check In
                        </Button>
                        </FormGroup>
                    </Form>
                </div>
            </>
        )
    }
}
