export class ErrorUtil {
	static throwErrorIfConditionMet(
		condition: boolean,
		exceptionSupplier: () => Error
	): void {
		if (condition) {
			throw exceptionSupplier()
		}
	}
}
