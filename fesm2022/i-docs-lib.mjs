import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';

class IDocsLib {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.0.6", ngImport: i0, type: IDocsLib, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "22.0.6", type: IDocsLib, isStandalone: true, selector: "lib-i-docs-lib", ngImport: i0, template: ` <p>i-docs-lib works!</p> `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.0.6", ngImport: i0, type: IDocsLib, decorators: [{
            type: Component,
            args: [{ selector: 'lib-i-docs-lib', imports: [], template: ` <p>i-docs-lib works!</p> ` }]
        }] });

class FileStorages {
    clientId = 0;
    constructor() {
        console.log("FileStorages component initialized with clientId:", this.clientId);
    }
    ngOnInit() {
        console.log("FileStorages component initialized with clientId:", this.clientId);
    }
    ngOnChanges() {
        console.log("FileStorages component updated with clientId:", this.clientId);
    }
    onClick() {
        console.log("This button clicked");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.0.6", ngImport: i0, type: FileStorages, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "22.0.6", type: FileStorages, isStandalone: true, selector: "lib-file-storages", inputs: { clientId: "clientId" }, usesOnChanges: true, ngImport: i0, template: "<p>file-storages works!</p>\n<button (click)=\"onClick()\"> Click </button>\n", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.0.6", ngImport: i0, type: FileStorages, decorators: [{
            type: Component,
            args: [{ selector: 'lib-file-storages', imports: [], template: "<p>file-storages works!</p>\n<button (click)=\"onClick()\"> Click </button>\n" }]
        }], ctorParameters: () => [], propDecorators: { clientId: [{
                type: Input
            }] } });

/*
 * Public API Surface of i-docs-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FileStorages, IDocsLib };
//# sourceMappingURL=i-docs-lib.mjs.map
