import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(1, 'Abc Company', 'http://www.geekfulthinking.com', 'Ruby on Rails', 150, 120, 15, 'trevor@geekfulthinking.com')
	proposalTwo: Proposal = new Proposal(2, 'Xyz Company', 'http://www.geekfulthinking.com', 'Ruby on Rails', 150, 120, 15, 'trevor@geekfulthinking.com')
	proposalThree: Proposal = new Proposal(3, 'Your Company', 'http://www.geekfulthinking.com', 'Ruby on Rails', 150, 120, 15, 'trevor@geekfulthinking.com')

	proposals: Proposal[] = [
														this.proposalOne,
														this.proposalTwo,
														this.proposalThree
													]

}