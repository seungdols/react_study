import React, { Component } from 'react'

export default class IterationSample extends Component {
    render() {
        const names = ['눈사람','고양이','강아지','멍멍이','댕댕이']
        const nameList = names.map((name, index) => <li key={index}>{name}</li>)
        return (
            <ul>
                {nameList}
            </ul>
        )
    }
}
