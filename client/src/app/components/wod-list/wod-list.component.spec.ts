import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WODListComponent } from './wod-list.component';

describe('WODListComponent', () => {
    let component: WODListComponent;
    let fixture: ComponentFixture<WODListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [WODListComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(WODListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
