import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboArticleComponent } from './jumbo-article.component';

describe('JumboArticleComponent', () => {
  let component: JumboArticleComponent;
  let fixture: ComponentFixture<JumboArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumboArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
