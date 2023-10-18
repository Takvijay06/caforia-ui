import React from 'react';
import { Header } from './Layout/header';
import { Footer } from './Layout/footer';

export const AppWrapper = (props) => {
  return (
    <div>
        <Header />
        <hr/>
        <p1>Body of the web application</p1>
        {props.children}
        <hr/>
        <Footer />
    </div>
  )
}
