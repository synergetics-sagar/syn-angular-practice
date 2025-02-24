import { ComponentFixture, TestBed } from "@angular/core/testing"
import { CounterComponent } from "./counter.component"
import { By } from "@angular/platform-browser"


describe("Testing Counter Component", ()=>{

    let component: CounterComponent
    let fixture: ComponentFixture<CounterComponent>

    beforeEach(async ()=>{
        await TestBed.configureTestingModule({
            imports: [CounterComponent]
        }).compileComponents()
        
        fixture = TestBed.createComponent(CounterComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("Was counter component created?", ()=>{
        // Assertion
        expect(component).toBeTruthy()
    })

    it("Testing incrementCount function logic", ()=>{
        // Invoke the function
        debugger
        component.incrementCount()
        // Check whether the count is equal to 1
        expect(component.count).toBe(1)
    })


    it("Simulating click event on + increment button", ()=>{
        let incrementButton = fixture.debugElement.query(By.css(".inc"))
        incrementButton.triggerEventHandler("click", null);
        fixture.detectChanges()
        expect(component.count).toBe(1)
    })

})