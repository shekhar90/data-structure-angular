import { Component, OnInit, Input } from '@angular/core';
import {
  Node
} from '../node';
// import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-node-data-form',
  templateUrl: './node-data-form.component.html',
  styleUrls: ['./node-data-form.component.css']
})
export class NodeDataFormComponent implements OnInit {
  @Input() clickedNode: Node;
  constructor() { }

  ngOnInit() {
  }
  node: Node = {
    data: "",
    children: [],
    parent: null
  }
  createNode(): void {
    this.clickedNode.children.push({
      data: this.node.data,
      children: [],
      parent: this.clickedNode
    });
    // console.log(this.node.data);
  };

}
