import React from 'react';
import { Navigate } from "react-router-dom";

/**
 * There is no home page so this is an automatic redirection to the user 12
 */
export function Home() {
    return <Navigate to="/12"></Navigate>
}