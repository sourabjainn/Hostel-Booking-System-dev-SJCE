import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfFile from './rules.pdf'
import pdfFile1 from './rooms.pdf'

function Aboutscreen() {

    return (
        <div className='container'>
            <h1 className='my-3'>About us</h1>
            <div className="accordion my-3" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                About
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body"><p>The College has separate hostel facilities for about 570 boys [UG-515 and PG (M.Tech & MCA only).The boys’
                            hostel
                            is located in the college premises, in Block-1 (M), Block-2 (H), Block-3 (L), PG Block and GH Blocks (1,2,5 &
                            6),all
                            located on the north-end of the campus.The hostel runs a mess , also RO System for drinking water (24
                            hours),
                            Electricity though back up (24 hours),Hot water facility (Geyser), a separate TV room, reading hall (News
                            paper), Wi-Fi
                            internet facility and Parking lot for two wheelers are provided in the Boys’ Hostel.

                            Anti-ragging squads comprising of senior Professors supervise at both college as well as Hostel premises</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Rules and Regulations
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            <div>
                                <Document file={pdfFile}>
                                    <Page pageNumber={1} />
                                </Document>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Complete blockwise details of rooms
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                            <div>
                                <Document file={pdfFile1}>
                                    <Page pageNumber={1} />
                                </Document>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Aboutscreen