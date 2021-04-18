import { useParams } from "react-router-dom";
import React from "react";


export default function OneTask () {

  const params = useParams()
  console.log(params, 'params');

  return (
    <div>This is a {params.id} task</div>
  )
}