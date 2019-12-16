import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";

export default class Absen extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hover style={{ marginTop: "100px" }}>
          <thead>
            <tr>
              <td colSpan="3"></td>

              <td colSpan="31" style={{ textAlign: "center" }}>
                <Carousel controls={true} indicators={false}>
                  <Carousel.Item>
                    <p>July</p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <p>Agustus</p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <p>September</p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <p>Oktober</p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <p>November</p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <p>Desember</p>
                  </Carousel.Item>
                </Carousel>
              </td>
            </tr>
            <tr>
              <th>NIK</th>
              <th>Name</th>
              <th>Role</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>12</th>
              <th>13</th>
              <th>14</th>
              <th>15</th>
              <th>16</th>
              <th>17</th>
              <th>18</th>
              <th>19</th>
              <th>20</th>
              <th>21</th>
              <th>22</th>
              <th>23</th>
              <th>24</th>
              <th>25</th>
              <th>26</th>
              <th>27</th>
              <th>28</th>
              <th>29</th>
              <th>30</th>
              <th>31</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Adi</td>
              <td>Admin</td>
              <td style={{ backgroundColor: "blue" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "blue" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "red" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "green" }}></td>
              <td style={{ backgroundColor: "red" }}></td>
              <td style={{ backgroundColor: "red" }}></td>
            </tr>
          </tbody>
        </Table>

        <Table>
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
              ==> <b>Abence</b>
            </td>
          </tr>
          <tr>
            <td style={{ backgroundColor: "purple" }}> </td>
            <td>
              ==> <b> Leave</b>
            </td>
          </tr>
        </Table>
      </div>
    );
  }
}
