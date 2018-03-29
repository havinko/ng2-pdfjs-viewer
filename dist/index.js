import { Component, Input, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PdfJsViewerComponent = /** @class */ (function () {
    function PdfJsViewerComponent() {
        this.externalWindow = false;
        this.showSpinner = true;
        this.openFile = true;
        this.download = true;
        this.viewBookmark = true;
    }
    Object.defineProperty(PdfJsViewerComponent.prototype, "pdfSrc", {
        set: /**
         * @param {?} src
         * @return {?}
         */
        function (src) {
            this.src = src;
            this.loadPdf();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PdfJsViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loadPdf();
    };
    /**
     * @return {?}
     */
    PdfJsViewerComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.loadPdf();
    };
    /**
     * @return {?}
     */
    PdfJsViewerComponent.prototype.loadPdf = /**
     * @return {?}
     */
    function () {
        if (!this.src) {
            return;
        }
        if (this.externalWindow && typeof this.viewerTab === 'undefined') {
            this.viewerTab = window.open('', '_blank');
            if (this.viewerTab == null) {
                console.log("ng2-pdfjs-viewer: For 'externalWindow = true'. i.e opening in new tab, to work, pop-ups should be enabled.");
                return;
            }
            if (this.showSpinner) {
                this.viewerTab.document.write("\n          <style>\n          .loader {\n            position: fixed;\n            left: 40%;\n            top: 40%;\n            border: 16px solid #f3f3f3;\n            border-radius: 50%;\n            border-top: 16px solid #3498db;\n            width: 120px;\n            height: 120px;\n            animation: spin 2s linear infinite;\n          }\n          @keyframes spin {\n            0% {\n              transform: rotate(0deg);\n            }\n            100% {\n              transform: rotate(360deg);\n            }\n          }\n          </style>\n          <div class=\"loader\"></div>\n        ");
            }
        }
        var /** @type {?} */ fileUrl;
        //if (typeof this.src === "string") {
        //  fileUrl = this.src;
        //}
        //if (typeof this.src === "string") {
        //  fileUrl = this.src;
        //}
        if (this.src instanceof Blob) {
            fileUrl = encodeURIComponent(URL.createObjectURL(this.src));
        }
        else if (this.src instanceof Uint8Array) {
            var /** @type {?} */ blob = new Blob([this.src], { type: "application/pdf" });
            fileUrl = encodeURIComponent(URL.createObjectURL(blob));
        }
        else {
            fileUrl = this.src;
        }
        var /** @type {?} */ viewerUrl = "assets/pdfjs/web/viewer.html?file=" + fileUrl;
        if (this.downloadFileName) {
            viewerUrl += "&fileName=" + this.downloadFileName + ".pdf";
        }
        if (typeof this.openFile !== 'undefined') {
            viewerUrl += "&openFile=" + this.openFile;
        }
        if (typeof this.download !== 'undefined') {
            viewerUrl += "&download=" + this.download;
        }
        if (typeof this.viewBookmark !== 'undefined') {
            viewerUrl += "&viewBookmark=" + this.viewBookmark;
        }
        if (this.externalWindow) {
            this.viewerTab.location.href = viewerUrl;
        }
        else {
            this.iframe.nativeElement.src = viewerUrl;
        }
    };
    PdfJsViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-pdfjs-viewer',
                    template: "<iframe [hidden]=\"externalWindow || (!externalWindow && !src)\" #iframe width=\"100%\" height=\"100%\"></iframe>"
                },] },
    ];
    /** @nocollapse */
    PdfJsViewerComponent.ctorParameters = function () { return []; };
    PdfJsViewerComponent.propDecorators = {
        "iframe": [{ type: ViewChild, args: ['iframe',] },],
        "externalWindow": [{ type: Input },],
        "src": [{ type: Input },],
        "showSpinner": [{ type: Input },],
        "downloadFileName": [{ type: Input },],
        "openFile": [{ type: Input },],
        "download": [{ type: Input },],
        "viewBookmark": [{ type: Input },],
        "pdfSrc": [{ type: Input },],
    };
    return PdfJsViewerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PdfJsViewerModule = /** @class */ (function () {
    function PdfJsViewerModule() {
    }
    /**
     * @return {?}
     */
    PdfJsViewerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PdfJsViewerModule
        };
    };
    PdfJsViewerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        PdfJsViewerComponent
                    ],
                    exports: [
                        PdfJsViewerComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    PdfJsViewerModule.ctorParameters = function () { return []; };
    return PdfJsViewerModule;
}());

export { PdfJsViewerModule, PdfJsViewerComponent };
