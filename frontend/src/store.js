
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

export function  Store (){

    const [oneView, setOneView] = useState(0);

    function View1() {
        return(<div>
            <h1>This is View 1</h1>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={200} alt="view1" />
        </div>);
    }

    function View2() {
        return(<div>
            <h1>This is View 2</h1>
            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" width={200} alt="view2" />
        </div>);
    }

    function View3() {
        return(<div>
            <h1>This is View 3</h1>
            <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" width={200} alt="view3" />
        </div>);
    }

    function View4() {
        return(<div>
            <h1>This is View 4</h1>
            <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" width={200} alt="view4" />
        </div>);
    }

    function View5() {
        return(<div>
            <h1>This is View 5</h1>
            <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" width={200} alt="view5" />
        </div>);
    }

    const setViewOne = () => {
        if (oneView === 0) {
            setOneView(1);
        } else if (oneView === 1){
            setOneView(2);
        } else if (oneView === 2){
            setOneView(3);
        } else if (oneView === 3){
            setOneView(4);
        } else {
            setOneView(0);
        }
    }


    return(<div>
        <button onClick ={setViewOne}>One</button>

        {oneView === 0 && <View1 />}
        {oneView === 1 && <View2 />}
        {oneView === 2 && <View3 />}
        {oneView === 3 && <View4 />}
        {oneView === 4 && <View5 />}
    </div>);

}

export default Store;