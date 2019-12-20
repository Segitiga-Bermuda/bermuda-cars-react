import React, { Component } from 'react'
import {
    Col,
    Row,
    Form,
    FormControl,
    FormGroup,
    Button,
    ListGroup,
    Image
} from 'react-bootstrap'
import Item1 from './Item1'
import Item2 from './Item2'
import Add from '../assets/images/add.png'
import Background from '../assets/images/background-4.jpg'
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom'
import {
    verify,
    AXIOS
} from '../helpers'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: verify() || {},
            newTask: '',
            taskList: [],
            isFullscreen: false,
            keywords: '',
            isUncompletedTab: true
        }

        this.deleteTask = this.deleteTask.bind(this)
        this.updateTask = this.updateTask.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addTask = this.addTask.bind(this)
        this.checkOne = this.checkOne.bind(this)
    }

    addTask() {
        let path = `${process.env.REACT_APP_API}/tasks/add`

        AXIOS()
            .post(path, { task: this.state.newTask })
            .then(result => {
                this.setState({
                    taskList: result.data.data
                })

                Swal.fire({
                    title: 'Successfully Add Task',
                    text: 'New task have been added.',
                    icon: 'success'
                })
            })
    }

    updateTask(idx, newValue) {
        Swal.fire({
            title: 'Are You Sure Want to Update Task?',
            icon: 'warning',
            showCancelButton: true
        })
            .then(decision => {
                if (decision.value) {
                    let path = `${process.env.REACT_APP_API}/tasks/${idx}`

                    AXIOS()
                        .put(path, { task: newValue })
                        .then(result => {
                            this.setState({
                                taskList: result.data.data
                            })

                            Swal.fire({
                                title: 'Successfully Update Task',
                                text: 'Task have been updated.',
                                icon: 'success'
                            })
                        })
                }
            })
    }

    deleteTask(idx) {
        Swal.fire({
            title: 'Are You Sure Want to Delete Task?',
            icon: 'warning',
            showCancelButton: true
        })
            .then(decision => {
                if (decision.value) {
                    let path = `${process.env.REACT_APP_API}/tasks/${idx}`

                    AXIOS()
                        .delete(path)
                        .then(result => {
                            this.setState({
                                taskList: result.data.data
                            })

                            Swal.fire({
                                title: 'Successfully Delete Task',
                                text: 'Task have been deleted.',
                                icon: 'success'
                            })
                        })
                }
            })
    }

    checkOne(idx) {
        let path = `${process.env.REACT_APP_API}/tasks/completed/${idx}`

        AXIOS()
            .put(path)
            .then(result => {
                this.setState({
                    taskList: result.data.data
                })

                Swal.fire({
                    title: 'Successfully Update Task',
                    text: 'Task have been finished.',
                    icon: 'success'
                })
            })
    }

    componentDidMount() {
        let path = `${process.env.REACT_APP_API}/tasks`

        AXIOS()
            .get(path)
            .then(result => {
                this.setState({
                    taskList: result.data.data
                })
            })
    }

    handleChange(e) {
        let val = e.target.value

        this.setState({
            [e.target.name]: val
        })
    }

    render() {
        let user = localStorage.getItem('token')

        if (!user) {
            this.props.history.replace('/')
        }

        return (
            <div style={{
                backgroundColor: '#ffffff',
                backgroundImage: `url(${Background})`,
                paddingTop: '50px'
            }
            }>
                <Form style={{
                    margin: '0 auto',
                    width: '80%'
                }}>
                    <FormGroup>
                        <FormControl
                            type="text"
                            name="keywords"
                            value={this.state.keywords}
                            placeholder="Search..."
                            onChange={e => this.handleChange(e)}
                        />
                    </FormGroup>
                </Form>
                <Row>
                    <Col
                        xl={{
                            span: 6,
                            order: 1
                        }}
                        xs={{
                            span: 12,
                            order: 1
                        }}
                    >
                        <Form>
                            <h1
                                className="text-center display-4 text-danger"
                                style={{
                                    fontFamily: 'Aladin',
                                    backgroundColor: 'rgba(100, 100, 100, 0.75)',
                                }}
                            >
                                {
                                    this.state.user.fullName
                                }
                            </h1>
                            <FormGroup>
                                <FormControl
                                    type="text"
                                    name="newTask"
                                    value={this.state.newTask}
                                    placeholder="New Task"
                                    onChange={e => this.handleChange(e)}
                                />
                                <Button
                                    block={true}
                                    variant="primary"
                                    onClick={this.addTask}
                                >
                                    <Image
                                        src={Add}
                                        alt="Add"
                                        roundedCircle={true}
                                        style={{
                                            width: '25px',
                                            height: 'auto'
                                        }}
                                    />
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col
                        xl={{
                            span: 6,
                            order: 2
                        }}
                        xs={{
                            span: 12, order: 2
                        }}
                    >
                        <Row noGutters={true}>
                            <Col
                                xs={{
                                    span: 12,
                                    order: 1
                                }}
                                md={{
                                    span: 6,
                                    order: 1
                                }}
                            >
                                <Button
                                    block={true}
                                    className="bg-dark"
                                    style={{
                                        fontFamily: 'Calistoga',
                                        padding: '10px 0'
                                    }}
                                    onClick={() => {
                                        this.setState({
                                            isUncompletedTab: true
                                        })
                                    }}
                                >
                                    Uncompleted Task
                                </Button>
                            </Col>
                            <Col xs={{
                                span: 12,
                                order: 1
                            }}
                                md={{
                                    span: 6,
                                    order: 1
                                }}
                            >
                                <Button
                                    block={true}
                                    className="bg-dark"
                                    style={{
                                        fontFamily: 'Calistoga',
                                        padding: '10px 0'
                                    }}
                                    onClick={() => {
                                        this.setState({
                                            isUncompletedTab: false
                                        })
                                    }}
                                >
                                    Completed Task
                                </Button>
                            </Col>
                        </Row>
                        <div style={{
                            display: this.state.isUncompletedTab ? 'block' : 'none'
                        }}>
                            <h2
                                className="text-center text-warning"
                                style={{
                                    backgroundColor: 'rgba(100, 100, 100, 0.75)',
                                    fontFamily: 'Calistoga',
                                    padding: '10px 0'
                                }}
                            >
                                Uncompleted Task
                            </h2>
                            <ListGroup
                                className="mx-auto"
                                style={{
                                    height: '305px',
                                    overflow: 'auto'
                                }}
                            >
                                {
                                    this.state.taskList.map(item => {
                                        if (
                                            item.status === 'uncompleted' &&
                                            item.task
                                                .toLowerCase()
                                                .includes(this.state.keywords.toLowerCase())
                                        ) {
                                            return <Item1
                                                task={item}
                                                handleDelete={this.deleteTask}
                                                handleCheck={this.checkOne}
                                                handleUpdate={this.updateTask}
                                                key={item.id}
                                            />
                                        }
                                    })
                                }
                            </ListGroup>
                        </div>
                        <div style={{
                            display: this.state.isUncompletedTab ? 'none' : 'block'
                        }}>
                            <h2
                                className="text-center text-success"
                                style={{
                                    backgroundColor: 'rgba(100, 100, 100, 0.75)',
                                    fontFamily: 'Calistoga',
                                    padding: '10px 0'
                                }}
                            >
                                Completed Task
                            </h2>
                            <ListGroup
                                className="mx-auto"
                                style={{
                                    height: '305px',
                                    overflow: 'auto'
                                }}
                            >
                                {
                                    this.state.taskList.map(item => {
                                        if (
                                            item.status === 'completed' &&
                                            item.task
                                                .toLowerCase()
                                                .includes(this.state.keywords.toLowerCase())
                                        ) {
                                            return <Item2
                                                task={item}
                                                handleDelete={this.deleteTask}
                                                key={item.id}
                                            />
                                        }
                                    })
                                }
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default withRouter(Home)