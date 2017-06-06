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
			image_url: 'http://www.google.com'
		},
		{
			title: "Secret File 2 - Confidential",
			description: "Top level clearance needed",
			file_url: 'http://www.google.com',
			updated_at: 'just now',
			image_url: 'http://www.google.com'
		},
		{
			title: "Secret File 3 - Confidential",
			description: "Top level clearance needed",
			file_url: 'http://www.google.com',
			updated_at: 'just now',
			image_url: 'http://www.google.com'
		}
	]
}