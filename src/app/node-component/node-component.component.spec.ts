import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeComponentComponent } from './node-component.component';

describe('NodeComponentComponent', () => {
  let component: NodeComponentComponent;
  let fixture: ComponentFixture<NodeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
