//above line so typescript can locate iformatcurrency code
class BrassMaxContsCalculator {
  private maxPensionablePayInput: HTMLInputElement;

  constructor(private widgetId: string) {
    this.init();
  }

  private init(): void {
    this.maxPensionablePayInput = document.getElementById(
      `max-pensionable-pay-input-${this.widgetId}`
    ) as HTMLInputElement;

    this.setupListeners();
  }

  private setupListeners(): void {
    this.maxPensionablePayInput.addEventListener("input", () => {});
  }
}
