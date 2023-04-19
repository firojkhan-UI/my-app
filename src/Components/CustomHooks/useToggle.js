import React, { useState } from "react";

export default function useToggle (intialVal = true)  {
    const [ toggle, setToggle ] = useState(intialVal)

}