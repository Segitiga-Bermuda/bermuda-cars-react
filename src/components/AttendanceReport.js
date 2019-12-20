import React, { Component } from 'react'
import { AXIOS, verify } from '../helpers'
import { Table, Carousel } from "react-bootstrap";
import MembersAttendanceReport from './MembersAttendanceReport.js'

export default class AttendanceReport extends Component {
    constructor(props) {
        super(props)

        this.state = {
            attendanceReport: []
        }
    }

    componentDidMount() {
        let path = `${process.env.REACT_APP_API}/attreport/2019/December`
        AXIOS()
            .get(path)
            .then(result => {
                this.setState({
                    attendanceReport: result.data.data
                })

                console.log(this.state.attendanceReport)
            })
    }

    render() {
        return (
            <div>
                <Table
                    responsive
                    striped
                    bordered
                    hover
                    style={{ marginTop: "100px" }}
                >
                    <thead>
                        <tr>
                            <th rowSpan="2">Employee ID</th>
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
                    bordered
                    hover
                    size="lg"
                >
                    <tbody>
                        <tr>
                            <td style={{ backgroundColor: "green" }}>, </td>
                            <td>
                                ==> <b>Presence</b>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: "blue" }}> </td>
                            <td>
                                ==> <b>Sick</b>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: "red" }}> </td>
                            <td>
                                ==> <b>Absence</b>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: "purple" }}> </td>
                            <td>
                                ==> <b> Leave</b>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: "white" }}> </td>
                            <td>
                                ==> <b> Weekend</b>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
