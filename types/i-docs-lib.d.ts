import * as i0 from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';

declare class IDocsLib {
    static ɵfac: i0.ɵɵFactoryDeclaration<IDocsLib, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IDocsLib, "lib-i-docs-lib", never, {}, {}, never, never, true, never>;
}

declare class FileStorages implements OnInit, OnChanges {
    clientId: number;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileStorages, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileStorages, "lib-file-storages", never, { "clientId": { "alias": "clientId"; "required": false; }; }, {}, never, never, true, never>;
}

export { FileStorages, IDocsLib };
