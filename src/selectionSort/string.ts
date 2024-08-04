/**
 * Сортирует массив строк в порядке возрастания или убывания.
 *
 * @param arr - Массив строк, который нужно отсортировать.
 * @param order - Как сортировать: 'asc' для по возрастанию или 'desc' для по убыванию. По умолчанию 'asc'.
 * @returns Отсортированный массив строк.
 */
function selectionSortStrings(arr: string[], order?: "asc" | "desc"): string[] {
	// Если порядок сортировки не указан, используем 'asc' по умолчанию
	order = order ?? "asc";

	// Определяем длину массива
	const n = arr.length;

	// Проходим по массиву, кроме последнего элемента
	for (let i = 0; i < n - 1; i++) {
		// Считаем, что текущий элемент (i) содержит минимальный/максимальный элемент
		let extremeIndex = i;

		// Ищем лучший элемент в оставшейся части массива
		for (let j = i + 1; j < n; j++) {
			if (
				// Если сортируем по возрастанию, ищем минимальный элемент
				(order === "asc" &&
					arr[j].localeCompare(arr[extremeIndex]) < 0) ||
				// Если сортируем по убыванию, ищем максимальный элемент
				(order === "desc" &&
					arr[j].localeCompare(arr[extremeIndex]) > 0)
			) {
				// Обновляем индекс экстремального элемента
				extremeIndex = j;
			}
		}

		// Если нашли элемент, который должен быть на текущей позиции, меняем их местами
		if (extremeIndex !== i) {
			[arr[i], arr[extremeIndex]] = [arr[extremeIndex], arr[i]];
		}
	}

	// Возвращаем отсортированный массив
	return arr;
}

// Примеры использования
const arrayStringAsc = ["apple", "orange", "banana", "grape"];
const arrayStringDesc = ["apple", "orange", "banana", "grape"];

console.log("Ascending:", selectionSortStrings(arrayStringAsc, "asc")); // ['apple', 'banana', 'grape', 'orange']
console.log("Descending:", selectionSortStrings(arrayStringDesc, "desc")); // ['orange', 'grape', 'banana', 'apple']
