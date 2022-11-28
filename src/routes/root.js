import React from "react";
import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
// import Home from "../components/home/Home";
import RootLayout from "../components/layouts/RootLayout";
import Home from './../components/home/Home';
import About from './../components/about/About';
import Contact, {form} from './../components/contact/Contact';
import { users } from "../helpers/functions";
import Counter from './../components/counter/Counter';


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home />}></Route>
            <Route path="/about"  loader={users} element={<About />}></Route>
            <Route path="/contact" action={form} element={<Contact />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
        </Route>
    )
);