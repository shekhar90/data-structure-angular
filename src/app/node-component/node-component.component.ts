import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../node';

@Component({
  selector: 'app-node-component',
  templateUrl: './node-component.component.html',
  styleUrls: ['./node-component.component.css']
})
export class NodeComponentComponent implements OnInit {

  @Input() tree: Node;
  constructor() { }

  ngOnInit() {
  }
  addNode(node: Node): void {
    node.children.push({data: 'child '  + node.children.length, children: [], parent: node});
  }
  deleteNode(node: Node): void {
    const Parent: any = node.parent;
    Parent.children.forEach((element, index) => {
      if ( element === node ) {
        Parent.children.splice(index, 1);
      }
    });

    if(node.parent) {
      
    }
  }
}
