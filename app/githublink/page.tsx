"use client";

import Link from "next/link";
import { useState } from "react";


export default function Page() {
    return (
    <>
        <h1>GitHub Repo</h1>
        <br/>
        <p>Here's a link to my Github Repo</p>
        <Link href="https://github.com/jettgirard/nextjs_hw"> Github Repo </Link>
    </>
    );
};

