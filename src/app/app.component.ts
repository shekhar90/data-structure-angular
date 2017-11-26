import { Component } from '@angular/core';
import { Node } from './node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tree: Node[] = [
    {
      data: 'root',
      children: [
        {
          data: 'child1',
          children: [],
          parent: this
        },
  {
    data: 'child2',
    children: [],
    parent: this
  }],
  parent: null }];
}
