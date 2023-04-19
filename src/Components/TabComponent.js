import { tab } from "@testing-library/user-event/dist/tab";
import React, { useState } from "react";
import styled from "styled-components";

const TabWrapper = styled.ul`
    display: flex;
    justify-content: space-evenly;
    
`
const ListStyle = styled.li`
    list-style: none;
    font-size: 1.5rem;
    cursor: pointer;
`
const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
`

const tabData = [{tab: 'Tab1',content: 'Relaince Jio'},{tab: 'Tab2',content: 'Jio Mart'},{tab: 'Tab3',content: 'Relaince Centro'}]

const TabComponent = props => {
    const [ item, setItem ] = useState(tabData[0].content)
    return (
        <>
          <div>
            <TabWrapper>{tabData?.map(dt => 
            <ListStyle onClick={()=> setItem(dt.content)}>{dt.tab}</ListStyle>)}
            </TabWrapper>
          </div>
          <ContentWrapper>
            <Content data = {item} />
          </ContentWrapper>
        </>
    )
}
export default TabComponent;

const Content = props => {
    return (
        <>
        <h1>{props.data}</h1>
        </>
    )
}