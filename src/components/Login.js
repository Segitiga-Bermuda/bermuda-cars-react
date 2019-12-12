import React from "react";
<<<<<<< HEAD
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  profile: {
    width: "200px",
    height: "200px"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Grid container spacing={0}>
        <Grid item sm={6} className={classes.profile}>
          asd
        </Grid>
        <Grid item sm={6}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </form>
          </div>
          <Box mt={8}>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Box>
        </Grid>
      </Grid>
=======
import Profile from "../assets/images/teamwork.png";
import {
  Col,
  Row,
  Container,
  Image,
  Button,
  FormControl,
  Form,
  FormGroup
} from "react-bootstrap";
import { Link } from "react-router-dom";
import background from "../assets/images/background/bg1.jpg";

export default function Login() {
  return (
    <Container
      fluid={true}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: window.innerHeight - 40 + "px",
        padding: "0",
        width: "100%"
      }}
    >
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Row
            style={{
              display: "flex",
              minHeight: window.innerHeight - 40 + "px",
              alignItems: "center"
            }}
          >
            <Col xs={{ span: 12 }}>
              <Row
                style={{
                  backgroundColor: "rgba(212, 218, 247, 0.5)",
                  borderRadius: "20px"
                }}
              >
                <Col
                  xs={{ span: 12, order: 1 }}
                  style={{
                    backgroundColor: "#183bf0",
                    boxSizing: "border-box",
                    padding: "10px",
                    textAlign: "center",
                    color: "white",
                    borderRadius: "20px 20px 0 0",
                    fontWeight: 900,
                    fontSize: "2em"
                  }}
                >
                  Login
                </Col>
                <Col
                  md={{ span: 6, order: 2 }}
                  xs={{ span: 12, order: 2 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    boxSizing: "border-box",
                    padding: "20px"
                  }}
                >
                  <Image
                    roundedCircle
                    src={Profile}
                    alt="profile"
                    style={{
                      display: "block",
                      width: "75%",
                      margin: "0 auto"
                    }}
                  />
                </Col>
                <Col
                  md={{ span: 6, order: 3 }}
                  xs={{ span: 12, order: 3 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    boxSizing: "border-box",
                    padding: "20px",
                    justifyContent: "center"
                  }}
                >
                  <Form noValidate>
                    <FormGroup>
                      <FormControl as="select">
                        <option value="Admin">Admin</option>
                        <option value="Executive">Executive</option>
                        <option value="Employer">Employer</option>
                        <option value="User">User</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        placeholder="Email"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        required
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        placeholder="Password"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Button
                        type="submit"
                        variant="success"
                        style={{
                          display: "block",
                          margin: "0 auto",
                          minWidth: "150px"
                        }}
                      >
                        Sign In
                      </Button>
                    </FormGroup>
                    <FormGroup
                      style={{
                        backgroundColor: "white"
                      }}
                    >
                      <p
                        style={{
                          boxSizing: "border-box",
                          padding: "5px 5px 2.5px 5px",
                          textAlign: "center"
                        }}
                      >
                        Don't have an account?&nbsp;
                        <Link to="/user/register">Create account.</Link>
                      </p>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
>>>>>>> danna
    </Container>
  );
}
