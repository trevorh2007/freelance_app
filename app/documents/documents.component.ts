import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	pageTitle: string = "Documents"

	documents: Document[] = [
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
	]
}