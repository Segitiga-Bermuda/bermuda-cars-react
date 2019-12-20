import React, { Component } from 'react'

export default class MembersAttendanceReport extends Component {
    constructor(props) {
        super(props)

        this.showAttendanceReport = this.showAttendanceReport.bind(this)
        this.watchReport = this.watchReport.bind(this)
    }

    showAttendanceReport() {
        let report = [],
            records = []

        for (let x = 0; x < this.props.user.length; ++x) {
            records.push(this.props.user[x].date)
        }

        for (let y = 1; y <= 31; ++y) {
            let index = records.findIndex(item => {
                if (item === y) {
                    return true
                }

                return false
            })

            if (index > -1) {
                let td = this.watchReport(this.props.user[index].status)

                report.push((td))
            } else {
                report.push((
                    <td style={{
                        backgroundColor: '#00c0c0'
                    }}>
                    </td>
                ))
            }
        }

        console.log(report)
        return report
    }

    watchReport(status) {
        if (status === 'Presence') {
            return (
                <td style={{
                    backgroundColor: 'green'
                }}>
                </td>
            )
        } else if (status === 'Sick') {
            return (
                <td style={{
                    backgroundColor: 'blue'
                }}>
                </td>
            )
        } else if (status === 'Absence') {
            return (
                <td style={{
                    backgroundColor: 'red'
                }}>
                </td>
            )
        } else if (status === 'Leave') {
            return (
                <td style={{
                    backgroundColor: 'purple'
                }}>
                </td>
            )
        }
    }

    render() {
        return (
            <>
                <tr>
                    <td>
                        {
                            this.props.user[0].employeeId
                        }
                    </td>
                    <td>
                        {
                            this.props.user[0].fullName
                        }
                    </td>
                    <td>
                        {
                            this.props.user[0].departement
                        }
                    </td>
                    {
                        this.showAttendanceReport().map(report => report)
                    }
                </tr>
            </>
        )
    }
}
