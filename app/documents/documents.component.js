"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let DocumentsComponent = class DocumentsComponent {
    constructor() {
        this.pageTitle = "Documents";
        this.documents = [
            {
                title: "Secret File 1 - Confidential",
                description: "Top level clearance needed",
                file_url: 'http://www.google.com',
                updated_at: 'just now',
                image_url: 'http://www.dmv.gov.za/img/documents.jpg'
            },
            {
                title: "Secret File 2 - Confidential",
                description: "Top level clearance needed",
                file_url: 'http://www.google.com',
                updated_at: 'just now',
                image_url: 'http://greenapplemortgage.com/wp-content/uploads/2015/12/Documents.jpg'
            },
            {
                title: "Secret File 3 - Confidential",
                description: "Top level clearance needed",
                file_url: 'http://www.google.com',
                updated_at: 'just now',
                image_url: 'http://printeger.eu/wp-content/uploads/2016/03/iStock_000028512836_Full_MIT-cOPYRIGHT.jpg'
            }
        ];
    }
};
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html'
    })
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map