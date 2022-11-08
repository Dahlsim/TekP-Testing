import React from "react";
import { Row, Card, CardBody, Col, CardTitle, Table } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import Wheel from '../../../components/wheel'

const MyWheel = (props) => {
    return (
        <>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="menu.my-wheel" match={props.match} />
                    <Separator className="mb-5" />
                </Colxx>
            </Row>

            <p style={{ marginBottom: 30 }}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.</p>


            <Row>
                <Col className="col-md-5">
                    <Wheel />
                </Col>

                <Col className="col-md-6">
                    <Card>
                        <CardBody>
                            <CardTitle>

                                <p>W ID : 00234 <br />Split W ID : 00234</p>
                                 My wheel members
                            </CardTitle>

                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Wheel ID</th>
                                        <th>Splitted From</th>
                                        <th>Level</th>
                                        <th>Payment Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">7</th>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">8</th>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">9</th>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


        </>
    )
}

export default MyWheel;