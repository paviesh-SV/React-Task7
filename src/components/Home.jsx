import React from "react";

function Home() {
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div
                        className="heading border border-warning text-warning p-5 mt-3 mb-3 rounded-4 "
                        style={{ backgroundColor: "#2f3d46" }}>
                        <h1 className="text-center mt-3 ">
                            Welcome to{" "}
                            <span style={{ color: "#f9bc98" }}>
                                <i>Library</i>
                            </span>{" "}
                            Mangement System
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home