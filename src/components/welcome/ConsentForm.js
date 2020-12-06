import React, {useEffect, useState} from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "../../css/consentForm.css";
import consent from "./consent.pdf";
import $ from 'jquery';

// component for rendering the consent form
// see https://www.npmjs.com/package/react-pdf
export default function ConsentForm() {
    const [numPages, setNumPages] = useState(null);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        $(document).ready(function() {
            $('#doc').on('scroll', function() {
                if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                    setScrolled(true)
                }
            })
        });
    });

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <div id="doc" className="all-page-container">
                <Document
                    file={consent}
                    options={{ workerSrc: "/pdf.worker.js" }}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                    ))}
                </Document>
            </div>
            <br/>
            <button disabled={!scrolled} className="begin-button" onClick={() => {window.location.href = '/level1'}}>
                Click here to consent and begin
            </button>
        </div>
    )
}