import React, { Component } from 'react'
import { AXIOS } from '../helpers'
import {
    Table,
    Button,
    Form,
    FormGroup,
    FormText,
    FormControl
} from "react-bootstrap";
import MembersAttendanceReport from './MembersAttendanceReport.js'

export default class AttendanceReport extends Component {
    constructor(props) {
        super(props)

        this.state = {
            attendanceReport: [],
            year: 0,
            maxYear: 0,
            month: 'January',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
    }

    handleChange(e) {
        let val = e.target.value

        this.setState({
            [e.target.name]: val
        })
    }

    handleDateChange() {
        AXIOS()
            .get(`${process.env.REACT_APP_API}/attreport/${this.state.year}/${this.state.month}`)
            .then(res => {
                this.setState({
                    attendanceReport: res.data.data
                })
            });
    }

    componentDidMount() {
        let year = new Date().getFullYear()

        let path = `${process.env.REACT_APP_API}/attreport/${year}/${this.state.month}`
        AXIOS()
            .get(path)
            .then(result => {
                this.setState({
                    attendanceReport: result.data.data,
                    year: year,
                    maxYear: year
                })
            })
    }

    render() {
        return (
            <div style={{
                width: '80%',
                margin: '50px auto'
            }}>
                <h1>
                    Attendance Reports
                </h1>
                <Form>
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
                    <Button
                        onClick={e => this.handleDateChange(e)}
                        style={{
                            display: 'block',
                            margin: '0 auto'
                        }}
                    >
                        Change Date
                    </Button>
                </Form>
                <hr />
                <Table
                    responsive
                    striped
                    bordered
                    hover
                    style={{ marginTop: "50px" }}
                >
                    <thead>
                        <tr>
                            <th rowSpan="2">Employer ID</th>
                            <th rowSpan="2">Name</th>
                            <th rowSpan="2">Departement</th>
                            <th colSpan="31">Dates</th>
                        </tr>
                        <tr>
                            <th>
                                1
                            </th>
                            <th>
                                2
                            </th>
                            <th>
                                3
                            </th>
                            <th>
                                4
                            </th>
                            <th>
                                5
                            </th>
                            <th>
                                6
                            </th>
                            <th>
                                7
                            </th>
                            <th>
                                8
                            </th>
                            <th>
                                9
                            </th>
                            <th>
                                10
                            </th>
                            <th>
                                11
                            </th>
                            <th>
                                12
                            </th>
                            <th>
                                13
                            </th>
                            <th>
                                14
                            </th>
                            <th>
                                15
                            </th>
                            <th>
                                16
                            </th>
                            <th>
                                17
                            </th>
                            <th>
                                18
                            </th>
                            <th>
                                19
                            </th>
                            <th>
                                20
                            </th>
                            <th>
                                21
                            </th>
                            <th>
                                22
                            </th>
                            <th>
                                23
                            </th>
                            <th>
                                24
                            </th>
                            <th>
                                25
                            </th>
                            <th>
                                26
                            </th>
                            <th>
                                27
                            </th>
                            <th>
                                28
                            </th>
                            <th>
                                29
                            </th>
                            <th>
                                30
                            </th>
                            <th>31

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.attendanceReport.map(user => {
                                return (
                                    <MembersAttendanceReport user={user} />
                                )
                            })
                        }
                    </tbody>
                </Table>
                <br />
                <Table
                    responsive
                    striped
                    hover
                    size="lg"
                    variant="dark"
                >
                    <tbody>
                        <tr>
                            <td style={{ backgroundColor: "green" }}>&nbsp;</td>
                            <td>
                                &nbsp;=&nbsp; <b>Presence</b>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: "blue" }}>&nbsp;</td>
                            <td>
                                &nbsp;=&nbsp; <b>Sick</b>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: "red" }}>&nbsp;</td>
                            <td>
                                &nbsp;=&nbsp; <b>Absence</b>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: "purple" }}>&nbsp;</td>
                            <td>
                                &nbsp;=&nbsp; <b> Leave</b>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: "#00c0c0" }}>&nbsp;</td>
                            <td>
                                &nbsp;=&nbsp; <b> Weekend</b>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
