import React from "react";
import { menuItems } from "../shared/menuItems";
import { Row, Col } from "reactstrap";
import { Fade } from "react-animation-components";

function Menu() {
    //   let content = [];
    //   let row = [];
    //   menuItems.forEach((item, i) =>{
    //     if((i+1) % 4 === 0){
    //       content.push(
    //         <div className="row" key={item.id}>
    //           <article key={item.id} className="col-md-3">no</article>
    //         </div>
    //       )
    //     }else{
    //     row.push(<article key={item.id} className="col-md-3">yes</article>);
    //     }
    // });

    const content = menuItems.map((item) => {
        return (
            <Col md="4" key={item.id}>
                <img
                    className="w-100 img-thumb gallery-img"
                    src={item.src}
                    alt={item.altText}
                />
                <div className="overlay text-center pt-100">
                    <h4 className="text-white">{item.itemName}</h4>
                    <div className="text-white">$6.50</div>
                    <p className="text-white">{item.desc}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </Col>
        );
    });

    return (
        <div className="container">
            <Fade in>
                <Row className="py-4">{content}</Row>
            </Fade>
        </div>
    );
}

export default Menu;
