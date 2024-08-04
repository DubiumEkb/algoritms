/**
 * Сортирует массив чисел в порядке возрастания или убывания.
 *
 * @param arr - Массив чисел, который нужно отсортировать.
 * @param order - Как сортировать: 'asc' для по возрастанию или 'desc' для по убыванию. По умолчанию 'asc'.
 * @returns Отсортированный массив чисел.
 */
function selectionSort(arr: number[], order?: "asc" | "desc"): number[] {
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
				(order === "asc" && arr[j] < arr[extremeIndex]) ||
				// Если сортируем по убыванию, ищем максимальный элемент
				(order === "desc" && arr[j] > arr[extremeIndex])
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

const arrayNumberAsc = [64, 25, 12, 22, 11];
const arrayNumberDesc = [64, 25, 12, 22, 11];

console.log("Ascending:", selectionSort(arrayNumberAsc, "asc")); // [11, 12, 22, 25, 64]
console.log("Descending:", selectionSort(arrayNumberDesc, "desc")); // [64, 25, 22, 12, 11]
