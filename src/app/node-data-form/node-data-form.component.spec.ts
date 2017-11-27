import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDataFormComponent } from './node-data-form.component';

describe('NodeDataFormComponent', () => {
  let component: NodeDataFormComponent;
  let fixture: ComponentFixture<NodeDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
