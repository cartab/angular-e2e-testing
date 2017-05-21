import {Component} from '@angular/core';

@Component({
    selector: 'app-coffee-machine',
    templateUrl: './coffee-machine.component.html',
    styleUrls: ['./coffee-machine.component.css']
})
export class CoffeeMachineComponent {
    private timer: any;

    menu: Array<string> = ['Espresso', 'Cappuccino', 'Latte', 'Mocha'];
    isBrewing = false;
    drink: string;
    orderReady = false;

    private endOrder(): void {
        this.isBrewing = false;
        this.drink = '';
    }

    placeOrder(item: string): void {
        this.isBrewing = true;
        this.drink = item;

        this.timer = setTimeout(() => {
            this.endOrder();
            this.orderReady = true;
        }, 2000);
    }

    cancelOrder(): void {
        clearTimeout(this.timer);
        this.endOrder();
    }

    collectOrder(): void {
        this.orderReady = false;
    }
}
