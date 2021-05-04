export class Guests {
  children = 0;
  adults = 0;

  constructor() { }

  showTotal(): number {
    return this.children + this.adults;
  }

  addChild(): void {
    this.children += 1;
  }

  removeChild(): void {
    if (this.children > 0) {
      this.children -= 1;
    }
  }

  addAdult(): void {
    this.adults += 1;
  }

  removeAdult(): void {
    if (this.adults > 0) {
      this.adults -= 1;
    }
  }
}
