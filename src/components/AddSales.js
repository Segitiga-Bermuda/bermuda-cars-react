import React, { Component } from 'react'
import {
    FormControl,
    FormGroup,
    Form,
    Button,
    FormText
} from 'react-bootstrap'
import { AXIOS } from '../helpers'
import Swal from 'sweetalert2'

export default class AddSales extends Component {
    constructor(props) {
        super(props)

        this.state = {
            itemId: 0,
            items: [],
            month: 'January',
            maxYear: 0,
            year: 0,
            sold: 0,
            unsold: 0
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

    showItem(item) {
        return (
            <option value={item.id}>
                {
                    item.item
                }
            </option>
        )
    }

    handleSubmit(e) {
        e.preventDefault()

        let path = `${process.env.REACT_APP_API}/sales/add/${this.state.itemId}`

        AXIOS().post(path, this.state)
            .then(result => {
                if (result.data.message === 'ordinary user cant edit this data') {
                    Swal.fire({
                        title: 'Ordinary User Can\'t Edit This Data!',
                        icon: 'warning'
                    })
                } else if (result.data.message === 'Data is successfully added.') {
                    Swal.fire({
                        title: result.data.message,
                        icon: 'success'
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        let year = new Date().getFullYear(),
            path = `${process.env.REACT_APP_API}/inventory`

        this.setState({
            maxYear: year,
            year: year
        })

        AXIOS().get(path)
            .then(result => {
                this.setState({
                    items: result.data.data
                })
            })
    }

    render() {
        return (
            <>
                <h1>
                    Add Sales Report
                </h1>
                <Form style={{
                    width: '80%',
                    margin: '0 auto',
                    boxSizing: 'border-box',
                    paddingTop: '25px'
                }}>
                    <FormGroup>
                        <FormText>
                            Item ID:
                    </FormText>
                        <FormControl
                            as="select"
                            type="select"
                            onChange={e => this.handleChange(e)}
                            name="itemId"
                            id="item-id"
                            label="Item ID"
                            value={this.state.itemId}
                        >
                            {
                                this.state.items.map(item => {
                                    return this.showItem(item)
                                })
                            }
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormText>
                            Month:
                        </FormText>
                        <FormControl
                            as="select"
                            type="select"
                            onChange={e => this.handleChange(e)}
                            name="month"
                            id="month"
                            label="Month"
                            value={this.state.month}
                        >
                            <option value="January">
                                January
                            </option>
                            <option value="February">
                                February
                            </option>
                            <option value="March">
                                March
                           </option>
                            <option value="April">
                                April
                            </option>
                            <option value="May">
                                May
                            </option>
                            <option value="June">
                                June
                            </option>
                            <option value="July">
                                July
                           </option>
                            <option value="August">
                                August
                            </option>
                            <option value="September">
                                September
                            </option>
                            <option value="October">
                                October
                            </option>
                            <option value="November">
                                November
                           </option>
                            <option value="December">
                                December
                            </option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormText>
                            Year:
                        </FormText>
                        <FormControl
                            type="number"
                            step="1"
                            min="1970"
                            max={this.state.maxYear}
                            name="year"
                            id="year"
                            onChange={e => this.handleChange(e)}
                            value={this.state.year}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormText>
                            Sold:
                        </FormText>
                        <FormControl
                            type="number"
                            step="1"
                            min="0"
                            max="100"
                            name="sold"
                            id="sold"
                            onChange={e => this.handleChange(e)}
                            value={this.state.sold}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormText>
                            Unsold:
                        </FormText>
                        <FormControl
                            type="number"
                            step="1"
                            min="0"
                            max="100"
                            name="unsold"
                            id="unsold"
                            onChange={e => this.handleChange(e)}
                            value={this.state.unsold}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button
                            variant="success"
                            block={true}
                            onClick={e => this.handleSubmit(e)}
                        >
                            Add Sales Report
                        </Button>
                    </FormGroup>
                </Form>
            </>
        )
    }
}
