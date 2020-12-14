import React from "react";
import { menuItems } from "../shared/menuItems";

function Menu() {
    

    let content = [];
    let row = [];
    menuItems.forEach((item, i) =>{
      if((i+1) % 4 === 0){
        content.push(
          <div className="row" key={item.id}>       
            <article key={item.id} className="col-md-3">no</article>
          </div>
        )
      }else{
      row.push(<article key={item.id} className="col-md-3">yes</article>);
      }
  });
    return (<div className="container">
        {content}
    </div>);
}

export default Menu;
