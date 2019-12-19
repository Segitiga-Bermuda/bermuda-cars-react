import React, { Component } from 'react'

export default class Dates extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <th>
                {
                    this.props.date
                }
            </th>
        )
    }
}
