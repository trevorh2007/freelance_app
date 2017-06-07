"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const proposal_1 = require("./proposal");
let ProposalListComponent = class ProposalListComponent {
    constructor() {
        this.proposalOne = new proposal_1.Proposal(1, 'Abc Company', 'http://www.geekfulthinking.com', 'Ruby on Rails', 150, 120, 15, 'trevor@geekfulthinking.com');
        this.proposalTwo = new proposal_1.Proposal(2, 'Xyz Company', 'http://www.geekfulthinking.com', 'Ruby on Rails', 150, 120, 15, 'trevor@geekfulthinking.com');
        this.proposalThree = new proposal_1.Proposal(3, 'Your Company', 'http://www.geekfulthinking.com', 'Ruby on Rails', 150, 120, 15, 'trevor@geekfulthinking.com');
        this.proposals = [
            this.proposalOne,
            this.proposalTwo,
            this.proposalThree
        ];
    }
};
ProposalListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'proposal-list',
        templateUrl: 'proposal-list.component.html',
        styleUrls: ['proposal-list.component.css']
    })
], ProposalListComponent);
exports.ProposalListComponent = ProposalListComponent;
//# sourceMappingURL=proposal-list.component.js.map