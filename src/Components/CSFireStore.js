import React, { useEffect, useState } from "react";
import "firebase/compat/firestore";
import app from "../firebaseinitial";
// import { getDoc } from '@firebase/firestore'

export default function CSFireStore() {
  // const ref = app.firestore().collection("Clothing Store");
  // const [data, setData] = useState([]);
  // const [loader, setLoader] = useState(true);

  // function getData() {
  //   ref.onSnapshot((shot) => {
  //     const items = [];
  //     shot.forEach((doc) => items.push(doc.data()));
  //     setData(items);
  //     setLoader(false);
  //   });
  // }

  // useEffect(() => {
  //   getData();
  //   //  console.log(data);
  // }, []);

  // // async function getData(){
  // //   const data = await getDoc(ref.doc(
  // //     'clothing'))
  // //     console.log(data.data())
  // // }
  // // getData()
  // console.log(ref);

  return <div>CSFireStore</div>;
}
