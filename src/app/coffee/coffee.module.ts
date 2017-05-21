import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeMachineComponent } from './coffee-machine/coffee-machine.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CoffeeMachineComponent
    ],
    exports: [
        CoffeeMachineComponent
    ],
})
export class CoffeeModule {}
