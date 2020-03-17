import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/* COMPONENT */
import { ResourcesComponent }   from './resources.component';

/* MOCKS */
import { MockSvgIconComponent } from '@core/mocks/svg-icon.mock';


describe('AppHomeResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResourcesComponent,
        MockSvgIconComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});